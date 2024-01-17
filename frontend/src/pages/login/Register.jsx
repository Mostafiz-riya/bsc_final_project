import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

import { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { auth } from "../../firebase.js";
import Loading from "../../components/Shared/Loading.jsx";
import useToken from "../../hooks/useToken.js";
const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, GitUser, GitLoading, GitError] =
    useSignInWithGithub(auth);

  const [token] = useToken(user || googleUser || GitUser, displayName);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (token) {
      toast("Registation Successfully");
      navigate("/");
    }
  }, [navigate, token]);

  useEffect(() => {
    if (error || updateError || googleError || GitError) {
      toast("Sign Up failed");
      navigate("/register");
    }
  }, [GitError, error, googleError, navigate, updateError]);
  if (loading || updating || googleLoading || GitLoading) {
    return <Loading />;
  }

  const onSubmit = async (data) => {
    const displayName = data.name;
    setDisplayName(displayName);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName });
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
            User Name
          </label>
          <input
            className="form-input"
            type="text"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="text-red-500">User name is required</p>}
        </div>
        <div className="my-1 lg:my-2">
          <label className="form-label" htmlFor="">
            Email
          </label>
          <input
            className="form-input"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
        </div>
        <div className="my-1 lg:my-2">
          <label className="form-label" htmlFor="">
            Passowrd
          </label>
          <input
            className="form-input"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
        </div>
        <div className="my-1 lg:my-2">
          <label className="form-label" htmlFor="">
            Confirm Passowrd
          </label>
          <input
            className="form-input"
            type="password"
            {...register("confirmPassword", {
              required: true,
              validate: (val) => {
                if (watch("password") !== val) {
                  return "Authentication Failed";
                }
              },
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>
        <div className="mt-2">
          <input
            disabled={!watch("password") || !watch("name") || !watch("email")}
            className="form-submit"
            type="submit"
            value={"Register"}
          />
        </div>
        <p className="text-lg mt-2">
          Don't Have an Account.{" "}
          <Link to={"/login"}>
            <span className="text-primary">Login Now</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
