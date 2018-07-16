import React from "react";
import g from "glamorous";
import { rhythm } from "../../utils/typography";
import styles from "./styles.module.css"

export default function({ node }) {
	return (
		<div className={styles.section}>
		  <g.H3 marginBottom={rhythm(1 / 4)}>
		    {node.frontmatter.title}
		  </g.H3>
		  <div dangerouslySetInnerHTML={{ __html: node.html }} />
		</div>
	);
}

