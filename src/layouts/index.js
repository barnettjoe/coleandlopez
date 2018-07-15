import React from "react";
import Link from "gatsby-link";
import NavBar from "../components/NavBar/NavBar";

export default ({ children }) =>
  <div>
    <NavBar />
    { children() }
  </div>
