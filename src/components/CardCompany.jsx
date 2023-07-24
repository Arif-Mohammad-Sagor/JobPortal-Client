import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../authContext/ContextProvider';

const CardCompany = ({ company }) => {
  const { user } = useContext(AuthContext);
  const { _id, image, companyName, country } = company;
  // console.log(_id);
  return (
    <div className="shadow p-4 ">
      <img src={image} alt="compnay logo" />
      <p className="text-sm">Company name: {companyName}</p>
      <p className="text-sm">Country: {country}</p>

      {user ? (
        <>
          <Link
            to={`/company/${_id}`}
            className="btn btn-error btn-sm text-white  my-3"
          >
            View Detail
          </Link>
        </>
      ) : (
        <>
          <Link
            to={`/login`}
            className="btn btn-error btn-sm text-white  my-3"
          >
            View Detail
          </Link>
        </>
      )}
    </div>
  );
}

export default CardCompany