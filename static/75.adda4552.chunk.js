webpackJsonp([75],{2149:function(e,n,t){var o=t(0),s=t(94),a=t(465).PageRenderer;a.__esModule&&(a=a.default);var i=s({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(2225)}},componentWillMount:function(){},render:function(){return o.createElement(a,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,e.exports=i},2225:function(e,n){e.exports='This is where the magic happens.\n\n## How to use\n\n1. Make sure a `.npmrc` file is present in your repo, which should contain something like: `@faithlife:registry=http://npm.faithlife.io`\n1. Run `yarn add @faithlife/styled-ui styled-components@4`.  **Make sure to add styled-ui as a peer dependency to your project if you are hosting it within Faithlife.com (see below)**.\n1. Use [webpack-node-externals](https://www.npmjs.com/package/webpack-node-externals) so your bundle does not include styled-ui directly\n1. Ship it!\n\n## Guidelines for use\nUse the className prop to control margins, font appearance, etc on an imported component. Prefer not to add style hacks that override the contents of the component (such as a style that uses a pseudo selector to display additional content), since the underlying styles could change in a future version update. If you need this level of customization, copy the component and styles into your own project and continue on from there.\n\nIf you\'re using the included Bootstrap components, you can use the [spacing utilities](https://getbootstrap.com/docs/4.1/utilities/spacing/) in the className prop.\n\n## How to contribute\n\n1. Follow the directions on the [Github repo](https://github.com/faithlife/styled-ui)\n\n## Why are peer dependencies necessary for hosted components?\n\nSome third party components within styled-ui depend on a global stylesheet to be loaded on the page. Because these styles are not scoped, we need to ensure the components and the loaded global styles on the page stay in sync. Without using peer dependencies, styled-ui components might reference styles on the page that have not been loaded properly.\n\n`styled-components` also requires that only one instance is running within an app. See the [FAQs](https://www.styled-components.com/docs/faqs) for more information\n\n## If you are writing a library or integration\n\n1. Use [webpack-node-externals](https://www.npmjs.com/package/webpack-node-externals)\n\nIf you are writing a package that will be required by someone else, you should exclude your `node_modules` from your Webpack bundle. This webpack plugin makes it easy.\nEven if you have correctly set `styled-ui` and `styled-components` as `peerDependencies`, you must still exclude `node_modules`. Webpack does not differentiate between "dependencies" and "peerDependencies" in your `package.json`.\n'}});
//# sourceMappingURL=75.adda4552.chunk.js.map