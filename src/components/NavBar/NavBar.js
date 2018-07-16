import React from "react";
import Link from "gatsby-link";
import styles from "./styles.module.css";

export default function( {children} ) {
	return(
		<div className={styles.nav}>
			<ul className={styles.ul}>
				<li className={styles.li}>
					<Link className={styles.link} to={`/`}>
						Home
					</Link>
				</li>
				<li className={styles.li}>
					<Link className={styles.link} to={`/about/`}>
						About
					</Link>
				</li>
				<li className={styles.li}>
					<Link className={styles.link} to={`/portfolio/`}>
						Portfolio
					</Link>
				</li>
				<li className={styles.li}>
					<Link className={styles.link} to={`/contact/`}>
						Contact
					</Link>
				</li>
			</ul>
		</div>
	);
}
