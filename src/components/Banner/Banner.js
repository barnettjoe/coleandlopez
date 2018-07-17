import React from "react";
import styles from "./styles.module.css"
import Img from "gatsby-image";

export default function({ sizes, title }) {
	return(
		<div className={styles.container}>
			<Img
				sizes={ sizes }
				className={styles.image}
			/>
			<h2 className={styles.title}>{ title }</h2>
		</div>
	);
}