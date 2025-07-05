import React, {useState} from 'react';
import {Award, BookOpen, Building, Shield, User} from 'lucide-react';

export default function DoctorsPage() {
    const [formData, setFormData] = useState({
        // Personal Information
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',

        // Professional Information
        medicalLicenseNumber: '',
        licenseState: '',
        licenseExpirationDate: '',
        deaNumber: '',
        npiNumber: '',

        // Education
        medicalSchool: '',
        graduationYear: '',
        residencyProgram: '',
        residencyCompletionYear: '',
        fellowshipProgram: '',
        fellowshipCompletionYear: '',

        // Specialization
        primarySpecialty: '',
        secondarySpecialty: '',
        boardCertifications: '',

        // Employment
        currentHospital: '',
        department: '',
        position: '',
        employmentStartDate: '',
        workPhone: '',

        // Additional Credentials
        certifications: '',
        languages: '',
        publications: '',
        awards: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        alert('Doctor credentials updated successfully!');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl border border-violet-100">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-8 rounded-t-2xl">
                        <div className="flex items-center space-x-3">
                            <Shield className="w-8 h-8" />
                            <div>
                                <h1 className="text-3xl font-bold">Doctor Credentials</h1>
                                <p className="text-violet-100 mt-1">Update professional information and credentials</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 space-y-8">
                        {/* Personal Information */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-2 mb-4">
                                <User className="w-5 h-5 text-violet-600" />
                                <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                        placeholder="Enter first name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                        placeholder="Enter last name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                        placeholder="doctor@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                                    <input
                                        type="date"
                                        name="dateOfBirth"
                                        value={formData.dateOfBirth}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                        placeholder="Street address"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                        placeholder="City"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                                    <input
                                        type="text"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                        placeholder="State"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Professional Licenses */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-2 mb-4">
                                <Shield className="w-5 h-5 text-fuchsia-600" />
                                <h2 className="text-xl font-semibold text-gray-800">Professional Licenses</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Medical License Number</label>
                                    <input
                                        type="text"
                                        name="medicalLicenseNumber"
                                        value={formData.medicalLicenseNumber}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all"
                                        placeholder="ML123456"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">License State</label>
                                    <input
                                        type="text"
                                        name="licenseState"
                                        value={formData.licenseState}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all"
                                        placeholder="CA"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">License Expiration</label>
                                    <input
                                        type="date"
                                        name="licenseExpirationDate"
                                        value={formData.licenseExpirationDate}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">DEA Number</label>
                                    <input
                                        type="text"
                                        name="deaNumber"
                                        value={formData.deaNumber}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all"
                                        placeholder="DEA123456"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">NPI Number</label>
                                    <input
                                        type="text"
                                        name="npiNumber"
                                        value={formData.npiNumber}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all"
                                        placeholder="1234567890"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-2 mb-4">
                                <BookOpen className="w-5 h-5 text-violet-600" />
                                <h2 className="text-xl font-semibold text-gray-800">Education & Training</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Medical School</label>
                                    <input
                                        type="text"
                                        name="medicalSchool"
                                        value={formData.medicalSchool}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                        placeholder="University of Medicine"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Graduation Year</label>
                                    <input
                                        type="number"
                                        name="graduationYear"
                                        value={formData.graduationYear}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                        placeholder="2015"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Residency Program</label>
                                    <input
                                        type="text"
                                        name="residencyProgram"
                                        value={formData.residencyProgram}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                        placeholder="Internal Medicine"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Residency Completion</label>
                                    <input
                                        type="number"
                                        name="residencyCompletionYear"
                                        value={formData.residencyCompletionYear}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                        placeholder="2019"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Fellowship Program</label>
                                    <input
                                        type="text"
                                        name="fellowshipProgram"
                                        value={formData.fellowshipProgram}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                        placeholder="Cardiology (Optional)"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Fellowship Completion</label>
                                    <input
                                        type="number"
                                        name="fellowshipCompletionYear"
                                        value={formData.fellowshipCompletionYear}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                        placeholder="2021"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Specialization */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-2 mb-4">
                                <Award className="w-5 h-5 text-fuchsia-600" />
                                <h2 className="text-xl font-semibold text-gray-800">Specialization & Certifications</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Primary Specialty</label>
                                    <input
                                        type="text"
                                        name="primarySpecialty"
                                        value={formData.primarySpecialty}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all"
                                        placeholder="Cardiology"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Specialty</label>
                                    <input
                                        type="text"
                                        name="secondarySpecialty"
                                        value={formData.secondarySpecialty}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all"
                                        placeholder="Interventional Cardiology"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Board Certifications</label>
                                    <textarea
                                        name="boardCertifications"
                                        value={formData.boardCertifications}
                                        onChange={handleInputChange}
                                        rows={3}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all"
                                        placeholder="List all board certifications..."
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Current Employment */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-2 mb-4">
                                <Building className="w-5 h-5 text-violet-600" />
                                <h2 className="text-xl font-semibold text-gray-800">Current Employment</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Hospital/Clinic</label>
                                    <input
                                        type="text"
                                        name="currentHospital"
                                        value={formData.currentHospital}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                        placeholder="General Hospital"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                                    <input
                                        type="text"
                                        name="department"
                                        value={formData.department}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                        placeholder="Cardiology Department"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Position/Title</label>
                                    <input
                                        type="text"
                                        name="position"
                                        value={formData.position}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                        placeholder="Attending Physician"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Employment Start Date</label>
                                    <input
                                        type="date"
                                        name="employmentStartDate"
                                        value={formData.employmentStartDate}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Work Phone</label>
                                    <input
                                        type="tel"
                                        name="workPhone"
                                        value={formData.workPhone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                                        placeholder="(555) 987-6543"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Additional Information */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-2 mb-4">
                                <Award className="w-5 h-5 text-fuchsia-600" />
                                <h2 className="text-xl font-semibold text-gray-800">Additional Information</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Certifications</label>
                                    <textarea
                                        name="certifications"
                                        value={formData.certifications}
                                        onChange={handleInputChange}
                                        rows={3}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all"
                                        placeholder="ACLS, BLS, PALS, etc."
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Languages Spoken</label>
                                    <textarea
                                        name="languages"
                                        value={formData.languages}
                                        onChange={handleInputChange}
                                        rows={3}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all"
                                        placeholder="English, Spanish, French..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Notable Publications</label>
                                    <textarea
                                        name="publications"
                                        value={formData.publications}
                                        onChange={handleInputChange}
                                        rows={3}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all"
                                        placeholder="List research papers and publications..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Awards & Recognition</label>
                                    <textarea
                                        name="awards"
                                        value={formData.awards}
                                        onChange={handleInputChange}
                                        rows={3}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all"
                                        placeholder="Professional awards and recognition..."
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end pt-6">
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-700 hover:to-fuchsia-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
                            >
                                <Shield className="w-5 h-5" />
                                <span>Update Credentials</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}