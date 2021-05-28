const axios = require("axios");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  // fetch Data - unstructurized data pulled from API
  // benefits: familiar way
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const posts = res.data;

  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);
  const { nodes } = result.data.allMarkdownRemark;
  nodes.forEach((node) => {
    createPage({
      path: node.frontmatter.slug,
      component: require.resolve("./src/templates/blog.js"),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });

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

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const posts = res.data;

  posts.forEach((post) => {
    const node = {
      title: post.title,
      body: post.body,
      // Node ID must be globally unique
      id: createNodeId(`Post-${post.id}`),
      // id: `Post-${post.id}`,
      // ID to the parent Node
      parent: null,
      // ID to the children Node
      children: [],
      // META DAta = internal fields are not ussualy interesting for teh consumers
      internal: {
        // globally unique node type
        type: "Post",
        // hash or Short Digital Summary
        contentDigest: createContentDigest(post),
        // content exposing raw content of this node
        content: JSON.stringify(post),
      },
    };
    actions.createNode(node);
  });
};

// SLUG creation
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   // console.log(node.internal.type);
//   if (node.internal.type === "MarkdownRemark") {
//     const slug = createFilePath({
//       node,
//       getNode,
//       // extracts the Name of Slug from /blogs/learn-program-js/
//       basePath: "blogs",
//     });
//     // console.log(slug);

//     actions.createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     });
//   }
// };
