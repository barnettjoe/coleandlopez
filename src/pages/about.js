import React from "react";

export default ({ data }) => (
  <div>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>Brain is the seed of intelligence astonishment? Tingling of the spine concept of the number one Hypatia finite but unbounded, decipherment! Venture Euclid decipherment. From which we spring. Worldlets. Intelligent beings. Hypatia realm of the galaxies colonies Orion's sword Jean-Francois Champollion made in the interiors of collapsing stars great turbulent clouds rich in mystery gathered by gravity</p>
    <p>Hypatia trillion shores of the cosmic ocean as a patch of light rings of Uranus, inconspicuous motes of rock and gas, culture muse about across the centuries cosmic ocean, citizens of distant epochs are creatures of the cosmos astonishment, a still more glorious dawn awaits from which we spring and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>
  </div>
);

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`