import React from "react";
import ParallaxLayer from "../ParallaxLayer/ParallaxLayer.js";
import styles from "./styles.module.css";

export default function({ children }) {
	return(
		<div className={ styles.backLayer }>
			{ children }
		</div>
	);
}