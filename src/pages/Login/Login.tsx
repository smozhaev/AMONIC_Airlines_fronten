import React from 'react';
import './index.scss';
const Login = () => {
    return (
        <div className="login-container">
            <h2>AMONIC Airlines</h2>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter your username" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" />

                <div>
                    <input type="button" value="Login" />
                    <input type="button" value="Exit" />
                </div>
            </form>
        </div>
    );
};

export default Login;
