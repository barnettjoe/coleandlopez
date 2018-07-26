import React from "react";
import Link from "gatsby-link";
import NavBar from "../components/NavBar/NavBar";
import MobileNav from "../components/MobileNav/MobileNav";
import Footer from "../components/Footer/Footer";
import reset from "./reset.css";
import baseStyles from "./base.css";
import styles from "./styles.module.css";

export default ({ children }) =>
  <div className={ styles.flexWrapper }>
    <NavBar />
    <MobileNav />
    <div className={ styles.main }>
      { children() }
    </div>
    <Footer className={ styles.footer } />
  </div>
