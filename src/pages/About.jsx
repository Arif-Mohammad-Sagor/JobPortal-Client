import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
    const divStyle = {
      backgroundImage: "url('/images/about.jpg')",
      backgroundPosition: "center center",
      backgroundSize: "cover",
    };
  return (
    <>
      <section className="bg-gray-100 text-gray-800 mt-12">
        <div className="container flex flex-col mx-auto lg:flex-row">
          <div className="w-full lg:w-1/3" style={divStyle}></div>
          <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
            <h2 className="text-3xl font-semibold leadi">
              Modern solutions to all kinds of Job seeking Problems.
            </h2>
            <p className="mt-4 mb-2 text-sm">
              At Job Hut, our mission is to bridge the gap
              between talented job seekers and leading employers. We are
              dedicated to providing a seamless and user-friendly platform for
              job seekers to explore exciting opportunities and for employers to
              discover top-notch talent.
            </p>
            <p className="mt-4 mb-8 text-sm">
              Our platform is designed to simplify the job search process,
              making it easier for candidates to find their dream jobs and for
              employers to find the perfect match for their teams. With advanced
              search capabilities, personalized job recommendations, and a wide
              range of industries, [Your Job Portal Name] is the go-to
              destination for all your career needs.
            </p>
            <Link
              to="/contact"
              className="self-start px-10 py-3 text-lg font-medium rounded-3xl bg-[#f87272] text-gray-50"
            >
             Contact Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default About