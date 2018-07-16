import React from "react";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";


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
		    <Section node={getNode("About Us")} />
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
        }
        html
      }
    }
  }
}`;