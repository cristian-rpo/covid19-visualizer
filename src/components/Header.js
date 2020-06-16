import React from "react";

const Header = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Stay Home</h1>
      <p className="lead">
        This web site is based on{" "}
        <a href="https://covid19api.com/">covid19api</a>, all the information
        provided here must be verified. This project is experimental.
      </p>
      <p>Always remember to stay informed from official sources.</p>
      <a
        className="btn btn-danger"
        href="https://g.co/kgs/p9bdqL"
        role="button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn more
      </a>
    </div>
  );
};

export default Header;
