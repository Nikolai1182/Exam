const React = require("react");

const Layout = require("./Layout");

module.exports = function Login({ user }) {
  return (
    <Layout user={user}>
      <script defer src="/js/login.js" />
      <form
        action="/users/login"
        method="post"
        id="log-form"
        className="log-form"
      >
        <div className="login-card">
          <div className="login-input">
            <input
              placeholder="email"
              name="email"
              type="text"
              className="form-control"
            />
          </div>
          <div className="login-input">
            <input
              placeholder="password"
              name="password"
              type="password"
              className="form-control"
            />
          </div>
          <h3 className="message" />
          <button type="submit" className="btn btn-primary">
            Войти
          </button>
        </div>
      </form>
    </Layout>
  );
};
