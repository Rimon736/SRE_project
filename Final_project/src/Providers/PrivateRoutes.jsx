import {use} from 'react';
import {AuthContext} from "../Context/AuthContext.jsx";

const PrivateRoutes = ({children}) => {
    const {user} =use(AuthContext)
    console.log(user);

    return children;
};

export default PrivateRoutes;