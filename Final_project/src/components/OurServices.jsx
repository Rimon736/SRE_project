import React from "react";
import {FaAllergies, FaBone, FaBrain, FaChild, FaFlask, FaHeart} from "react-icons/fa";
import {BiRightArrow} from "react-icons/bi"

const OurServices = () => {
    return (
            <div className="max-w-11/12 container mx-auto p-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Cardiology */}
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-violet-100 hover:shadow-xl transition-all duration-300">
                        <div className="bg-violet-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                            <FaHeart className="text-violet-600 text-xl" />
                        </div>
                        <h3 className="text-violet-600 text-xl font-bold mb-3">Cardiology</h3>
                        <p className="text-gray-600 mb-4">
                            Comprehensive heart care including diagnostics, treatment and prevention of cardiovascular diseases.
                        </p>
                        <a href="#" className="text-fuchsia-600 font-semibold hover:text-fuchsia-700 transition-colors flex items-center">
                            See Doctors <BiRightArrow className="ml-1" />
                        </a>
                    </div>

                    {/* Neurology */}
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-violet-100 hover:shadow-xl transition-all duration-300">
                        <div className="bg-violet-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                            <FaBrain className="text-violet-600 text-xl" />
                        </div>
                        <h3 className="text-violet-600 text-xl font-bold mb-3">Neurology</h3>
                        <p className="text-gray-600 mb-4">
                            Specialized care for disorders of the nervous system, including stroke and epilepsy management.
                        </p>
                        <a href="#" className="text-fuchsia-600 font-semibold hover:text-fuchsia-700 transition-colors flex items-center">
                            See Doctors <BiRightArrow className="ml-1" />
                        </a>
                    </div>

                    {/* Pediatrics */}
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-violet-100 hover:shadow-xl transition-all duration-300">
                        <div className="bg-violet-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                            <FaChild className="text-violet-600 text-xl" />
                        </div>
                        <h3 className="text-violet-600 text-xl font-bold mb-3">Pediatrics</h3>
                        <p className="text-gray-600 mb-4">
                            Compassionate healthcare for infants, children and adolescents through all stages of development.
                        </p>
                        <a href="#" className="text-fuchsia-600 font-semibold hover:text-fuchsia-700 transition-colors flex items-center">
                            See Doctors <BiRightArrow className="ml-1" />
                        </a>
                    </div>

                    {/* Orthopedics */}
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-violet-100 hover:shadow-xl transition-all duration-300">
                        <div className="bg-violet-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                            <FaBone className="text-violet-600 text-xl" />
                        </div>
                        <h3 className="text-violet-600 text-xl font-bold mb-3">Orthopedics</h3>
                        <p className="text-gray-600 mb-4">
                            Treatment for musculoskeletal system including joints, ligaments, tendons and rehabilitation.
                        </p>
                        <a href="#" className="text-fuchsia-600 font-semibold hover:text-fuchsia-700 transition-colors flex items-center">
                            See Doctors <BiRightArrow className="ml-1" />
                        </a>
                    </div>

                    {/* Oncology */}
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-violet-100 hover:shadow-xl transition-all duration-300">
                        <div className="bg-violet-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                            <FaFlask className="text-violet-600 text-xl" />
                        </div>
                        <h3 className="text-violet-600 text-xl font-bold mb-3">Oncology</h3>
                        <p className="text-gray-600 mb-4">
                            Comprehensive cancer care including chemotherapy, radiation therapy and surgical oncology.
                        </p>
                        <a href="#" className="text-fuchsia-600 font-semibold hover:text-fuchsia-700 transition-colors flex items-center">
                            See Doctors <BiRightArrow className="ml-1" />
                        </a>
                    </div>

                    {/* Dermatology */}
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-violet-100 hover:shadow-xl transition-all duration-300">
                        <div className="bg-violet-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                            <FaAllergies className="text-violet-600 text-xl" />
                        </div>
                        <h3 className="text-violet-600 text-xl font-bold mb-3">Dermatology</h3>
                        <p className="text-gray-600 mb-4">
                            Specialized care for skin conditions, cosmetic procedures and skin cancer prevention.
                        </p>
                        <a href="#" className="text-fuchsia-600 font-semibold hover:text-fuchsia-700 transition-colors flex items-center">
                            See Doctors <BiRightArrow className="ml-1" />
                        </a>
                    </div>
                </div>
            </div>
        );
};

export default OurServices;
