require("@babel/register");

const React = require("react");

const ReactDOMServer = require("react-dom/server");

const renderTemplate = (Component, props, res) => {
  const reactEl = React.createElement(Component, props);
  const html = ReactDOMServer.renderToStaticMarkup(reactEl);
  res.write("<!DOCTYPE html>");
  res.end(html);
};

module.exports = renderTemplate;
