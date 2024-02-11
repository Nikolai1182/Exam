const React = require("react");

module.exports = function Navbar({ user }) {
  console.log("user navbar", user);
  return (
    <div className="navbar">
      <h3 className="navbar-home p-nav">
        <a href="/">Главная</a>
      </h3>
      {user ? (
        <>
          <a href="/profile">
            <h3 className="navbar-home name">{user.login}</h3>
          </a>
          <a className="navbar-home" href="/add">
            Создать Что нибудь
          </a>
          <a className="navbar-home" href="/users/logout">
            Выйти
          </a>
        </>
      ) : (
        <>
          <a className="navbar-home " href="/register">
            Register
          </a>
          <a className="navbar-home" href="/login">
            Login
          </a>
        </>
      )}
    </div>
  );
};
