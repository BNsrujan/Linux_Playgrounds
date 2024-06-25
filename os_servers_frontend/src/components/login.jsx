import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CLIENT_ID = "Ov23liD3eIcND845yFNY";

const Login = () => {
  const [rerender, setRerender] = useState(false);
  const [userData, setuserData] = useState({});
  function loginWithGithhub() {
    window.location.assign(
      "https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID
    );
  }
  useEffect(() => {
    const get_token = window.location.search;
    const urlParams = new URLSearchParams(get_token);
    console.log(urlParams);
    const codeParam = urlParams.get("code");
    console.log(codeParam);

    if (codeParam && localStorage.getItem("accessToken") === null) {
      async function getAcceaToken() {
        await fetch("http://localhost:5173/getAccessToken?code=" + codeParam, {
          method: "GET",
          headers: {
            "content-type": "application.json",
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            if (data.access_token) {
              localStorage.setItem("accessToken", data.access_token);
              setRerender(!rerender);
            }
          });
        if (!response.ok) {
          throw new Error("falied to fatch  access Token");
        }
        const data = await response.json();
        return data;
      }
      getAcceaToken();
    }
  }, []);

  async function getUserData() {
    await fetch("http://localhost:5173/getUserData", {
      method: "GET",
      headers: {
        "Authorization" : "Bearer" + localStorage.getItem("accessToken"),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setuserData(data);
      });
  }
  return (
    <>
      {localStorage.getItem("accessToken") ? (
        <>
          <h1>we have the access token</h1>

          <button
            onClick={() => {
              localStorage.removeItem("accessToken");
              setRerender(!rerender);
            }}
            className="py-2 px-3 rounded-xl bg-slate-600 text-white"
          >
            logout
          </button>
          <h3>get user data from user API</h3>
          <button onClick={getUserData}>get Data</button>
          {Object.keys(userData).length !== 0 ? (
            <>
              <h4>hey there{userData.Login}</h4>
              <img width="40px" src={userData.avator_url} />
              <a src={userData.html_url} />
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          <div className="w-[20vw] h-[435px] m-auto  justify-center flex items-center border rounded-xl border-zinc-800">
          <button
            onClick={loginWithGithhub}
            className="py-2 px-3 rounded-xl  bg-slate-600  text-white"
          >
            Login with GitHub
          </button>
          </div>

          
        </>
      )}
    </>
  );
};

export default Login;
