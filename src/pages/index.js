import React from "react";
import g from "glamorous";
import { rhythm } from "../utils/typography";
import Header from "../components/Header/Header";

export default ({ data }) => {
  return (
    <div>
      <Header title={data.site.siteMetadata.title}/>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <g.H3 marginBottom={rhythm(1 / 4)}>
            {node.frontmatter.title}{" "}
          </g.H3>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      ))}
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