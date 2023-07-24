import React, { useEffect, useState } from "react";
import axios from "axios";
import CardCompany from "./CardCompany";

const ITcompany = () => {
  const [companies, setCompanies] = useState(null);
  const [Intcompanies, setIntCompanies] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://job-hut-arif-mohammad-sagor.vercel.app/countryCode?country=Bangladesh"
      )
      .then((response) => {
        // console.log(response.data.data);
        setCompanies(response.data.data);
      })

      .catch((error) => {
        console.error("Error fetching job data:", error);
      });

    axios
      .get(
        "https://job-hut-arif-mohammad-sagor.vercel.app/intCountryCode?country=Bangladesh"
      )
      .then((response) => {
        // console.log(response.data.data);
        setIntCompanies(response.data.data);
      })

      .catch((error) => {
        console.error("Error fetching job data:", error);
      });
  }, []);
  console.log(Intcompanies);

  const renderNationalItCompanies = () => {
    return companies
      ?.slice(0, 3)
      .map((company) => <CardCompany key={company.id} company={company} />);
  };
  const renderInternationalItCompanies = () => {
    return Intcompanies?.slice(0, 3).map((company) => (
      <CardCompany key={company.id} company={company} />
    ));
  };

  return (
    <>
      <h1 className="md:text-3xl font-semibold ml-4 py-8">
        Top National IT Compnaies
      </h1>
      <div className="grid md:grid-cols-3"> {renderNationalItCompanies()}</div>
      <h1 className="md:text-3xl font-semibold ml-4 py-4">
        {" "}
        Top International IT Compnaies
      </h1>
      <div className="grid md:grid-cols-3">
        {" "}
        {renderInternationalItCompanies()}
      </div>
    </>
  );
};

export default ITcompany;
