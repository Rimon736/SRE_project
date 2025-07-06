import React, {useState} from 'react';
import {Calendar, HeartPulse, Home, Mail, Phone, Shield, User} from 'lucide-react';

export default function userInfoUpdate() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        gender: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        bloodType: '',
        allergies: '',
        medications: '',
        emergencyContact: '',
        emergencyPhone: '',
        emergencyRelation: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const usersInfo = formData;
        console.log('Form submitted:', usersInfo);
        alert('User credentials updated successfully!');

        // If you really need FormData object, create it manually:
        // const formDataObj = new FormData();
        // Object.entries(formData).forEach(([key, value]) => {
        //     formDataObj.append(key, value);
        // });

        fetch('http://localhost:3000/UserInfo',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(usersInfo)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    console.log(data);
                }
            })
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl border border-violet-100">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-8 rounded-t-2xl">
                        <div className="flex items-center space-x-3">
                            <Shield className="w-8 h-8" />
                            <div>
                                <h1 className="text-3xl font-bold">Patient Profile</h1>
                                <p className="text-violet-100 mt-1">Update your personal and medical information</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit}>
                        <div className="p-8 space-y-8">
                            {/* Personal Information */}
                            <div className="space-y-6">
                                <div className="flex items-center space-x-2 mb-4">
                                    <User className="w-5 h-5 text-violet-600" />
                                    <h2 className="text-xl font-semibold text-gray-800">Personal Details</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name*</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                            placeholder="John"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name*</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                            placeholder="Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                                placeholder="patient@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone*</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-3.5 text-gray-400" size={18} />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                                placeholder="(555) 123-4567"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth*</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-3.5 text-gray-400" size={18} />
                                            <input
                                                type="date"
                                                name="dateOfBirth"
                                                value={formData.dateOfBirth}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Gender*</label>
                                        <select
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                        >
                                            <option value="">Select</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                            <option value="prefer-not-to-say">Prefer not to say</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Address Information */}
                            <div className="space-y-6">
                                <div className="flex items-center space-x-2 mb-4">
                                    <Home className="w-5 h-5 text-fuchsia-600" />
                                    <h2 className="text-xl font-semibold text-gray-800">Address Information</h2>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Street Address*</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                        placeholder="123 Main St"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">City*</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                            placeholder="New York"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">State*</label>
                                        <input
                                            type="text"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                            placeholder="NY"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code*</label>
                                        <input
                                            type="text"
                                            name="zipCode"
                                            value={formData.zipCode}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                            placeholder="10001"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Medical Information */}
                            <div className="space-y-6">
                                <div className="flex items-center space-x-2 mb-4">
                                    <HeartPulse className="w-5 h-5 text-violet-600" />
                                    <h2 className="text-xl font-semibold text-gray-800">Medical Information</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Blood Type</label>
                                        <select
                                            name="bloodType"
                                            value={formData.bloodType}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                        >
                                            <option value="">Select</option>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Allergies</label>
                                        <input
                                            type="text"
                                            name="allergies"
                                            value={formData.allergies}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                            placeholder="Peanuts, Penicillin, etc."
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Medications</label>
                                        <textarea
                                            name="medications"
                                            value={formData.medications}
                                            onChange={handleInputChange}
                                            rows={3}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                            placeholder="List medications and dosages"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Emergency Contact */}
                            <div className="space-y-6">
                                <div className="flex items-center space-x-2 mb-4">
                                    <Shield className="w-5 h-5 text-fuchsia-600" />
                                    <h2 className="text-xl font-semibold text-gray-800">Emergency Contact</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name*</label>
                                        <input
                                            type="text"
                                            name="emergencyContact"
                                            value={formData.emergencyContact}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                            placeholder="Jane Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Contact Phone*</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-3.5 text-gray-400" size={18} />
                                            <input
                                                type="tel"
                                                name="emergencyPhone"
                                                value={formData.emergencyPhone}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                                placeholder="(555) 987-6543"
                                            />
                                        </div>
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Relationship*</label>
                                        <input
                                            type="text"
                                            name="emergencyRelation"
                                            value={formData.emergencyRelation}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                            placeholder="Spouse, Parent, etc."
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-end pt-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-violet-700 hover:to-fuchsia-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center space-x-2 disabled:opacity-70"
                                >
                                    {isSubmitting ? (
                                        <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                    ) : (
                                        <Shield className="w-5 h-5" />
                                    )}
                                    <span>{isSubmitting ? 'Saving...' : 'Save Profile'}</span>
                                </button>
                            </div>

                            {submitSuccess && (
                                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                                    Your profile has been updated successfully!
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}