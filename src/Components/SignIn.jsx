import axios from "axios";
import React, { useState } from "react";
import { SiPrimevideo } from "react-icons/si";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState("");

  function handleLoginSubmit(email, password) {
    let user = {
      email,
      password,
    };
  
    axios
       //.post("http://localhost:8000/login", user)
      .post("https://prime-video-backend.herokuapp.com/login", user)
      // .then((res) => {
      //   // axios
      //   // .post("https://protected-chamber-55418.herokuapp.com/login", {
      .then((res) => {
        // console.log(res.data.token)
        const abbreviatedName = res.data.user.name
          .trim()
          .split(" ")
          .map((el) => el[0].toUpperCase())
          .join("");
        let userObj = {
          name: abbreviatedName,
          token: res.data.token,
        };
        localStorage.setItem("user", JSON.stringify(userObj));
        navigate("/home");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
          let err = error.response.data;
          if (typeof error.response.data == "string") {
            err = [
              {
                msg: error.response.data,
              },
            ];
          }
          setError(err);
        }
      });
  }
  window.addEventListener("beforeunload", function (e) {
    // Cancel the event
    e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
    // Chrome requires returnValue to be set
    e.returnValue = "";
    console.log(e);
  });
  return (
    <>
      <div className="primevideoIcon">
        <SiPrimevideo size={170} />
      </div>
      {errors.length > 0 && (
        <div className="errorbox">
          <h2>There was a problem</h2>
          <ul>
            {errors.map((e) => {
              return <li>{e.msg}</li>;
            })}
          </ul>
        </div>
      )}
      <section>
        <div className="sign_container">
          <div className="sign_header">
            {/* <img src="./blacklogoamazon.png" alt="signupimg" /> */}
          </div>
          <div className="sign_form">
            <form>
              <h1>Sign-In</h1>

              <div className="form_data">
                <label htmlFor="email">Email or mobile phone number</label>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  placeholder="At least 6 characters"
                />
              </div>
              <button
                type="submit"
                className="signin_btn"
                onClick={(e) => {
                  e.preventDefault();
                  handleLoginSubmit(email, password);
                }}
              >
                Sign-In
              </button>
            </form>
          </div>
          <div className="create_accountinfo">
            <p>New to Amazon?</p>
            <button>
              {" "}
              <Link to="/register">Create your Amazon Account</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
