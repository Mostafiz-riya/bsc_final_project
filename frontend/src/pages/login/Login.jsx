import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../components/Shared/Loading.jsx";
import { auth } from "../../firebase.js";
import useToken from "../../hooks/useToken.js";

const Login = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const [token] = useToken(user || googleUser || githubUser);

  const { register, handleSubmit } = useForm();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (token) {
      toast("Login Successfull");
      navigate(from, { replace: true });
    }
  }, [from, navigate, token]);
  useEffect(() => {
    if (error || googleError || githubError) {
      toast.warning("Authentication Failed");
      return navigate("/login");
    }
  }, [error, githubError, googleError, navigate]);

  if (loading || googleLoading || githubLoading) {
    return <Loading />;
  }
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="login-container">
      <button>
        <Link className="common-btn go-home" to={"/"}>
          Go Home
        </Link>
      </button>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h2 className="form-title">Sign In </h2>
        <div className="my-1 lg:my-2">
          <label className="form-label" htmlFor="">
            Email
          </label>
          <input className="form-input" type="email" {...register("email")} />
        </div>
        <div className="my-1 lg:my-2">
          <label className="form-label" htmlFor="">
            Passowrd
          </label>
          <input
            className="form-input"
            type="password"
            {...register("password")}
          />
        </div>
        <div className="mt-2">
          <input className="form-submit" type="submit" value={"Login"} />
        </div>
        <p className="text-lg mt-2">
          Don't Have an Account.{" "}
          <Link to={"/register"}>
            <span className="text-primary">Register Now</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
