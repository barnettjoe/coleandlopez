import React from "react";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import Banner from "../components/Banner/Banner"

export default ({ data }) => {
	function getNode(title) {
		var edge = data.allMarkdownRemark.edges.find(function(edge) {
			return (edge.node.frontmatter.title === title)
		});

		return(edge.node);
	}
	return (
		<div>
		  <Header title={data.site.siteMetadata.title}/>
		    <Banner title={getNode("About Us").frontmatter.title} img={getNode("About Us").frontmatter.bannerImage} />
		    <Section node={getNode("About Us")} />
		    <Banner title={getNode("Contact").frontmatter.title} img={getNode("Contact").frontmatter.bannerImage} />
		    <Section node={getNode("Contact")} />
		</div>
	);
};

export const query = graphql`
  query IndexQuery {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          bannerImage
        }
        html
      }
    }
  }
}`;