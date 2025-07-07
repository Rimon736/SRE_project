import React, {useContext, useState} from 'react';
import {CheckCircle, Lock, Mail, Shield} from 'lucide-react';
import {AuthContext} from '../Context/AuthContext.jsx';
import {useNavigate} from "react-router";

const Login = ({ onSwitchToSignup }) => {
    const { SignInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        password: ''
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
            password: ''
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
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            setIsLoading(true);
            await SignInUser(formData.email, formData.password,{}) // Assuming your AuthContext.login accepts email/password
            .then(result =>{
                console.log(result.user);
                const SignInInfo = {
                    email: result.user.email,
                }
                fetch('http://localhost:3000/DoctorsPage', {
                    method: 'PATCH',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(SignInInfo)
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log("useremail ",data);
                    })
            }).catch(err => {
                console.log(err);
                })
            navigate('/Home');
        } catch (err) {
            console.error('Login failed', err);
            setErrors({
                email: 'Invalid email or password',
                password: 'Invalid email or password'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 flex items-center justify-center p-6">
            <div className="w-full max-w-md">
                {/* Card ---------------------------------------------------------- */}
                <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
                    {/* ================= Header ================= */}
                    <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-8 text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Shield className="w-8 h-8" />
                        </div>
                        <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                        <p className="text-violet-100">Sign in to your medical portal</p>
                    </div>

                    {/* ================= Body =================== */}
                    <div className="p-8 space-y-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Email field */}
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

                            {/* Password field */}
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

                            {/* Forgot password link */}
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="text-sm text-violet-600 hover:text-violet-700"
                                    onClick={() => navigate('/forgot-password')}
                                >
                                    Forgot password?
                                </button>
                            </div>

                            {/* Perks list – purely informational */}
                            <div className="space-y-3 pt-2">
                                {[
                                    'Secure access to your medical records',
                                    'Manage appointments and prescriptions',
                                    'Connect with healthcare providers',
                                ].map((txt) => (
                                    <div key={txt} className="flex items-center space-x-3 text-gray-600">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <span className="text-sm">{txt}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Submit button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-violet-700 hover:to-fuchsia-700 transition-all duration-200 flex items-center justify-center space-x-3 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                ) : (
                                    <Lock className="w-5 h-5" />
                                )}
                                <span>{isLoading ? 'Signing in...' : 'Sign In'}</span>
                            </button>
                        </form>

                        {/* Security note */}
                        <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
                            <div className="flex items-start space-x-3">
                                <Shield className="w-5 h-5 text-violet-600 mt-0.5" />
                                <div>
                                    <h3 className="text-sm font-medium text-violet-800">HIPAA Compliant</h3>
                                    <p className="text-xs text-violet-600 mt-1">
                                        Your medical information is protected with enterprise‑grade security.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ================= Footer ================= */}
                    <div className="bg-gray-50 px-8 py-6 border-t border-gray-200 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{' '}
                            <button
                                onClick={onSwitchToSignup}
                                className="text-violet-600 hover:text-violet-700 font-medium transition-colors"
                            >
                                Sign up here
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;