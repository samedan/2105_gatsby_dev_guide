import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import FeaturedBlog from "../components/FeaturedBlog";
import BlogListing from "../components/BlogListing";

export default function IndexPage({ data }) {
  const { nodes } = data.allMarkdownRemark;
  return (
    <Layout>
      <div className="columns">
        {nodes.slice(0, 2).map((node) => (
          <div className="column" key={node.id}>
            <FeaturedBlog blog={node} />
          </div>
        ))}
      </div>
      <div className="p-4">
        <BlogListing blogs={nodes} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 5
      sort: { order: ASC, fields: frontmatter___date }
    ) {
      nodes {
        id
        frontmatter {
          title
          author
          date(formatString: "DD MMMM, YYYY")
          slug
          subtitle
        }
      }
    }
  }
`;
