module.exports = {
  rules: {
    "react-native-shadow-color": {
      meta: {
        type: "problem",
        docs: {
          description: 'Disallow the use of "shadowColor"',
          category: "Best Practices",
          recommended: true,
        },
        fixable: null,
      },
      create: function (context) {
        return {
          MemberExpression: function (node) {
            if (
              node.property.type === "Identifier" &&
              node.property.name === "shadowColor"
            ) {
              context.report({
                node,
                message: 'Avoid using "shadowColor"',
              });
            }
          },
        };
      },
    },
  },
};
