import React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";

export default function Testing({ data }) {
  const posts = data.allPost.nodes;
  return (
    <Layout>
      <h1>Testing</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query {
    allPost {
      nodes {
        id
        title
        body
      }
    }
  }
`;
