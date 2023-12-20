import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../../apicalls/user";
//import odiben from '../../public/odiben.jpg'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    try {
      const response = await LoginUser({
        email,
        password,
      });
      console.log("Inside Login again===>",response);
      if (response.success) {
        console.log("Inside Login again csuccess===>",response);
        localStorage.setItem("token", response.data);
        //window.alert(response.message);
        navigate("/");
      } else {
        window.alert(response.message);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white border-t border-purple-600 rounded shadow-lg shadow-purple-800/50 lg:max-w-md">
        <div className="flex items-center justify-center ">
          <img src="/odiben.jpg" className="h-20 w-20" alt="OdiBen Logo" />
        </div>
        <h1 className="text-3xl font-semibold text-center text-purple-700 p-y-4">
          Sign In
        </h1>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="flex">
            <label for="email" className="self-center w-1/4 text-m text-gray-800">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); }}
              className="w-3/4 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div class="mt-4">
            <div className="flex">
              <label
                for="password"
                class="self-center w-1/4 text-m text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); }}
                className="w-3/4 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <Link to="#" className="text-xs text-gray-600 hover:underline">
              Forget Password?
            </Link>
            <div className="mt-6">
              <button
                
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Login
              </button>
            </div>
          </div>
        </form>
        <p class="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <Link
            to="/registration"
            className="font-medium text-purple-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
