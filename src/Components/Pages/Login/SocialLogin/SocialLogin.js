import React from "react";
import "./SocialLogin.css";
import Gicon from "../../../../images/social/google.png";
import github from "../../../../images/social/github.png";
import fb from "../../../../images/social/facebook.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../../firebase.Init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Home/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  const navigate = useNavigate();
  let ErrorElement;
  if (error || error1) {
    ErrorElement = (
      <div>
        <p>
          Error: {error?.message}|| {error1?.message}
        </p>
      </div>
    );
  }
  if (loading) {
    return <Loading />;
  }

  if (user || user1) {
    navigate("/");
  }

  return (
    <div>
      <div className="line-align">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2">Or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {ErrorElement}
      <div className="">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-block mx-auto"
        >
          Sign in with <img src={Gicon} alt="" />{" "}
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info w-50 d-block mx-auto mt-3"
        >
          Sign in with <img src={github} alt="" />{" "}
        </button>
        <button className="btn btn-info w-50 d-block mx-auto mt-3">
          Sign in with <img style={{ width: "20px" }} src={fb} alt="" />{" "}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
