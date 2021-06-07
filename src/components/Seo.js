import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export default function Seo({ title, description, meta = [] }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const defaultTitle = title
    ? `${title} | ${site.siteMetadata?.title}`
    : site.siteMetadata?.title;
  const defaultDescription = description || site.siteMetadata?.description;

  // add og:url
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={defaultTitle}
      meta={[
        {
          name: "description",
          content: defaultDescription,
        },
        {
          name: "og:title",
          content: defaultTitle,
        },
        {
          name: "og:description",
          content: defaultDescription,
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:image",
          content:
            "https://www.agence-adelanto.fr/images/web/adelanto/2104_barometre_marketing/image1.jpg",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: "Popescu Daniel",
        },
        {
          name: "twitter:title",
          content: defaultTitle,
        },
        {
          name: "twitter:description",
          content: defaultDescription,
        },
        {
          name: "twitter:image",
          content:
            "https://www.agence-adelanto.fr/images/web/adelanto/2104_barometre_marketing/image1.jpg",
        },
      ].concat(meta)}
    />
  );
}
