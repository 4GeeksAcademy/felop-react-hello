import React from "react";

function Jumbotron () {
    return(
        <div className="jumbotron bg-light rounded-3 m-2 mt-4 mb-4">
      <div className="container-fluid py-5 text-start">
        <h1 className="display-4 fw-bold">A Warm Welcome!</h1>
        <p className="col-md-8 fs-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam,
          eligendi, in quo sunt possimus non incidunt odit vero aliquid
          similique quaerat nam nobis illo aspernatur vitae fugiat numquam
          repellat.
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Call to action!
        </a>
      </div>
    </div>
    );
};

export default Jumbotron;