import React from "react";
import styles from "./styles.module.css";

export default function( {children} ) {
	return(
		<div className={ styles.wrapper }>
			<nav id="side-menu" className= { styles.nav }>
				<ul className={styles.ul}>
					<li className={styles.li}>
						<a className={ styles.link } href="#top">
							Home
						</a>
					</li>

					<li className={styles.li}>
						<a className={ styles.link } href="#About Us">
							About Us
						</a>
					</li>


					<li className={styles.li}>
						<a className={ styles.link } href="#Portfolio">
							Portfolio
						</a>
					</li>


					<li className={styles.li}>
						<a className={ styles.link } href="#Contact">
							Contact
						</a>
					</li>
				</ul>
			</nav>
			<a href="#side-menu">
				<svg className={styles.hamburger}>
					<defs/>
					<circle cx='21' cy='21' r='20'  fill='#ffffff' stroke='#000000'/>
					<line x1='7' x2='35' y1='15' y2='15' stroke='#000000' />
					<line x1='7' x2='35' y1='21' y2='21' stroke='#000000' />
					<line x1='7' x2='35' y1='27' y2='27' stroke='#000000' />
				</svg>
			</a>
			<a href="#close">
				<svg className={styles.close}>
					<defs/>
					<circle cx='21' cy='21' r='20' fill='#ffffff' stroke='#000000' />
					<line x1='11' x2='32' y1='11' y2='32' stroke='#000000' />
					<line x1='11' x2='32' y1='32' y2='11' stroke='#000000' />
				</svg>
			</a>
			<a className={ styles.backdrop } href="#close">
				<div></div>
			</a>
		</div>
	);
}