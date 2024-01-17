import React from "react";
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen fixed top-0 left-0 bg-white right-0 bottom-0 w-full z-50 overflow-hidden">
      <div className="spinner-container">
        <div className="spinnerWrap">
          <div className="w-24 h-24 bg-loader" id="spinner5"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
