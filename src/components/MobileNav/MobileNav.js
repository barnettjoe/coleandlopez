import React from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import styles from "./styles.module.css";

export default function() {
	return(
		<div>
			<label htmlFor="toggle-1">
				<svg className={styles.hamburger} id='svg'>
					<desc>Created with Snap</desc>
					<defs/>
					<circle cx='21' cy='21' r='20'  fill='#ffffff' stroke='#000000'/>
					<line x1='7' x2='35' y1='15' y2='15' stroke='#000000' />
					<line x1='7' x2='35' y1='21' y2='21' stroke='#000000' />
					<line x1='7' x2='35' y1='27' y2='27' stroke='#000000' />
				</svg>
			</label>
			<input className={styles.checkbox} type="checkbox" id="toggle-1" />
			<DropDownMenu className={styles.menu}/>
		</div>
	);
}




