import React from "react";
import Layout from "../components/Layout";

export default function Post({ pageContext: { post } }) {
  return (
    <Layout>
      <h1>Post Detail Page</h1>
      <p>ID: {post.id}</p>
      <p>Title: {post.title}</p>
      <p>Content: {post.body}</p>
    </Layout>
  );
}
