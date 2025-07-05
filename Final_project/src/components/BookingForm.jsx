import React from 'react';
import {FaCalendarAlt, FaChevronDown, FaClock, FaEnvelope, FaUser} from 'react-icons/fa';

const BookingForm = () => {
    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Book Appointment</h1>

            <form className="space-y-4">
                {/* Name Field */}
                <div className="space-y-1">
                    <label className="flex items-center text-sm font-medium text-gray-700">
                        <FaUser className="mr-2 text-violet-600" />
                        Name *
                    </label>
                    <input
                        type="text"
                        placeholder="Full Name *"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        required
                    />
                </div>

                {/* Email Field */}
                <div className="space-y-1">
                    <label className="flex items-center text-sm font-medium text-gray-700">
                        <FaEnvelope className="mr-2 text-violet-600" />
                        Email address *
                    </label>
                    <input
                        type="email"
                        placeholder="example@gmail.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        required
                    />
                </div>

                {/* Department Dropdown */}
                <div className="space-y-1">
                    <label className="flex items-center text-sm font-medium text-gray-700">
                        <FaCalendarAlt className="mr-2 text-violet-600" />
                        Department *
                    </label>
                    <div className="relative">
                        <select
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                            required
                        >
                            <option value="">Please Select</option>
                            <option value="cardiology">Cardiology</option>
                            <option value="neurology">Neurology</option>
                            <option value="pediatrics">Pediatrics</option>
                        </select>
                        <FaChevronDown className="absolute right-3 top-3 text-gray-400" />
                    </div>
                </div>

                {/* Time Slot */}
                <div className="space-y-1">
                    <label className="flex items-center text-sm font-medium text-gray-700">
                        <FaClock className="mr-2 text-violet-600" />
                        Time *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                        {['9:00', '10:30', '12:00', '2:00', '3:30', '4:00'].map(time => (
                            <button
                                key={time}
                                type="button"
                                className={`py-2 px-3 rounded-lg border ${time === '4:00'
                                    ? 'bg-violet-600 text-white border-violet-600'
                                    : 'border-gray-300 hover:bg-gray-50'}`}
                            >
                                {time} {time === '4:00' && 'Available'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition duration-200"
                >
                    Book Appointment
                </button>
            </form>
        </div>
    );
};

export default BookingForm;