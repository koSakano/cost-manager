const path = require('path');

const buildCommand = (filenames) => {
  const files = filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' ');

  return [`prettier --write ${files}`, `eslint --max-warnings=0 --fix ${files}`];
}

module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': buildCommand,
};
