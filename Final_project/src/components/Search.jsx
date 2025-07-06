import {useState} from 'react';

const Search = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    name: '',
    specialty: ''
  });

  const specialties = [
    'All Specialties',
    'Cardiology',
    'Pediatrics',
    'Orthopedics',
    'Neurology',
    'Dermatology',
    'Oncology'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
      <div className="max-w-11/12 mx-auto p-6 bg-white rounded-xl shadow-md my-2">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Find A Doctor</h2>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-0 md:grid md:grid-cols-12 md:gap-4">
          {/* Name Input */}
          <div className="md:col-span-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Doctor's name"
                value={searchParams.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>

          {/* Specialty Select */}
          <div className="md:col-span-4">
            <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">
              Specialty
            </label>
            <select
                id="specialty"
                name="specialty"
                value={searchParams.specialty}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
            >
              {specialties.map(spec => (
                  <option key={spec} value={spec === 'All Specialties' ? '' : spec}>
                    {spec}
                  </option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <div className="md:col-span-4 flex items-end">
            <button
                type="submit"
                className="w-full bg-violet-600 hover:bg-fuchsia-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Search
            </button>
          </div>
        </form>
      </div>
  );
};

export default Search;