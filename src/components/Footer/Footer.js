import React from "react";
import styles from "./styles.module.css"
import SocialMedia from "../SocialMedia/SocialMedia";

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
				<p className={styles.bottom}><span className={styles.copyright}>&copy; </span>Cole&amp;Lopez 2018{ yearRange() }</p>
			</div>
		</div>
	);
}