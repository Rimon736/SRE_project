import React from 'react';
import {Calendar, HeartPulse, Home, Mail, Phone, Shield, User} from 'lucide-react';
import {useLoaderData} from 'react-router';

const ShowUserInfo = () => {
    // Get patient data from loader
    const patient = useLoaderData();
    console.log(patient);

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-6 rounded-2xl shadow-lg">
                        <div className="flex items-center space-x-3">
                            <User className="w-8 h-8" />
                            <div>
                                <h1 className="text-3xl font-bold">Patient Profile</h1>
                                <p className="text-violet-100 mt-1">
                                    {patient.firstName} {patient.lastName}'s medical information
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Patient Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-violet-100 overflow-hidden">
                    {/* Card Header */}
                    <div className="bg-gradient-to-r from-violet-100 to-fuchsia-100 p-6 border-b border-violet-200">
                        <div className="flex items-center space-x-4">
                            <div className="w-20 h-20 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center">
                                <User className="w-10 h-10 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">
                                    {patient.firstName} {patient.lastName}
                                </h2>
                                <div className="flex items-center space-x-2 mt-1">
                                    <Calendar className="w-4 h-4 text-violet-600" />
                                    <span className="text-sm text-gray-600">
                                        DOB: {formatDate(patient.dateOfBirth)}
                                    </span>
                                </div>
                                {patient.bloodType && (
                                    <div className="flex items-center space-x-2 mt-1">
                                        <HeartPulse className="w-4 h-4 text-fuchsia-600" />
                                        <span className="text-sm text-gray-600">
                                            Blood Type: {patient.bloodType}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-6">
                        {/* Personal Information */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                                <User className="w-5 h-5 text-violet-600" />
                                <span>Personal Information</span>
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-3 text-gray-700">
                                    <Mail className="w-5 h-5 text-violet-500" />
                                    <span>{patient.email || 'N/A'}</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-700">
                                    <Phone className="w-5 h-5 text-fuchsia-500" />
                                    <span>{patient.phone || 'N/A'}</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-700">
                                    <Home className="w-5 h-5 text-violet-500" />
                                    <span>
                                        {patient.address ? `${patient.address}, ${patient.city}, ${patient.state} ${patient.zipCode}` : 'N/A'}
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-700">
                                    <Shield className="w-5 h-5 text-fuchsia-500" />
                                    <span>Gender: {patient.gender || 'N/A'}</span>
                                </div>
                            </div>
                        </div>

                        {/* Medical Information */}
                        <div className="space-y-4 border-t pt-4">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                                <HeartPulse className="w-5 h-5 text-violet-600" />
                                <span>Medical Information</span>
                            </h3>

                            {patient.bloodType && (
                                <div className="flex items-center space-x-3 text-gray-700">
                                    <HeartPulse className="w-5 h-5 text-fuchsia-500" />
                                    <span>Blood Type: {patient.bloodType}</span>
                                </div>
                            )}

                            {patient.allergies ? (
                                <div className="space-y-1">
                                    <h4 className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                                        <Shield className="w-4 h-4 text-fuchsia-500" />
                                        <span>Allergies</span>
                                    </h4>
                                    <p className="text-sm text-gray-600 ml-6">{patient.allergies}</p>
                                </div>
                            ) : (
                                <p className="text-sm text-gray-500 italic">No allergies listed</p>
                            )}

                            {patient.medications ? (
                                <div className="space-y-1">
                                    <h4 className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                                        <HeartPulse className="w-4 h-4 text-violet-500" />
                                        <span>Current Medications</span>
                                    </h4>
                                    <p className="text-sm text-gray-600 ml-6">{patient.medications}</p>
                                </div>
                            ) : (
                                <p className="text-sm text-gray-500 italic">No medications listed</p>
                            )}
                        </div>

                        {/* Emergency Contact */}
                        {patient.emergencyContact && (
                            <div className="space-y-4 border-t pt-4">
                                <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                                    <Shield className="w-5 h-5 text-fuchsia-600" />
                                    <span>Emergency Contact</span>
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center space-x-3 text-gray-700">
                                        <User className="w-5 h-5 text-violet-500" />
                                        <span>{patient.emergencyContact}</span>
                                    </div>
                                    {patient.emergencyPhone && (
                                        <div className="flex items-center space-x-3 text-gray-700">
                                            <Phone className="w-5 h-5 text-fuchsia-500" />
                                            <span>{patient.emergencyPhone}</span>
                                        </div>
                                    )}
                                    {patient.emergencyRelation && (
                                        <div className="flex items-center space-x-3 text-gray-700">
                                            <Shield className="w-5 h-5 text-violet-500" />
                                            <span>Relationship: {patient.emergencyRelation}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Card Footer */}
                    <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                            <div className="text-xs text-gray-500">
                                Last updated: {formatDate(new Date())}
                            </div>
                            <button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-violet-700 hover:to-fuchsia-700 transition-all duration-200">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowUserInfo;