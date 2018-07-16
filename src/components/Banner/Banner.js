import React from "react";
import styles from "./styles.module.css"

export default function({ title, img }) {
	var divStyle = {
		backgroundImage: 'url(' + img + ')',
	};

	return(
		<div className={styles.banner} style={divStyle}>
			<h3 className={styles.title}>
				{ title }
			</h3>
		</div>
	);
}