import React from 'react';

const ServiceHero = () => {
    return (
        <div className='bg-[url(/surgery.jpg)] bg-cover bg-center bg-no-repeat p-6 shadow-lg h-[800px] flex flex-col justify-center items-center'>
            {/*<img src="/surgery.jpg" alt="Service Hero" className="w-full h-full object-cover shadow-lg mb-6" />*/}
            <h1 className="text-3xl md:text-5xl font-bold text-center text-white mt-6 mb-4">
                Get the <span className='text-violet-600' >Best</span> Service for Your <span className='text-fuchsia-600'>Health</span> From Our Expert Doctors
            </h1>
        </div>
    );
};

export default ServiceHero;