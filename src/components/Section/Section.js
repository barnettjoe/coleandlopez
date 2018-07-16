import React from "react";
import styles from "./styles.module.css"

export default function({ node }) {
	return (
		<div className={styles.section}>
		  <div dangerouslySetInnerHTML={{ __html: node.html }} />
		</div>
	);
}

