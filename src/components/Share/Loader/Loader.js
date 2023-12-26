import React from "react";

const Loader = () => {
  return (
    <div className="text-center">
      <div className="spinner-grow text-primary text-center" role="status">
        <span className="sr-only text-center">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary text-center" role="status">
        <span className="sr-only text-center">Loading...</span>
      </div>
      <div className="spinner-grow text-success text-center" role="status">
        <span className="sr-only text-center">Loading...</span>
      </div>
      <div className="spinner-grow text-danger text-center" role="status">
        <span className="sr-only text-center">Loading...</span>
      </div>
      <div className="spinner-grow text-warning text-center" role="status">
        <span className="sr-only text-center">Loading...</span>
      </div>
      <div className="spinner-grow text-info text-center" role="status">
        <span className="sr-only text-center">Loading...</span>
      </div>
      <div className="spinner-grow text-light text-center" role="status">
        <span className="sr-only text-center">Loading...</span>
      </div>
      <div className="spinner-grow text-dark text-center" role="status">
        <span className="sr-only text-center">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
