import React from "react";

const ContactUs = () => {
  return (
    <div className="container py-24 lg:py-28">
      <div className="text-center w-full md:w-2/3 mx-auto">
        <h2 className="text-4xl text-tertiary font-bold">About Shunno Sholi</h2>
        <p className="text-base font-medium py-8">
          We would like to answer your questions
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <form className="login-form w-full md:w-2/3">
          <h2 className="form-title">Sign In With</h2>
          <div className="my-1 lg:my-2">
            <label className="form-label" htmlFor="">
              Your Name
            </label>
            <input className="form-input" type="text" />
          </div>
          <div className="my-1 lg:my-2">
            <label className="form-label" htmlFor="">
              Email
            </label>
            <input className="form-input" type="email" />
          </div>
          <div className="my-1 lg:my-2">
            <label className="form-label" htmlFor="">
              Subject
            </label>
            <input className="form-input" type="text" />
          </div>
          <textarea
            required
            rows={4}
            className="textarea w-full focus:border-primary outline-none rounded-lg pl-4 pt-4"
            placeholder="Your Message"
          ></textarea>

          <div className="mt-4 flex items-center justify-center">
            <input
              className="common-btn"
              type="submit"
              value={"Send Message"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
