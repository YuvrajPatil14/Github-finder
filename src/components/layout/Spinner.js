import React, { Fragment } from "react";
import Spinner from "./spinner.gif";

const Spiner = () => (
  <Fragment>
    <img
      src={Spinner}
      alt='Loading...'
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  </Fragment>
);

export default Spiner;
