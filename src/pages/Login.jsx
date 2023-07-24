import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../authContext/ContextProvider';
import Swal from 'sweetalert2';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then(res => {
       Swal.fire({
         position: "top-center",
         icon: "success",
         title: "Logged in successfully",
         showConfirmButton: false,
         timer: 1500,
       });
       navigate("/");
    }).catch(error => {
      console.log("error while login",error);
    })
    form.reset();

}
  return (
    <div className="flex flex-col mx-auto max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
      <div className="mb-0 text-center">
        <h1 className="mb-1 text-4xl font-bold">Sign in</h1>
        <p className="text-sm text-gray-600">Sign in to access your account</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-12">
        <div className="space-y-4">

          <div>
            <label for="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="tom@cruise.com"
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
              Sign in
            </button>
          </div>
          <p className="px-6 text-sm text-center text-gray-600">
            Don't have an account yet?
            <Link
              rel="noopener noreferrer"
              to="/register"
              className="hover:underline text-[#f87272]"
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login