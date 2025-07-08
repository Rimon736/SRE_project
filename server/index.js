const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion , ObjectId} = require('mongodb');
require('dotenv').config()

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.SECRET_KEY}@cluster1.2yezadc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const DoctorsCollection = client.db("SRE_DB").collection("Doctors");
        const UserCollection =client.db("SRE_DB").collection("Users");

        app.get('/UserInfo', async (req, res) => {
            const result = await UserCollection.find().toArray();
            res.send(result);
        })
        app.get('/UserInfo/:id', async (req, res) => {
            const id = req.params.id;
            const query = {_id: new ObjectId(id)};
            const result = await UserCollection.findOne(query);
            res.send(result);
        })

        app.put('/DoctorsPage/email/:email', async (req, res) => {
            try {
                const email = req.params.email;
                const updates = req.body;

                if (!email) {
                    return res.status(400).json({ error: 'Email is required' });
                }

                if (!updates || Object.keys(updates).length === 0) {
                    return res.status(400).json({ error: 'Update data is required' });
                }



                // Ensure email in data matches the parameter
                updates.email = email;
                updates.updatedAt = new Date();

                // Use updateOne with $set for partial updates
                const result = await DoctorsCollection.updateOne(
                    { email: email },
                    {
                        $set: updates,
                        $setOnInsert: { createdAt: new Date() }
                    },
                    { upsert: true }
                );

                if (result.upsertedCount > 0) {
                    res.status(201).json({
                        message: 'Doctor profile created successfully',
                        upsertedId: result.upsertedId,
                        email: email
                    });
                } else if (result.modifiedCount > 0) {
                    res.status(200).json({
                        message: 'Doctor profile updated successfully',
                        matchedCount: result.matchedCount,
                        modifiedCount: result.modifiedCount,
                        email: email
                    });
                } else {
                    res.status(200).json({
                        message: 'No changes made to doctor profile',
                        email: email
                    });
                }

            } catch (error) {
                console.error('Error updating doctor data:', error);
                res.status(500).json({ error: 'Internal server error' });
            } finally {
                await client.close();
            }
        });

        app.get('/DoctorsPage/email/:email', async (req, res) => {
            try {
                const email = req.params.email;

                if (!email) {
                    return res.status(400).json({ error: 'Email is required' });
                }

                // Find doctor by email
                const doctor = await DoctorsCollection.findOne({ email: email });

                if (!doctor) {
                    return res.status(404).json({ error: 'Doctor not found' });
                }

                // Remove MongoDB _id from response (optional)
                const { _id, ...doctorData } = doctor;

                res.status(200).json(doctorData);

            } catch (error) {
                console.error('Error fetching doctor data:', error);
                res.status(500).json({ error: 'Internal server error' });
            } finally {
                await client.close();
            }
        });


        app.post('/UserInfo', async (req, res) => {
            const newUser = req.body;
            console.log(newUser);
            const result = await UserCollection.insertOne(newUser);
            res.send(result);

        })

        app.get('/DoctorsPage', async (req, res) => {
            const result =await DoctorsCollection.find().toArray();
            res.send(result);
        })

        app.get('/DoctorsPage/id/:id', async (req, res) => {
            const id= req.params.id;
            const query = {_id: new ObjectId(id)};
            const result = await DoctorsCollection.findOne(query);
            res.send(result);

        })

        app.post('/DoctorsPage', async (req, res) => {
            const newDoctor = req.body;
            console.log(newDoctor);
            const result = await DoctorsCollection.insertOne(newDoctor);
            res.send(result);
        })
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
    }
}
run().catch(console.dir);





app.get('/', (req, res) => {
    res.send('Server');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})