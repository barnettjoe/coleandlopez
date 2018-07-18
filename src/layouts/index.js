import React from "react";
import Link from "gatsby-link";
import NavBar from "../components/NavBar/NavBar";
import MobileNav from "../components/MobileNav/MobileNav";
import Footer from "../components/Footer/Footer";

export default ({ children }) =>
  <div>
    <NavBar />
    <MobileNav />
    <div>
      { children() }
    </div>
    <Footer />
  </div>
