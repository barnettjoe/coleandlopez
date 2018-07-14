import React from "react";
import styles from "./styles.module.css";

export default function({ children }) {
	return(
		<div className={styles.layer}>
			{ children }
		</div>
	);
}