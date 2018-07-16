import React from "react";
import styles from "./styles.module.css"
import Img from "gatsby-image";

export default function({ sizes }) {
	console.log(sizes);

	return(
		<div>
			<Img sizes={ sizes } />
		</div>
	);
}