# parcel-bundler + express + browsersync proxy example

parcel-bundler browsersync server proxy example

parcel-bundler's dev server does not provide a server proxy for the rest api.

so, I bundled through parcel-bundler using js files and use browser-sync and proxy middleware to communicate with the REST api server.

## Prerequisites

fork github repo.
```bash
git clone https://github.com/trustyoo86/parcel-browsersync-proxy-example.git
```

Run npm install or yarn install in the project folder
```bash
# npm
npm install
# yarn
yarn install
```

## usage

### development mode

Run the express server at the terminal
```bash
# npm
npm run server
# yarn
yarn server
```

Run the dev mode of parcel-bundler another termnial
```bash
# npm
npm run dev
# yarn
yarn dev
```

### production mode

Run the express server at the terminal with NODE_ENV=production
``` bash
# npm
npm run prod
# yarn
yarn prod
```
