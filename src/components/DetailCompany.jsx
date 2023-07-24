import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailCompany = () => {
  const { companyId } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://job-hut-arif-mohammad-sagor.vercel.app/company/${companyId}`
      )
      .then((response) => {
        // console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
      });
  }, []);
  console.log(data);

  return (
    <>
      {" "}
      <h2 className="text-center my-8 md:text-3xl font-semibold">
        Company Details
      </h2>
      <div className="grid md:grid-cols-2">
        <div>
          <img src={data.image} className="w-[400px] " />
        </div>
        <div>
          <p>Company Name: {data.companyName}</p>
          <p>Company Location: {data.country}</p>
          <p> Description:{data.description}</p>
        </div>
      </div>
    </>
  );
};

export default DetailCompany;
