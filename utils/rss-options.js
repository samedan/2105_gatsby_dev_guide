module.exports = {
  options: {
    feeds: [
      {
        serialize: ({ query: { allMarkdownRemark } }) => {
          return allMarkdownRemark.edges.map(({ node }) => {
            const url = `${process.env.BASE_URL}/blogs/${node.frontmatter.slug}/`;
            return Object.assign({}, node.frontmatter, {
              description: node.frontmatter.subtitle,
              date: node.frontmatter.date,
              image: node.frontmatter.coverImage,
              url: url,
              guid: url,
              custom_elements: [{ "content:encoded": node.html }],
            });
          });
        },
        query: `
          {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] },
            ) {
              edges {
                node {
                  html
                  frontmatter {
                    title
                    subtitle
                    slug
                    date
                    coverImage
                  }
                }
              }
            }
          }
        `,
        output: "/rss.xml",
        title: "Dan Codes RSS Feed",
        // optional configuration to insert feed reference in pages:
        // if `string` is used, it will be used to create RegExp and then test if pathname of
        // current page satisfied this regular expression;
        // if not provided or `undefined`, all pages will have feed reference inserted
        match: "^/blogs/",
        // optional configuration to specify external rss feed, such as feedburner
        link: "https://feeds.feedburner.com/gatsby/blog",
      },
    ],
  },
};
