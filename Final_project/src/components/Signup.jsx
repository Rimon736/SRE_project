import React, {useState} from 'react';
import {CheckCircle, Shield, User} from 'lucide-react';
import GoogleIcon from './GoogleIcon.jsx';

const Signup = ({ onSwitchToLogin }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userType, setUserType] = useState('patient'); // 'patient' or 'doctor'

    const handleGoogleSignup = async () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            alert(`Google signup for ${userType} would be initiated here!`);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 flex items-center justify-center p-6">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-8 text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <User className="w-8 h-8" />
                        </div>
                        <h1 className="text-3xl font-bold mb-2">Join Our Platform</h1>
                        <p className="text-violet-100">Create your medical portal account</p>
                    </div>

                    {/* Body */}
                    <div className="p-8">
                        <div className="space-y-6">
                            {/* User Type Selection */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    I am signing up as a:
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => setUserType('patient')}
                                        className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                                            userType === 'patient'
                                                ? 'border-violet-500 bg-violet-50 text-violet-700'
                                                : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                    >
                                        <User className="w-6 h-6 mx-auto mb-2" />
                                        <div className="text-sm font-medium">Patient</div>
                                    </button>
                                    <button
                                        onClick={() => setUserType('doctor')}
                                        className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                                            userType === 'doctor'
                                                ? 'border-fuchsia-500 bg-fuchsia-50 text-fuchsia-700'
                                                : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                    >
                                        <Shield className="w-6 h-6 mx-auto mb-2" />
                                        <div className="text-sm font-medium">Doctor</div>
                                    </button>
                                </div>
                            </div>

                            {/* Benefits based on user type */}
                            <div className="space-y-3">
                                {userType === 'patient' ? (
                                    <>
                                        <div className="flex items-center space-x-3 text-gray-600">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span className="text-sm">Access your medical records</span>
                                        </div>
                                        <div className="flex items-center space-x-3 text-gray-600">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span className="text-sm">Book appointments online</span>
                                        </div>
                                        <div className="flex items-center space-x-3 text-gray-600">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span className="text-sm">Receive test results instantly</span>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex items-center space-x-3 text-gray-600">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span className="text-sm">Manage patient records</span>
                                        </div>
                                        <div className="flex items-center space-x-3 text-gray-600">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span className="text-sm">Schedule and track appointments</span>
                                        </div>
                                        <div className="flex items-center space-x-3 text-gray-600">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span className="text-sm">Secure communication with patients</span>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Google Signup Button */}
                            <div className="pt-4">
                                <button
                                    onClick={handleGoogleSignup}
                                    disabled={isLoading}
                                    className="w-full bg-white border-2 border-gray-300 text-gray-700 py-4 px-6 rounded-xl font-semibold hover:border-violet-400 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-3 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <div className="w-5 h-5 border-2 border-gray-400 border-t-violet-600 rounded-full animate-spin"></div>
                                    ) : (
                                        <GoogleIcon />
                                    )}
                                    <span>{isLoading ? 'Creating account...' : 'Continue with Google'}</span>
                                </button>
                            </div>

                            {/* Terms */}
                            <div className="text-center">
                                <p className="text-xs text-gray-500">
                                    By signing up, you agree to our{' '}
                                    <a href="#" className="text-violet-600 hover:text-violet-700">Terms of Service</a>
                                    {' '}and{' '}
                                    <a href="#" className="text-violet-600 hover:text-violet-700">Privacy Policy</a>
                                </p>
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
                            Already have an account?{' '}
                            <button
                                onClick={onSwitchToLogin}
                                className="text-violet-600 hover:text-violet-700 font-medium transition-colors"
                            >
                                Sign in here
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Signup;