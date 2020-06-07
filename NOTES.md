# LEARNING NOTES TO WEBPACK

1. @babel/core - transform es6 code to es5
2. babel-loader - package to transform es6 to es5 using babel and webpack
3. @babel/preset-env - extending @babel/core, contains common bundles of plugins
4. style-loader - Adds CSS to the DOM by injecting a ```<style>``` tag
5. css-loader - The css-loader interprets @import and url() like import/require() and will resolve them.
6. ```path.resolve()``` - resolve an absolute path to current directory (```__dirname```)

- Babel Plugins
  - `@babel/plugin-transform-runtime` - Reduces code duplication by extracting Babel helpers into shared modules [Read More](https://bit.ly/39gxHWQ)
  - `@babel/plugin-proposal-class-properties` - Enables support for the public instance [field syntax proposal](https://bit.ly/35UuOch), for writing class-based React components
  - `@babel/plugin-transform-react-inline-elements` -  evaluates `React.createElement` during compilation and inlines the result [Read More](https://bit.ly/398WP1T)
  - `@babel/plugin-transform-react-constant-elements` - extracts static React elements as constants [Read More](https://bit.ly/354dfW8)

## Webpack TS + React Support
- [TS Loader](https://github.com/TypeStrong/ts-loader)
- [TS Webpack Plugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin)
- [TS + React + Webpack](https://www.smashingmagazine.com/2020/05/typescript-modern-react-projects-webpack-babel/)