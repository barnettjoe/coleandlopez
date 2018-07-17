import React from "react";
import styles from "./styles.module.css"
import Banner from "../Banner/Banner"

export default function({ data }) {

	console.log(data);
	return (
		<div>
		    <Banner title={ data.frontmatter.title } sizes={ data.sizes } />
			<div className={styles.section}>
			  <div dangerouslySetInnerHTML={{ __html: data.html }} />
			</div>
		</div>
	);
}

