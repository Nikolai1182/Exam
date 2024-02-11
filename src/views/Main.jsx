const React = require("react");
const Layout = require("./Layout");

module.exports = function Main({ user }) {
  console.log("сессия в Main", user);
  return (
    <>
      <Layout user={user}>
        <h1>Main</h1>
      </Layout>
    </>
  );
};
