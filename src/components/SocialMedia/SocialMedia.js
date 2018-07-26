import React from "react";
import twitter from "../../../static/assets/twitter.svg";
import facebook from "../../../static/assets/facebook.svg";
import instagram from "../../../static/assets/instagram.svg";
import styles from "./styles.module.css";

export default function() {
	return(
		<div className={styles.socialMedia}>
			<img className={styles.icon} src={twitter} alt="twitter" />
			<img className={styles.icon} src={facebook} alt="facebook" />
			<img className={styles.icon} src={instagram} alt="instagram" />
		</div>
	);
}
