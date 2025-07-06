import React, {useState} from 'react';
import {CheckCircle, Shield} from 'lucide-react';
import GoogleIcon from './GoogleIcon.jsx';

const Login = ({ onSwitchToSignup }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleGoogleLogin = async () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            alert('Google login would be initiated here!');
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 flex items-center justify-center p-6">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-8 text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Shield className="w-8 h-8" />
                        </div>
                        <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                        <p className="text-violet-100">Sign in to your medical portal</p>
                    </div>

                    {/* Body */}
                    <div className="p-8">
                        <div className="space-y-6">
                            {/* Benefits */}
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span className="text-sm">Secure access to your medical records</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span className="text-sm">Manage appointments and prescriptions</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span className="text-sm">Connect with healthcare providers</span>
                                </div>
                            </div>

                            {/* Google Login Button */}
                            <div className="pt-4">
                                <button
                                    onClick={handleGoogleLogin}
                                    disabled={isLoading}
                                    className="w-full bg-white border-2 border-gray-300 text-gray-700 py-4 px-6 rounded-xl font-semibold hover:border-violet-400 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-3 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <div className="w-5 h-5 border-2 border-gray-400 border-t-violet-600 rounded-full animate-spin"></div>
                                    ) : (
                                        <GoogleIcon />
                                    )}
                                    <span>{isLoading ? 'Signing in...' : 'Continue with Google'}</span>
                                </button>
                            </div>

                            {/* Divider */}
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Secure authentication</span>
                                </div>
                            </div>

                            {/* Security Note */}
                            <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
                                <div className="flex items-start space-x-3">
                                    <Shield className="w-5 h-5 text-violet-600 mt-0.5" />
                                    <div>
                                        <h3 className="text-sm font-medium text-violet-800">HIPAA Compliant</h3>
                                        <p className="text-xs text-violet-600 mt-1">
                                            Your medical information is protected with enterprise-grade security
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
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