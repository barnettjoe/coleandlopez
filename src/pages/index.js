import React from "react";
import './reset.css';
import Parallax from "../components/Parallax/Parallax.js";
import ParallaxBaseLayer from "../components/ParallaxBaseLayer/ParallaxBaseLayer.js";
import ParallaxBackLayer from "../components/ParallaxBackLayer/ParallaxBackLayer.js";

export default function () {
	return (
		<Parallax>
			<ParallaxBaseLayer>
				<p>Lorem ipsum dolor amet celiac health goth food truck, photo booth meggings cliche shaman. Fashion axe fam franzen VHS hexagon ugh. Trust fund lumbersexual flexitarian post-ironic neutra occupy. Keytar vinyl tilde, hell of portland vape whatever quinoa cliche. Gentrify wolf hot chicken shabby chic snackwave. Poutine fingerstache single-origin coffee cardigan street art.</p>
			</ParallaxBaseLayer>
			<ParallaxBackLayer>
				<p>Marfa green juice tbh mixtape dreamcatcher. Art party gochujang man braid, tumblr health goth edison bulb offal man bun kogi. Single-origin coffee hot chicken hell of cold-pressed adaptogen, tacos forage 3 wolf moon hammock craft beer meh heirloom. Hell of truffaut chambray blue bottle snackwave literally banjo put a bird on it farm-to-table man bun. Art party live-edge before they sold out hella mixtape helvetica. Kickstarter hot chicken pop-up tote bag enamel pin, letterpress tumblr banjo taiyaki bicycle rights knausgaard.</p>
			</ParallaxBackLayer>
		</Parallax>
	);
}