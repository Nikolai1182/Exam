const React = require("react");
const Layout = require("./Layout");

module.exports = function Profile({ user }) {
  console.log("сессия в профиле", user);
  return (
    <Layout user={user}>
      <div className="profile">Профиль</div>
    </Layout>
  );
};
