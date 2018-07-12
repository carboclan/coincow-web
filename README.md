# coincow-web

> A Vue.js project

## Prepare
```base
git clone --recursive https://github.com/carboclan/coincow-web.git
cd coincow-contracts
npm i
truffle dev
migrate --reset
```

In meta mask, connect to custom rpc http://localhost:9545, import a private key displayed in truffle console.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
