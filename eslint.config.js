// @ts-check
import antfu from "@antfu/eslint-config";

export default antfu({
  formatters: true,
  vue: {
    sfcBlocks: { blocks: { customBlocks: ["route"] } },
    overrides: {
      "vue/component-name-in-template-casing": [
        "error",
        "PascalCase",
        { registeredComponentsOnly: false },
      ],
      "vue/block-order": [
        "error",
        { order: ["script", "template", "style"] },
      ],
    },
  },
  stylistic: {
    quotes: "double",
    indent: 2,
    semi: true,
  },
  ignores: ["src/styles", "src/assets"],
}, {
  rules: {
    "style/brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "unused-imports/no-unused-vars": "off",
    "no-console": "off",
    "curly": ["error", "multi-line"],
    "jsdoc/require-returns-description": "off",
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 2,
        },
        ObjectPattern: { multiline: true },
        ImportDeclaration: {
          multiline: true,
          minProperties: 2,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 2,
        },
      },
    ],
  },
});
