webpackJsonp([32],{2152:function(t,e,n){var o=n(0),a=n(94),i=n(465).PageRenderer;i.__esModule&&(i=i.default);var r=a({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(2228)}},componentWillMount:function(){},render:function(){return o.createElement(i,Object.assign({},this.props,{content:this.state.content}))}});r.__catalog_loader__=!0,t.exports=r},2228:function(t,e){t.exports='`Stack` is a primitive layout component that can be used to evenly space vertically-stacked child elements. It behaves just like `Box`, but it also applies margins to direct children.\n\n### Example\n\n```react\nshowSource: true\n---\n<Stack spacing={[4, 6]}>\n\t<Box height="100px" bg="purple2" />\n\t<Box height="120px" bg="purple2" />\n\t<Stack spacing={3}>\n\t\t<Box height="100px" bg="green2" />\n\t\t<Box height="100px" bg="green2" />\n\t</Stack>\n\t<Box height="80px" bg="purple2" />\n</Stack>\n```\n\n### Horizontal Stacks\n\nStyled-UI currently does not provide a horizontal stack. Because most UIs are width-constrained, horizontal stacks needs to address wrapping and flexing needs, which vary significantly. (The vertical `Stack` simply spaces out block elements with `margin`, allowing content to grow and overflow/scroll vertically as needed).\n\nThere are many ways to stack content horizontally. Here are some options, depending on your specific needs.\n\n#### Grid\n\nCSS grid can be a convenient way to space out stacks of elements because the built-in `gap` support means not having to mess with margins or other spacing mechanisms. Because grid is designed to lay out... grids... this isn\'t a good solution when you need to wrap variable-width elements onto additional lines.\n\n```react\nshowSource: true\n---\n<Stack spacing={5}>\n\t<Paragraph>Evenly space out equally-sized elements that flex to fill available space</Paragraph>\n\t<Box display="grid" gridAutoFlow="column" gridGap={4}>\n\t\t<Box height="50px" bg="purple2" />\n\t\t<Box height="50px" bg="purple2" />\n\t\t<Box height="50px" bg="purple2" />\n\t</Box>\n</Stack>\n```\n\n```react\nshowSource: true\n---\n<Stack spacing={5}>\n\t<Paragraph>Evenly space out elements that are sized based on content</Paragraph>\n\t<Box display="grid" gridAutoFlow="column" gridAutoColumns="max-content" gridGap={4}>\n\t\t<Box height="50px" bg="purple2">Short content.</Box>\n\t\t<Box height="50px" bg="purple2">This is some longer content.</Box>\n\t\t<Box height="50px" bg="purple2">Boop.</Box>\n\t</Box>\n</Stack>\n```\n\n#### Flexbox\n\nAn easy to way to switch the flow of block elements from vertical to horizontal is to create a flexbox context. Flexbox doesn\'t help you out much with the spacing _between_ flex items, so you\'ll need to leverage something like `margin` if you need that.\n\n```react\nshowSource: true\n---\n<Stack spacing={5}>\n\t<Paragraph>Stack block elements horizontally. This won\'t wrap, and if you run out of horizontal space, items will flex shrink by default.</Paragraph>\n\t<Box display="flex">\n\t\t<Box height="50px" bg="blue2">Short content.</Box>\n\t\t<Box height="50px" bg="purple2">This is some longer content.</Box>\n\t\t<Box height="50px" bg="green2">Boop.</Box>\n\t</Box>\n</Stack>\n```\n\n```react\nshowSource: true\n---\n<Stack spacing={5}>\n\t<Paragraph>Stack block elements horizontally, but wrap when there\'s not enough horizontal space.</Paragraph>\n\t<Box display="flex" flexWrap="wrap" maxWidth="500px">\n\t\t<Box height="50px" bg="blue2">Short content.</Box>\n\t\t<Box height="50px" bg="purple2">This is some longer content.</Box>\n\t\t<Box height="50px" bg="green2">Boop.</Box>\n\t\t<Box height="50px" bg="blue2">Short content.</Box>\n\t\t<Box height="50px" bg="purple2">This is some longer content.</Box>\n\t\t<Box height="50px" bg="green2">Boop.</Box>\n\t\t<Box height="50px" bg="blue2">Short content.</Box>\n\t\t<Box height="50px" bg="purple2">This is some longer content.</Box>\n\t\t<Box height="50px" bg="green2">Boop.</Box>\n\t</Box>\n</Stack>\n```\n\n`margin` is a reasonable choice for applying spacing to elements in a flexbox context. You can follow the strategy used by `Stack` to create your own `HorizontalStack` with `spacing` prop that leverages theme data:\n\n```\nconst HorizontalStack = styled(Box)`\n\tdisplay: flex;\n\n\t> * + * {\n\t\t${system({\n\t\t\tspacing: {\n\t\t\t\tproperty: \'margin-left\',\n\t\t\t\tscale: \'space\',\n\t\t\t},\n\t\t})}\n\t}\n`;\n```\n'}});
//# sourceMappingURL=32.651500a9.chunk.js.map