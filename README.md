# mxgraph-javascript-example-bundled-with-rollup

Example of javascript application using the mxGraph npm package and bundled with Rollup


Created from the [rollup-starter-app](https://github.com/rollup/rollup-starter-app) template, commit [3a67308](https://github.com/rollup/rollup-starter-app/tree/3a67308dc65f2ccd9cbc3e2ce5e3144c304ab1e9)


## Getting started

Clone this repository and install its dependencies (tested with Node 12):

```bash
git clone https://github.com/tbouffard/mxgraph-javascript-example-bundled-with-rollup.git
cd mxgraph-javascript-example-bundled-with-rollup
npm install
```

The `public/index.html` file contains a `<script src='bundle.js'>` tag, which means we need to create `public/bundle.js`.
The `rollup.config.js` file tells Rollup how to create this bundle, starting with `src/main.js` and including all its dependencies,
including `mxGraph`.

`npm run build` builds the application to `public/bundle.js`, along with a sourcemap file for debugging.

`npm start` launches a server, using [serve](https://github.com/zeit/serve). Navigate to [localhost:3000](http://localhost:3000).

`npm run watch` will continually rebuild the application as your source files change.

`npm run dev` will run `npm start` and `npm run watch` in parallel.

## License

[MIT](LICENSE).
