import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Seo from "../components/Seo";

export default function About({ data }) {
  console.log(data.site.siteMetadata.title);
  return (
    <Layout>
      <Seo title="About me" description="My programming methodology" />
      <h1 className="header-title">{data.site.siteMetadata.title}</h1>
      <span>{data.site.siteMetadata.body.content}</span>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        body {
          content
        }
      }
    }
  }
`;
