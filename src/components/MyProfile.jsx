import React from 'react'


const MyProfile = () => {
  return (
    <div className="ml-4">
      <h1 className="md:text-3xl my-8 font-semibold">Our Profile Section</h1>
      <div className="flex justify-center">
        <div className="video md:w-1/2 ">
          <iframe
            src="https://drive.google.com/file/d/1kGg9vmJU4EIC20YeYJOPWO8TNGB4_N0I/preview"
            width="80%"
            height="80%"
            allow="autoplay"
          ></iframe>
        </div>

        <div className="image md:w-1/2">
          <p className="md:text-lg mb-4"> Some of my works </p>
          <div className=" bg-base-100 space-x-2 space-y-2 grid grid-cols-2">
            <img
              src={"/images/ai.png"}
              className="w-[200px] h-[200px] shadow-lg"
            />
            <img
              src={"/images/kFood.png"}
              className="w-[200px] h-[200px] shadow-lg"
            />
            <img
              src={"/images/law.png"}
              className="w-[200px] h-[200px] shadow-lg"
            />
            <img
              src={"/images/toys.png"}
              className="w-[200px] h-[200px] shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile