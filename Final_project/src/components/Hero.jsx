import React from "react";

const Hero = () => {
  return (
    <div className="max-w-11/12 mx-auto flex flex-row bg-linear-to-bl from-violet-300 to-fuchsia-300 rounded-[5px]">
      <div className="w-2/3 flex flex-col justify-center items-start p-4 align-middle  ">
        <h1 className="font-bold text-2xl">
          Providing Quality <span className="text-fuchsia-600">Healthcare</span>{" "}
          for a Brighter and <span className="text-violet-600">Healthy</span>{" "}
          Future
        </h1>
        <p>
          We are dedicated to providing exceptional medical
          care to our patients and their families. Our experienced team of
          medical professionals, cutting-edge technology, and compassionate
          approach make us a leader in the healthcare industry
        </p>
        <button className="bg-fuchsia-600 p-2 rounded-[5px] my-3 text-white font-semibold">Appointments</button>
      </div>
      <div className="w-1/3 flex justify-center items-center ">
        <img src="default_doctor.png" alt="Daktarer chobi" />
      </div>
    </div>
  );
};

export default Hero;
