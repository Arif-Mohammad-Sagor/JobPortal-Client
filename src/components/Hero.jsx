import React from 'react'

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="/images/1.svg" className="max-w-sm rounded-lg shadow-2xl" />
        <div className=" ">
          <h1 className="text-xl lg:text-5xl font-bold ">
            Your Gateway to Job Success
          </h1>
          <p className=" py-3 lg:py-6 text-sm lg:text-base">
            Launching Your Ambitions into Reality - Empowering Job Seekers with
            a Diverse Range of Opportunities, Exclusive Insights, and a
            Supportive Network to Propel Your Career Forward.
          </p>
          <button className="btn-sm btn-error text-white rounded-md lg:btn-md">
           Let's Explore
          </button>
        </div>
          </div>

         
    </div>
  );
}

export default Hero