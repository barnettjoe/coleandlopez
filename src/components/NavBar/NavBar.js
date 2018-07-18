import React from "react";
import Scrollspy from 'react-scrollspy'
import Scroll from '../Scroll'
import styles from "./styles.module.css";
import camera from "../../../static/assets/camera.svg";

export default function( {children} ) {
	return(
		<div>
			<div className={styles.nav}>
				<ul className={styles.ul}>
					<li className={styles.li}>
		                <Scroll type="id" element="top">
							<a className={styles.link} href="#top">
								TOP
							</a>
		                </Scroll>
					</li>

					<li className={styles.li}>
		                <Scroll type="id" element="About Us">
							<a className={styles.link} href="#About Us">
								About Us
							</a>
		                </Scroll>
					</li>


					<li className={styles.li}>
		                <Scroll type="id" element="Portfolio">
							<a className={styles.link} href="#">
								Portfolio
							</a>
		                </Scroll>
					</li>


					<li className={styles.li}>
		                <Scroll type="id" element="Contact">
							<a className={styles.link} href="#">
								Contact
							</a>
		                </Scroll>
					</li>
				</ul>
			</div>
		</div>
	);
}