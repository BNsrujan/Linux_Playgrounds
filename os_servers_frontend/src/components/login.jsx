import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });
      // Save the token to localStorage (or use context)
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      console.error(err);
      // Handle error (e.g., show a message to the user)
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Login
            </button>
          </div>
          <div className="mt-4 text-center">
            <Link to="/forgot-password" className="text-blue-500 hover:text-blue-700 font-bold">
              Forgot Password?
            </Link>
          </div>
          <div className="mt-4 text-center">
            <span className="text-gray-700">Don't have an account? </span>
            <Link to="/register" className="text-blue-500 hover:text-blue-700 font-bold">
              Create Account
            </Link>
          </div>
        </form>
      </div>
    </div>
    // =======
    // import React from "react";
    // import { useEffect, useState } from "react";

    // const CLIENT_ID = "Ov23liD3eIcND845yFNY";

    // const Login = () => {
    //   const [rerender, setRerender] = useState(false);
    //   const [userData, setuserData] = useState({});
    //   function loginWithGithhub() {
    //     window.location.assign(
    //       "https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID
    //     );
    //   }
    //   useEffect(() => {
    //     const get_token = window.location.search;
    //     const urlParams = new URLSearchParams(get_token);
    //     console.log(urlParams);
    //     const codeParam = urlParams.get("code");
    //     console.log(codeParam);

    //     if (codeParam && localStorage.getItem("accessToken") === null) {
    //       async function getAcceaToken() {
    //         await fetch("http://localhost:5173/getAccessToken?code=" + codeParam, {
    //           method: "GET",
    //           headers: {
    //             "content-type": "application.json",
    //           },
    //         })
    //           .then((response) => {
    //             return response.json();
    //           })
    //           .then((data) => {
    //             console.log(data);
    //             if (data.access_token) {
    //               localStorage.setItem("accessToken", data.access_token);
    //               setRerender(!rerender);
    //             }
    //           });
    //         if (!response.ok) {
    //           throw new Error("falied to fatch  access Token");
    //         }
    //         const data = await response.json();
    //         return data;
    //       }
    //       getAcceaToken();
    //     }
    //   }, []);

    //   async function getUserData() {
    //     await fetch("http://localhost:5173/getUserData", {
    //       method: "GET",
    //       headers: {
    //         "Authorization" : "Bearer" + localStorage.getItem("accessToken"),
    //       },
    //     })
    //       .then((response) => {
    //         return response.json();
    //       })
    //       .then((data) => {
    //         console.log(data);
    //         setuserData(data);
    //       });
    //   }
    //   return (
    //     <>
    //       {localStorage.getItem("accessToken") ? (
    //         <>
    //           <h1>we have the access token</h1>

    //           <button
    //             onClick={() => {
    //               localStorage.removeItem("accessToken");
    //               setRerender(!rerender);
    //             }}
    //             className="py-2 px-3 rounded-xl bg-slate-600 text-white"
    //           >
    //             logout
    //           </button>
    //           <h3>get user data from user API</h3>
    //           <button onClick={getUserData}>get Data</button>
    //           {Object.keys(userData).length !== 0 ? (
    //             <>
    //               <h4>hey there{userData.Login}</h4>
    //               <img width="40px" src={userData.avator_url} />
    //               <a src={userData.html_url} />
    //             </>
    //           ) : (
    //             <></>
    //           )}
    //         </>
    //       ) : (
    //         <>
    //           <div className="w-[20vw] h-[435px] m-auto  justify-center flex items-center border rounded-xl border-zinc-800">
    //           <button
    //             onClick={loginWithGithhub}
    //             className="py-2 px-3 rounded-xl  bg-slate-600  text-white"
    //           >
    //             Login with GitHub
    //           </button>
    //           </div>
    //         </>
    //       )}
    //     </>
    // >>>>>>> origin/main
  );
};

export default Login;
