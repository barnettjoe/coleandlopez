import React from "react";
import styles from "./styles.module.css"
import Banner from "../Banner/Banner"

export default function({ data }) {
	return (
		<div id={ data.frontmatter.title } className={styles.container}>
		    <Banner title={ data.frontmatter.title } sizes={ data.sizes } />
			<div className={styles.section}>
			  <div dangerouslySetInnerHTML={{ __html: data.html }} />
			</div>
		</div>
	);
}