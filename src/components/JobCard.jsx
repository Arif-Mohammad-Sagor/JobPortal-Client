import React from "react";

const JobCard = ({ job }) => {
  const { positionName, jobLocaton, companyName, companiesLogo } =job
  return (
    <div className="shadow p-4 ">
      <img src={companiesLogo} alt="Company_Logo" />
      <p className="text-sm">CompanyName: {companyName}</p>
      <h3 className="text-sm">PositionName: {positionName}</h3>
      <p className="text-sm"> Location: {jobLocaton}</p>
      <button className="btn  btn-error btn-sm mt-2 text-white">Apply Now</button>
    </div>
  );
};

export default JobCard;
