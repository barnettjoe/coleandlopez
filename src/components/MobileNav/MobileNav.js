import React from "react";
import styles from "./styles.module.css";

export default function( {children} ) {
	return(
		<div className={ styles.wrapper }>
			<div className={ styles.topBar }></div>
			<nav id="side-menu" className= { styles.menu }>
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
				<div className={ styles.hamburger }>
		          <span className={ styles.line }></span>
		          <span className={ styles.line }></span>
		          <span className={ styles.line }></span>
		        </div>
			</a>
			<a href="#close">
				<div className={styles.close}>
		          <span className={ styles.line }></span>
		          <span className={ styles.line }></span>
		        </div>
			</a>
			<a className={ styles.backdrop } href="#close">
				<div></div>
			</a>
		</div>
	);
}