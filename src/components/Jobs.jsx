import React, { useContext, useEffect, useState } from "react";
import ToogleBtn from "./ToogleBtn";
import axios from "axios";
// import '../styles/jobStyle.css';
import JobCard from "./JobCard";
import ITcompany from "./ITcompany";

const Jobs = () => {
  const [jobs, setJobs] = useState(null);
  const [EJobs, setEJobs] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [showAllEJobs, setShowAllEJobs] = useState(false);

  useEffect(() => {
    axios
      .get("https://job-hut-arif-mohammad-sagor.vercel.app/freshJobs")
      .then((response) => {
        // console.log(response.data.data);
        setJobs(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://job-hut-arif-mohammad-sagor.vercel.app/ExperiencedJobs")
      .then((response) => {
        // console.log(response.data.data);
        setEJobs(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
      });
  }, []);
  console.log(EJobs);

  const renderJobs = () => {
    if (showAll) {
      return jobs?.map((job) => <JobCard key={job.id} job={job} />);
    } else {
      return jobs?.slice(0, 6).map((job) => <JobCard key={job.id} job={job} />);
    }
  };
  const renderEXJobs = () => {
    if (showAllEJobs) {
      return EJobs?.map((job) => <JobCard key={job.id} job={job} />);
    } else {
      return EJobs?.slice(0, 6).map((job) => (
        <JobCard key={job.id} job={job} />
      ));
    }
  };

  return (
    <>
      <ToogleBtn />
      <h1 className="md:text-3xl font-bold ml-4"> Fresh Jobs</h1>
      <div className="job-section">
        <div className="grid md:grid-cols-3">{renderJobs()}</div>

        <div className="flex justify-center mt-4">
          {!showAll && (
            <button
              className="btn btn-error text-white"
              onClick={() => setShowAll(true)}
            >
              Show All Jobs
            </button>
          )}
        </div>
      </div>
      <h1 className="md:text-3xl font-bold ml-4 my-8"> Experienced Jobs</h1>
      {/* Experienced Jobs */}
      <div className="grid md:grid-cols-3">{renderEXJobs()}</div>

      <div className="flex justify-center mt-4">
        {!showAllEJobs && (
          <button
            className="btn btn-error text-white"
            onClick={() => setShowAllEJobs(true)}
          >
            Show All Jobs
          </button>
        )}
      </div>
      {/* it companies rendering here */}
      <ITcompany />
    </>
  );
};

export default Jobs;
