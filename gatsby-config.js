require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const rss = require("./utils/rss-options");

module.exports = {
  siteMetadata: {
    title: "Popescu Daniel",
    description: "Hire this man!",
    siteUrl: process.env.BASE_URL,
    body: {
      content: "SEO Content",
    },
  },
  plugins: [
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-feed",
      options: rss.options,
    },
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              aliases: {
                es6: "js",
              },
              showLineNumbers: true,
            },
          },
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/coding-icon-png.png",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dev Blog Popescu Daniel`,
        short_name: `Dev Blog`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "src/images/coding-icon-png.png",
        icons: [
          {
            src: "src/images/maskable_icon.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "src/images/coding-icon-png.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    "gatsby-plugin-offline",
  ],
};
