module.exports = {
  siteMetadata: {
    title: "Popescu Daniel",
    body: {
      content: "SEO Content",
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    "gatsby-transformer-remark",
  ],
};
