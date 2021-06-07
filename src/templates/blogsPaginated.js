import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import BlogListing from "../components/BlogListing";
import Seo from "../components/Seo";

export default function BlogsPaginated({ pageContext, data }) {
  const { currentPage, numOfPages } = pageContext;
  const { nodes } = data.allMarkdownRemark;

  const isFirstPage = currentPage === 1; // Boolean
  const isLastPage = currentPage === numOfPages; // Boolean

  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <Layout>
      <Seo
        title="Latest posts"
        description="Fresh codespace blogs about technology"
      />
      <BlogListing blogs={nodes} />
      <hr />
      <Link
        disabled={isFirstPage}
        className="button is-small is-primary"
        to={`/blogs/${prevPage}`}
        rel="prev"
      >
        Previous
      </Link>
      <Link
        disabled={isLastPage}
        className="button is-small is-primary"
        to={`/blogs/${nextPage}`}
        rel="next"
      >
        Next
      </Link>
    </Layout>
  );
}

export const query = graphql`
  query BlogListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        frontmatter {
          subtitle
          title
          slug
          date(formatString: "DD MMMM, YYYY")
          author
        }
      }
    }
  }
`;
