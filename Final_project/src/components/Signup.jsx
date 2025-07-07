import React, {use, useState} from 'react';
import {Lock, Mail, Shield, User} from 'lucide-react';
import {useNavigate} from 'react-router';
import {AuthContext} from "../Context/AuthContext.jsx";

const Signup = ({ onSwitchToLogin }) => {
    const {createUser} = use(AuthContext);

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [userType, setUserType] = useState('patient');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            email: '',
            password: '',
            confirmPassword: ''
        };

        if (!formData.email) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
            valid = false;
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
            valid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            valid = false;
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            setIsLoading(true);
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // In a real app, you would call your authentication service here
            console.log('Signup data:', {
                email: formData.email,
                password: formData.password,
                role: userType
            });

            const DoctorsProfile = {
                email: formData.email,
            }

            if(userType === 'doctor'){

                createUser(formData.email, formData.password)
                    .then(result =>{
                        console.log(result);
                        fetch('http://localhost:3000/DoctorsPage', {
                            method: 'POST',
                            headers:{
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(DoctorsProfile)
                        })
                            .then(response => response.json())
                            .then(data => {
                                console.log("useremail ",data);
                            })
                    }).catch(err => {
                    console.log(err);
                })
            }
            // else{
            //
            // }




            // Navigate based on user type
            navigate(userType === 'doctor' ? '/DoctorsPage' : '/Home');
        } catch (err) {
            console.error('Signup failed', err);
            alert('Signup failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 flex items-center justify-center p-6">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
                    {/* header */}
                    <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-8 text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <User className="w-8 h-8" />
                        </div>
                        <h1 className="text-3xl font-bold mb-2">Create Account</h1>
                        <p className="text-violet-100">Join our medical portal</p>
                    </div>

                    {/* body */}
                    <div className="p-8 space-y-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* role selector */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-3">I am signing up as a:</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        ['patient', <User key="u" className="w-6 h-6 mx-auto mb-2" />, 'Patient', 'border-violet-500 bg-violet-50 text-violet-700'],
                                        ['doctor', <Shield key="s" className="w-6 h-6 mx-auto mb-2" />, 'Doctor', 'border-fuchsia-500 bg-fuchsia-50 text-fuchsia-700'],
                                    ].map(([type, icon, label, activeCls]) => (
                                        <button
                                            type="button"
                                            key={type}
                                            onClick={() => setUserType(type)}
                                            className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                                                userType === type ? activeCls : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                        >
                                            {icon}
                                            <div className="text-sm font-medium">{label}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* email field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`block w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500`}
                                        placeholder="your@email.com"
                                    />
                                </div>
                                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                            </div>

                            {/* password field */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={`block w-full pl-10 pr-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500`}
                                        placeholder="••••••••"
                                    />
                                </div>
                                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                            </div>

                            {/* confirm password field */}
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className={`block w-full pl-10 pr-3 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500`}
                                        placeholder="••••••••"
                                    />
                                </div>
                                {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
                            </div>

                            {/* submit button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-violet-700 hover:to-fuchsia-700 transition-all duration-200 flex items-center justify-center space-x-3 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                ) : (
                                    <User className="w-5 h-5" />
                                )}
                                <span>{isLoading ? 'Creating account...' : 'Create Account'}</span>
                            </button>
                        </form>

                        {/* switch to login */}
                        <div className="text-center">
                            <p className="text-sm text-gray-600">
                                Already have an account?{' '}
                                <button onClick={onSwitchToLogin} className="text-violet-600 hover:text-violet-700 font-medium">
                                    Sign in here
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;