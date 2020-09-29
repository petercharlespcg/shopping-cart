# Vuex for Everyone
https://vueschool.io/courses/vuex-for-everyone

September 15, 2020
3:43 PM

petercharlespcg / shopping-cart

• Instance Lifecycle Hooks
Vue documentation on computed properties vs. watchers



C:\Users\s7608130\source\javascript\vue>vue init vueschool/webpack-template shopping-cart
  Command vue init requires a global addon to be installed.
  Please run yarn global add @vue/cli-init and try again.
npm install -g @vue/cli-init # may need to sign out 
vue init vueschool/webpack-template shopping-cart
C:\Users\s7608130\source\javascript\vue>vue init vueschool/webpack-template shopping-cart
? Project name shopping-cart
? Project description A Vue.js project
? Author Peterg <petercharles.ca@gmail.com>
? Vue build runtime
? Install vue-router? No
? Use ESLint to lint your code? No
? Setup unit tests with Karma + Mocha? No
? Setup e2e tests with Nightwatch? No

cd shopping-cart
yarn
vuex/examples/shopping-cart/api/shop.js
yarn add vuex

[Vue warn]: Avoid using non-primitive value as key, use string/number value instead
simply avoid the use of :key in your v-for.
      <li v-for="product in products">{{product.title}} - {{product.price}}</li>
or use unique primitive value as key
      <li v-for="(product, idx) in products" v-bind:key="idx">{{product.title}} - {{product.price}}</li>

# shopping-cart

> A Vue.js project for vuex

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
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
