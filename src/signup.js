import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import useToken from "./hooks/useToken"

async function signupUser(credentials) {
  // console.log(credentials)
  return fetch("http://localhost:3030/api/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Signup() {
    const {token, setToken} = useToken();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [password_repeat, setPasswordRepeat] = useState();
    const [fullname, setFullname] = useState();



    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await signupUser({
          username,
          password,
          fullname,
          password_repeat
        });
        setToken(token);
      };
  return (
    <div className="py-6">
      {/* <Navbar /> */}
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage: 'url("./assets/images/eating.jpg',
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
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
              sign up
            </a>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
            onChange={(e) => setFullname(e.target.value)}
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="text"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
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
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              {/* <a href="#" className="text-xs text-gray-500">Forget Password?</a> */}
            </div>
            <input
            onChange={(e) => setPasswordRepeat(e.target.value)}
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="password"
            />
          </div>
          <div className="mt-8">
            <button onClick={handleSubmit} className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
              Sign up
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link to="../signin" className="text-xs text-gray-500 uppercase">
              or sign in
            </Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
