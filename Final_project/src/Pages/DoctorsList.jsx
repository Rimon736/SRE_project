import React, {useEffect, useState} from 'react';
import {
    Award,
    BookOpen,
    Building,
    Clock,
    Filter,
    Languages,
    Mail,
    Phone,
    Search as SearchIcon,
    Shield,
    Star,
    User
} from 'lucide-react';
import {useLoaderData} from "react-router";
import Search from '../components/Search.jsx'; // Import the Search component

const DoctorsList = () => {
    const Doctors = useLoaderData();
    const [filteredDoctors, setFilteredDoctors] = useState(Doctors);
    const [selectedSpecialty, setSelectedSpecialty] = useState('');
    const [uniqueSpecialties, setUniqueSpecialties] = useState([]);
    const [searchName, setSearchName] = useState('');

    // Extract unique primary specialties on component mount
    useEffect(() => {
        const specialties = [...new Set(Doctors.map(doctor => doctor.primarySpecialty).filter(Boolean))];
        setUniqueSpecialties(specialties.sort());
    }, [Doctors]);

    const handleSearch = (searchParams) => {
        const filtered = Doctors.filter(doctor => {
            // Enhanced name search - search in first name, last name, and full name
            const fullName = `${doctor.firstName} ${doctor.lastName}`.toLowerCase();
            const searchName = searchParams.name.toLowerCase().trim();

            const nameMatch = !searchName ||
                doctor.firstName.toLowerCase().includes(searchName) ||
                doctor.lastName.toLowerCase().includes(searchName) ||
                fullName.includes(searchName);

            const specialtyMatch = !searchParams.specialty ||
                doctor.primarySpecialty?.toLowerCase().includes(searchParams.specialty.toLowerCase()) ||
                doctor.secondarySpecialty?.toLowerCase().includes(searchParams.specialty.toLowerCase());

            // Add primary specialty filter
            const primarySpecialtyMatch = !selectedSpecialty ||
                doctor.primarySpecialty === selectedSpecialty;

            return nameMatch && specialtyMatch && primarySpecialtyMatch;
        });

        setFilteredDoctors(filtered);
    };

    // Handle primary specialty filter change
    const handleSpecialtyFilter = (specialty) => {
        setSelectedSpecialty(specialty);

        // When filtering by specialty, also consider any existing search terms
        const filtered = Doctors.filter(doctor => {
            const primarySpecialtyMatch = !specialty || doctor.primarySpecialty === specialty;
            return primarySpecialtyMatch;
        });

        setFilteredDoctors(filtered);
    };

    // Enhanced search function for name-only searches
    const handleNameSearch = (searchTerm) => {
        const filtered = Doctors.filter(doctor => {
            const fullName = `${doctor.firstName} ${doctor.lastName}`.toLowerCase();
            const searchName = searchTerm.toLowerCase().trim();

            const nameMatch = !searchName ||
                doctor.firstName.toLowerCase().includes(searchName) ||
                doctor.lastName.toLowerCase().includes(searchName) ||
                fullName.includes(searchName);

            // Apply specialty filter if one is selected
            const primarySpecialtyMatch = !selectedSpecialty ||
                doctor.primarySpecialty === selectedSpecialty;

            return nameMatch && primarySpecialtyMatch;
        });

        setFilteredDoctors(filtered);
    };

    // Clear all filters
    const clearFilters = () => {
        setSelectedSpecialty('');
        setSearchName('');
        setFilteredDoctors(Doctors);
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Search Component */}
                <Search onSearch={handleSearch} />

                {/* Name Search Section */}
                <div className="mb-6">
                    <div className="bg-white rounded-2xl shadow-lg border border-violet-100 p-6">
                        <div className="flex items-center space-x-3 mb-4">
                            <SearchIcon className="w-5 h-5 text-violet-600" />
                            <h2 className="text-lg font-semibold text-gray-800">Search by Doctor Name</h2>
                        </div>

                        <div className="relative">
                            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by first name, last name, or full name..."
                                value={searchName}
                                onChange={(e) => {
                                    setSearchName(e.target.value);
                                    handleNameSearch(e.target.value);
                                }}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all duration-200"
                            />
                            {searchName && (
                                <button
                                    onClick={() => {
                                        setSearchName('');
                                        handleNameSearch('');
                                    }}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    ×
                                </button>
                            )}
                        </div>

                        {searchName && (
                            <div className="mt-3 text-sm text-gray-600">
                                Found {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''} matching "{searchName}"
                            </div>
                        )}
                    </div>
                </div>

                {/* Primary Specialty Filter */}
                <div className="mb-6">
                    <div className="bg-white rounded-2xl shadow-lg border border-violet-100 p-6">
                        <div className="flex items-center space-x-3 mb-4">
                            <Filter className="w-5 h-5 text-violet-600" />
                            <h2 className="text-lg font-semibold text-gray-800">Filter by Primary Specialty</h2>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => handleSpecialtyFilter('')}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    selectedSpecialty === ''
                                        ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                All Specialties ({Doctors.length})
                            </button>

                            {uniqueSpecialties.map((specialty) => {
                                const count = Doctors.filter(doctor => doctor.primarySpecialty === specialty).length;
                                return (
                                    <button
                                        key={specialty}
                                        onClick={() => handleSpecialtyFilter(specialty)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                            selectedSpecialty === specialty
                                                ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        {specialty} ({count})
                                    </button>
                                );
                            })}
                        </div>

                        {(selectedSpecialty || searchName) && (
                            <div className="mt-4 flex items-center justify-between">
                                <p className="text-sm text-gray-600">
                                    Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''}
                                    {selectedSpecialty && ` in ${selectedSpecialty}`}
                                    {searchName && ` matching "${searchName}"`}
                                </p>
                                <button
                                    onClick={clearFilters}
                                    className="text-sm text-violet-600 hover:text-violet-700 font-medium"
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Header */}
                <div className="mb-8">
                    <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-6 rounded-2xl shadow-lg">
                        <div className="flex items-center space-x-3">
                            <User className="w-8 h-8" />
                            <div>
                                <h1 className="text-3xl font-bold">Medical Staff Directory</h1>
                                <p className="text-violet-100 mt-1">
                                    {filteredDoctors.length} of {Doctors.length} {filteredDoctors.length === 1 ? 'Doctor' : 'Doctors'}
                                    {selectedSpecialty && (
                                        <span> in {selectedSpecialty}</span>
                                    )}
                                    {searchName && (
                                        <span> matching "{searchName}"</span>
                                    )}
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
                                    <button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-violet-700 hover:to-fuchsia-700 transition-all duration-200">
                                        Request Appointment
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
                        <p className="text-gray-500">
                            {selectedSpecialty || searchName
                                ? `No doctors found${selectedSpecialty ? ` in ${selectedSpecialty}` : ''}${searchName ? ` matching "${searchName}"` : ''}. Try adjusting your search criteria.`
                                : 'There are no doctors in the database yet.'
                            }
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DoctorsList;