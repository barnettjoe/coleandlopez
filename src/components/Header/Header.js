import React from "react";
import styles from "./styles.module.css";

export default function({ title }) {
	return (
		<div id="top">
			<div className={styles.container}>
				<h1 className={styles.h1}>{ title }</h1>
			</div>
		</div>
	);
}
