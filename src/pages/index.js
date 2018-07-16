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

	function base(path) {
		return(path.split(/[\\/]/).pop());
	}

	var sections = data.allMarkdownRemark.edges.map(edge => edge.node);
	var images = data.allFile.edges.map(edge => edge.node);


	for (var i = 0; i < sections.length; i++) {
		var imgPath = sections[i].frontmatter.bannerImage;
		var bannerImageNode = images.find(image => image.relativePath === base(imgPath));
		sections[i].sizes = bannerImageNode.childImageSharp.sizes;
	}

	return (
		<div>
		  <Header title={data.site.siteMetadata.title}/>
		    { sections.map( function(section) {
		    	return(
				    <Section data={ section } key={ section.id } />
		    	);
		    }) }
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
  allFile(filter: {sourceInstanceName: {eq: "images"}}) {
   edges {
      node {
        relativePath
        childImageSharp {
		    sizes(maxWidth: 700) {
		      ...GatsbyImageSharpSizes
		    }
        }
      }
    }
  }
}
`;
