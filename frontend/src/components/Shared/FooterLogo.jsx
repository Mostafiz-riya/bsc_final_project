import React from "react";
import {
  FaFacebookF,
  FaGithubSquare,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterLogo = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-primary">
        <Link to="/">
        Shunno <span className="text-bodyWhite cursor-pointer">Sholi</span>
        </Link>
      </h3>
      <p className="text-base py-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta impedit
        neque
      </p>
      <ul className="footer-social-ul">
        <li className="social-icon">
          <FaFacebookF className="text-2xl" />
        </li>
        <li className="social-icon">
          <FaTwitter className="text-2xl" />
        </li>
        <li className="social-icon">
          <FaLinkedinIn className="text-2xl" />
        </li>
        <li className="social-icon">
          <FaGithubSquare className="text-2xl" />
        </li>
      </ul>
    </div>
  );
};

export default FooterLogo;
