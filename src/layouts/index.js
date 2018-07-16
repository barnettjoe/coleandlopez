import React from "react";
import Link from "gatsby-link";
import NavBar from "../components/NavBar/NavBar";
import Section from "../components/Section/Section";

export default ({ children }) =>
  <div>
    <NavBar />
    <div>
      { children() }
    </div>
  </div>
