module.exports = {
  siteMetadata: {
    title: "Popescu Daniel",
    description: "Hire this man!",
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
  ],
};
