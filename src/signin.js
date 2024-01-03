import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Navbar from "./components/Navbar";

async function loginUser(credentials) {
  // console.log(credentials)
  return fetch("http://localhost:3030/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => {
    if(data.status == 201) data.json()});
}

export default function Signin({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    if(token) setToken(token);
  };
  return (
    <div className="py-6">
      {/* <Navbar /> */}
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage: 'url("./assets/images/eating.jpg")',
          }}
        ></div>
        <form className="w-full p-8 lg:w-1/2" onSubmit={handleSubmit}>
          {/* <h2 className="text-2xl font-semibold text-gray-700 text-center">Brand</h2> */}
          <div className="flex justify-center">
            <img
              src="./assets/images/typography-logo.svg"
              className="w-1/2 self-center text-center"
            ></img>
          </div>
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>

          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <a href="#" className="text-xs text-center text-gray-500 uppercase">
              {" "}
              sign in
            </a>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="text"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              {/* <a href="#" className="text-xs text-gray-500">Forget Password?</a> */}
            </div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="password"
            />
          </div>
          <div className="mt-8">
            <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
              Login
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link to="../signup" className="text-xs text-gray-500 uppercase">
              or sign up
            </Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </form>
      </div>
    </div>
  );
}

Signin.propTypes = {
  setToken: PropTypes.func.isRequired,
};
