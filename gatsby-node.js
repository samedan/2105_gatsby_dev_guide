const axios = require("axios");

exports.createPages = async ({ actions: { createPage } }) => {
  // fetch Data - unstructurized data pulled from API
  // benefits: familiar way
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const posts = res.data;

  posts.forEach((post) => {
    createPage({
      path: `/posts/${post.id}`,
      component: require.resolve("./src/templates/post.js"),
      context: { post: post },
    });
  });

  createPage({
    path: "/posts",
    component: require.resolve("./src/templates/posts.js"),
    context: { posts: posts },
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type PostContent {
      title: String
      text: String
    }

    type PostJson {
      id: ID
      title: String
      body: String!
      wordCount: Int
      isActive: Boolean
      rating: Float
      tags: [String!]
      content: PostContent
    }
    input TitleFilter {
      eq: String
      in: String
    }
  `;

  createTypes(typeDefs);
};

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    Query: {
      allPost: {
        type: ["PostJson"],
        args: {
          filter: `input PostFilterInput {title: TitleFilter}`,
          limit: "Int",
        },
        resolve(source, { filter }, context, info) {
          const { title } = filter || {};
          const { eq } = title || {};
          // console.log("filter", filter);
          const posts = [
            {
              id: "1",
              title: "hELLO  WORLD",
              body: "Cutom text",
              wordCount: 200,
              isActive: true,
              rating: 4.23,
              tags: ["programming", "Dev", "React"],
              content: {
                text: "Content",
                title: "Title Context",
              },
            },
            {
              id: "2",
              title: "Yo mama",
              body: "Not null",
              wordCount: 300,
              isActive: false,
              rating: 2.3,
              content: {
                text: "Content",
                title: "Title Context",
              },
            },
          ];

          if (eq) {
            return posts.filter((post) => post.title === eq);
          }

          return posts;
        },
      },
    },
  };

  createResolvers(resolvers);
};
