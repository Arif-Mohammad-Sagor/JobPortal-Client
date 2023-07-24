import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../authContext/ContextProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { user, createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const registeredUser = result.user;
        console.log(registeredUser);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User Successfully Registered",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
    form.reset();
  };
  return (
    <div className="flex flex-col mx-auto max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign up</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label for="name" className="block mb-2 text-sm">
              User Name
            </label>
            <input
              type="text"
              name="user"
              id="name"
              placeholder="Tom Cruise"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
          <div>
            <label for="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="cristofer@=nolan.com"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label for="password" className="text-sm">
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-[#f87272] text-gray-50"
            >
              Sign up
            </button>
          </div>
          <p className="px-6 text-sm text-center text-gray-600">
            Already have an account yet?
            <Link
              rel="noopener noreferrer"
              to="/login"
              className="hover:underline text-[#f87272]"
            >
              Sign in
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
