import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

export default function Markdown({ data }) {
  const { totalCount, nodes } = data.allMarkdownRemark;
  return (
    <Layout>
      <h1>Markdown</h1>
      <h4>{totalCount} posts on this blog</h4>
      {nodes.map(({ id, fields, frontmatter, excerpt }) => (
        <div key={id}>
          <h3>
            {frontmatter.title}
            <span>- {frontmatter.date}</span>
          </h3>
          <p>{excerpt}</p>
          <p>{frontmatter.slug}</p>
        </div>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      nodes {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          slug
        }
        excerpt
      }
    }
  }
`;