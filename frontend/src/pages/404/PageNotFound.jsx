import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="container py-24 lg:py-28 text-center">
      <h1 className="text-5xl font-bold text-tertiary">
        Oops! That page can’t be found.
      </h1>
      <p className="text-base font-medium pt-4">
        It looks like nothing was found at this location. Maybe try one of the
        links below or a search?
      </p>
      <button className="pt-6">
        <Link className="xicon" to={"/"}>
          Go Home
        </Link>
      </button>
    </div>
  );
};

export default PageNotFound;
