import React from "react";
import styles from "./styles.module.css"

export default function({ children }) {
	return (
		<div className={styles.parallax}>
			{children}
		</div>
	);
}