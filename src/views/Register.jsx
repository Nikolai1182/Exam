const React = require("react");

const Layout = require("./Layout");

module.exports = function Register({ user }) {
  console.log("сессия в регистре", user);
  return (
    <Layout user={user}>
      <script defer src="/js/register.js" />

      <form
        action="/users/register"
        method="post"
        id="reg-form"
        className="registration-form"
      >
        <div className="registration-card">
          <div className="registration-input">
            <input
              placeholder="login"
              name="login"
              type="text"
              className="form-control"
            />
          </div>
          <div className="registration-input">
            <input
              placeholder="email"
              name="email"
              type="text"
              className="form-control"
            />
          </div>
          <div className="registration-input">
            <input
              placeholder="password"
              name="password"
              type="password"
              className="form-control"
            />
          </div>
          <h3 className="message" />
          <button type="submit" className="btn btn-primary">
            Ok
          </button>
        </div>
      </form>
    </Layout>
  );
};
