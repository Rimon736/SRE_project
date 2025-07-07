import React, {useState} from 'react';
import {Award, BookOpen, Building, Clock, Download, Languages, Mail, Phone, Shield, Star, User} from 'lucide-react';
import {useLoaderData} from "react-router";
import Search from '../components/Search.jsx'; // Import the Search component

const DoctorsList = () => {
    const Doctors = useLoaderData();
    const [filteredDoctors, setFilteredDoctors] = useState(Doctors);

    const handleSearch = (searchParams) => {
        const filtered = {Doctors}.filter(doctor => {
            const nameMatch = doctor.firstName.toLowerCase().includes(searchParams.name.toLowerCase()) ||
                doctor.lastName.toLowerCase().includes(searchParams.name.toLowerCase());

            const specialtyMatch = !searchParams.specialty ||
                doctor.primarySpecialty?.toLowerCase().includes(searchParams.specialty.toLowerCase()) ||
                doctor.secondarySpecialty?.toLowerCase().includes(searchParams.specialty.toLowerCase());

            return nameMatch && specialtyMatch;
        });

        setFilteredDoctors(filtered);
    };

    const calculateYearsOfExperience = (startDate) => {
        if (!startDate) return 0;
        const start = new Date(startDate);
        const now = new Date();
        return Math.floor((now - start) / (365.25 * 24 * 60 * 60 * 1000));
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const generateBillNumber = () => {
        return 'BILL-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    };

    const getConsultationFee = (specialty) => {
        const fees = {
            'Cardiology': 150,
            'Neurology': 180,
            'Orthopedics': 130,
            'Dermatology': 120,
            'Psychiatry': 140,
            'Pediatrics': 100,
            'Oncology': 200,
            'General Practice': 80
        };
        return fees[specialty] || 100;
    };

    const createPDFBill = (doctor) => {
        const billNumber = generateBillNumber();
        const consultationFee = getConsultationFee(doctor.primarySpecialty);
        const tax = Math.round(consultationFee * 0.1);
        const total = consultationFee + tax;
        const currentDate = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Create HTML content for the bill
        const billHTML = `
            <!DOCTYPE html>
            <html lang="en-US">
            <head>
                <meta charset="UTF-8">
                <title>Medical Bill - ${billNumber}</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 40px;
                        line-height: 1.6;
                        color: #333;
                    }
                    .header {
                        text-align: center;
                        margin-bottom: 40px;
                        border-bottom: 3px solid #8B5CF6;
                        padding-bottom: 20px;
                    }
                    .logo {
                        font-size: 28px;
                        font-weight: bold;
                        color: #8B5CF6;
                        margin-bottom: 10px;
                    }
                    .bill-info {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 30px;
                        background: #F8FAFC;
                        padding: 20px;
                        border-radius: 8px;
                    }
                    .bill-to, .bill-from {
                        flex: 1;
                    }
                    .bill-to {
                        margin-right: 20px;
                    }
                    .section-title {
                        font-weight: bold;
                        color: #8B5CF6;
                        margin-bottom: 10px;
                        font-size: 14px;
                        text-transform: uppercase;
                    }
                    .services-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin: 30px 0;
                    }
                    .services-table th,
                    .services-table td {
                        border: 1px solid #E5E7EB;
                        padding: 12px;
                        text-align: left;
                    }
                    .services-table th {
                        background: #8B5CF6;
                        color: white;
                        font-weight: bold;
                    }
                    .services-table tr:nth-child(even) {
                        background: #F9FAFB;
                    }
                    .total-section {
                        text-align: right;
                        margin-top: 30px;
                    }
                    .total-row {
                        margin: 5px 0;
                    }
                    .total-final {
                        font-size: 18px;
                        font-weight: bold;
                        color: #8B5CF6;
                        border-top: 2px solid #8B5CF6;
                        padding-top: 10px;
                        margin-top: 10px;
                    }
                    .footer {
                        margin-top: 40px;
                        text-align: center;
                        font-size: 12px;
                        color: #6B7280;
                        border-top: 1px solid #E5E7EB;
                        padding-top: 20px;
                    }
                    .payment-terms {
                        background: #FEF3C7;
                        padding: 15px;
                        border-radius: 5px;
                        margin: 20px 0;
                        border-left: 4px solid #F59E0B;
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <div class="logo">🏥 MediCare Center</div>
                    <p>Professional Medical Services</p>
                    <p>123 Healthcare Boulevard, Medical District, MD 12345</p>
                    <p>Phone: (555) 123-4567 | Email: billing@medicare.com</p>
                </div>

                <div class="bill-info">
                    <div class="bill-to">
                        <div class="section-title">Bill To:</div>
                        <strong>Patient Name</strong><br>
                        Patient Address<br>
                        City, State ZIP<br>
                        Phone: (555) 000-0000
                    </div>
                    <div class="bill-from">
                        <div class="section-title">Bill Details:</div>
                        <strong>Bill Number:</strong> ${billNumber}<br>
                        <strong>Date:</strong> ${currentDate}<br>
                        <strong>Due Date:</strong> ${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US')}<br>
                        <strong>Payment Terms:</strong> Net 30
                    </div>
                </div>

                <div class="section-title">Doctor Information:</div>
                <table class="services-table">
                    <tr>
                        <th>Doctor</th>
                        <th>Specialty</th>
                        <th>Hospital</th>
                        <th>License</th>
                    </tr>
                    <tr>
                        <td><strong>Dr. ${doctor.firstName} ${doctor.lastName}</strong></td>
                        <td>${doctor.primarySpecialty || 'General Practice'}</td>
                        <td>${doctor.currentHospital || 'MediCare Center'}</td>
                        <td>${doctor.medicalLicenseNumber || 'N/A'}</td>
                    </tr>
                </table>

                <div class="section-title">Services Provided:</div>
                <table class="services-table">
                    <thead>
                        <tr>
                            <th>Service Description</th>
                            <th>Date</th>
                            <th>Quantity</th>
                            <th>Rate</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Medical Consultation - ${doctor.primarySpecialty || 'General Practice'}</td>
                            <td>${currentDate}</td>
                            <td>1</td>
                            <td>$${consultationFee}</td>
                            <td>$${consultationFee}</td>
                        </tr>
                        ${doctor.secondarySpecialty ? `
                        <tr>
                            <td>Additional Consultation - ${doctor.secondarySpecialty}</td>
                            <td>${currentDate}</td>
                            <td>1</td>
                            <td>$50</td>
                            <td>$50</td>
                        </tr>
                        ` : ''}
                    </tbody>
                </table>

                <div class="total-section">
                    <div class="total-row">
                        <strong>Subtotal: $${doctor.secondarySpecialty ? consultationFee + 50 : consultationFee}</strong>
                    </div>
                    <div class="total-row">
                        <strong>Tax (10%): $${Math.round((doctor.secondarySpecialty ? consultationFee + 50 : consultationFee) * 0.1)}</strong>
                    </div>
                    <div class="total-final">
                        <strong>Total Amount: $${doctor.secondarySpecialty ? consultationFee + 50 + Math.round((consultationFee + 50) * 0.1) : total}</strong>
                    </div>
                </div>

                <div class="payment-terms">
                    <strong>Payment Terms & Conditions:</strong><br>
                    • Payment is due within 30 days of bill date<br>
                    • Late payments may incur additional charges<br>
                    • For billing inquiries, contact our billing department<br>
                    • Insurance claims processing may take 15-30 business days
                </div>

                <div class="footer">
                    <p>Thank you for choosing MediCare Center for your healthcare needs.</p>
                    <p>This is a computer-generated bill and does not require a signature.</p>
                    <p>For questions regarding this bill, please contact our billing department at (555) 123-4567</p>
                </div>
            </body>
            </html>
        `;

        // Create and download PDF
        const printWindow = window.open('', '_blank');
        printWindow.document.write(billHTML);
        printWindow.document.close();

        // Wait for content to load, then trigger print
        printWindow.onload = function() {
            printWindow.print();
            printWindow.close();
        };
    };

    const handleRequestAppointment = (doctor) => {
        // Create and download the bill
        createPDFBill(doctor);

        // Optional: Show confirmation message
        alert(`Appointment requested with Dr. ${doctor.firstName} ${doctor.lastName}. Bill has been generated and will open in a new window for printing/saving.`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Search Component */}
                <Search onSearch={handleSearch} />

                {/* Header */}
                <div className="mb-8">
                    <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-6 rounded-2xl shadow-lg">
                        <div className="flex items-center space-x-3">
                            <User className="w-8 h-8" />
                            <div>
                                <h1 className="text-3xl font-bold">Medical Staff Directory</h1>
                                <p className="text-violet-100 mt-1">
                                    {Doctors.length} {Doctors.length === 1 ? 'Doctor' : 'Doctors'} in our network
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Doctors Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredDoctors.map((doctor) => (
                        <div key={doctor._id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-violet-100 overflow-hidden">
                            {/* Card Header */}
                            <div className="bg-gradient-to-r from-violet-100 to-fuchsia-100 p-6 border-b border-violet-200">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center">
                                            <User className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800">
                                                {doctor.firstName} {doctor.lastName}
                                            </h3>
                                            <p className="text-violet-600 font-medium">
                                                {doctor.primarySpecialty || 'General Practice'}
                                            </p>
                                            {doctor.secondarySpecialty && (
                                                <p className="text-sm text-fuchsia-600">
                                                    {doctor.secondarySpecialty}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-1 bg-white px-2 py-1 rounded-full">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <span className="text-sm font-medium text-gray-700">
                                            {doctor.employmentStartDate
                                                ? `${calculateYearsOfExperience(doctor.employmentStartDate)}y exp`
                                                : 'New'
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 space-y-4">
                                {/* Contact Information */}
                                <div className="space-y-2">
                                    {doctor.email && (
                                        <div className="flex items-center space-x-3 text-gray-600">
                                            <Mail className="w-4 h-4 text-violet-500" />
                                            <span className="text-sm">{doctor.email}</span>
                                        </div>
                                    )}
                                    {doctor.phone && (
                                        <div className="flex items-center space-x-3 text-gray-600">
                                            <Phone className="w-4 h-4 text-fuchsia-500" />
                                            <span className="text-sm">{doctor.phone}</span>
                                        </div>
                                    )}
                                    {doctor.workPhone && (
                                        <div className="flex items-center space-x-3 text-gray-600">
                                            <Phone className="w-4 h-4 text-violet-500" />
                                            <span className="text-sm">Work: {doctor.workPhone}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Professional Information */}
                                <div className="border-t pt-4">
                                    {doctor.currentHospital && (
                                        <div className="flex items-center space-x-3 text-gray-600 mb-2">
                                            <Building className="w-4 h-4 text-violet-500" />
                                            <span className="text-sm font-medium">{doctor.currentHospital}</span>
                                        </div>
                                    )}
                                    {doctor.department && (
                                        <div className="flex items-center space-x-3 text-gray-600 mb-2">
                                            <Shield className="w-4 h-4 text-fuchsia-500" />
                                            <span className="text-sm">{doctor.department}</span>
                                        </div>
                                    )}
                                    {doctor.position && (
                                        <div className="flex items-center space-x-3 text-gray-600 mb-2">
                                            <Award className="w-4 h-4 text-violet-500" />
                                            <span className="text-sm">{doctor.position}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Education */}
                                {doctor.medicalSchool && (
                                    <div className="border-t pt-4">
                                        <div className="flex items-center space-x-3 text-gray-600 mb-2">
                                            <BookOpen className="w-4 h-4 text-fuchsia-500" />
                                            <span className="text-sm">{doctor.medicalSchool}</span>
                                        </div>
                                        {doctor.graduationYear && (
                                            <div className="ml-7 text-xs text-gray-500">
                                                Graduated: {doctor.graduationYear}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Licenses */}
                                <div className="border-t pt-4">
                                    {doctor.medicalLicenseNumber && (
                                        <div className="flex items-center space-x-3 text-gray-600 mb-2">
                                            <Shield className="w-4 h-4 text-violet-500" />
                                            <span className="text-sm">
                                                License: {doctor.medicalLicenseNumber} ({doctor.licenseState})
                                            </span>
                                        </div>
                                    )}
                                    {doctor.licenseExpirationDate && (
                                        <div className="ml-7 text-xs text-gray-500">
                                            Expires: {formatDate(doctor.licenseExpirationDate)}
                                        </div>
                                    )}
                                </div>

                                {/* Languages */}
                                {doctor.languages && (
                                    <div className="border-t pt-4">
                                        <div className="flex items-start space-x-3 text-gray-600">
                                            <Languages className="w-4 h-4 text-fuchsia-500 mt-0.5" />
                                            <div>
                                                <span className="text-sm font-medium">Languages:</span>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    {doctor.languages}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Board Certifications */}
                                {doctor.boardCertifications && (
                                    <div className="border-t pt-4">
                                        <div className="flex items-start space-x-3 text-gray-600">
                                            <Award className="w-4 h-4 text-violet-500 mt-0.5" />
                                            <div>
                                                <span className="text-sm font-medium">Board Certified:</span>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    {doctor.boardCertifications}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Additional Certifications */}
                                {doctor.certifications && (
                                    <div className="border-t pt-4">
                                        <div className="flex items-start space-x-3 text-gray-600">
                                            <Shield className="w-4 h-4 text-fuchsia-500 mt-0.5" />
                                            <div>
                                                <span className="text-sm font-medium">Certifications:</span>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    {doctor.certifications}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Awards */}
                                {doctor.awards && (
                                    <div className="border-t pt-4">
                                        <div className="flex items-start space-x-3 text-gray-600">
                                            <Star className="w-4 h-4 text-violet-500 mt-0.5" />
                                            <div>
                                                <span className="text-sm font-medium">Awards:</span>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    {doctor.awards}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Card Footer */}
                            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                                <div className="flex items-center justify-between">
                                    <div className="text-xs text-gray-500">
                                        {doctor.employmentStartDate && (
                                            <>
                                                <Clock className="w-3 h-3 inline mr-1" />
                                                Since {formatDate(doctor.employmentStartDate)}
                                            </>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => handleRequestAppointment(doctor)}
                                        className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-violet-700 hover:to-fuchsia-700 transition-all duration-200 flex items-center space-x-2"
                                    >
                                        <Download className="w-4 h-4" />
                                        <span>Request Appointment</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredDoctors.length === 0 && (
                    <div className="text-center py-12">
                        <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-medium text-gray-600 mb-2">No doctors found</h3>
                        <p className="text-gray-500">There are no doctors in the database yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DoctorsList;