import React from "react";
import Link from "gatsby-link";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer"

export default ({ children }) =>
  <div>
    <NavBar />
    <div>
      { children() }
    </div>
    <Footer />
  </div>
