/**
 * @type {import("@trivago/prettier-plugin-sort-imports").PrettierConfig}
 */
const config = {
  printWidth: 80,
  trailingComma: "es5",
  plugins: ["@trivago/prettier-plugin-sort-imports"],

  importOrder: ["<THIRD_PARTY_MODULES>", "^@/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

export default config;
