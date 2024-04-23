import './LogMenu.css';

function LoginMenu() {
  return (
    <div className="login-menu">
        <div className="login-card">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
                </div>
                <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
  );
}

export default LoginMenu;
