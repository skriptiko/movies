module.exports = {
  "**/*.{ts?(x),js?(x)}": () => ["npm run lint"],
  "**/*.ts?(x)": () => ["npm run typecheck"],
  "**/*.{ts?(x),js,?(s)css,md}": () => ["npm run format"],
};
