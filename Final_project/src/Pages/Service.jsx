import React from 'react';
import OurServices from "../components/OurServices.jsx";
import ServiceHero from "../components/ServiceHero.jsx";
import BookingForm from "../components/BookingForm.jsx";

const Service = () => {
    return (
        <div>
            <ServiceHero></ServiceHero>
            <OurServices></OurServices>
            <BookingForm></BookingForm>
        </div>
    );
};

export default Service;