import React from "react";
import styles from "./styles.module.css"
import twitter from "../../../static/assets/twitter.svg";
import facebook from "../../../static/assets/facebook.svg";
import instagram from "../../../static/assets/instagram.svg";

export default function() {

	function yearRange() {
		var year = (new Date()).getFullYear();
		if (year === 2018) {
			return ""
		} else {
			return " - " + year;
		}
	}

	return (
		<div className={styles.footer}>
			<div className={styles.content}>
				<p>Finally, I always go to sea as a sailor, because of the wholesome exercise and pure air of the fore-castle deck. For as in this world, head winds are far more prevalent than winds from astern (that is, if you never violate the Pythagorean maxim), so for the most part the Commodore on the quarter-deck gets his atmosphere at second hand from the sailors on the forecastle.</p>
				<div className={styles.socialMedia}>
					<img className={styles.icon} src={twitter} alt="twitter" />
					<img className={styles.icon} src={facebook} alt="facebook" />
					<img className={styles.icon} src={instagram} alt="instagram" />
				</div>
				<p className={styles.bottom}><span className={styles.copyright}>&copy; </span>Cole&amp;Lopez 2018{ yearRange() }</p>
			</div>
		</div>
	);
}