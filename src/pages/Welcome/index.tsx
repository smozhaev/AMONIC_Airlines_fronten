import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const WelcomePage: React.FC = () => {
  return (
    <div className="welcome-container">
      <header className="welcome-header">
        <h1>Welcome to AMONIC AIRLINES</h1>
      </header>
      <div className="welcome-content">
        <p>AMONIC Airlines operates offices in various countries and conducts flights worldwide. This information system, which is the core of the current project, has been designed to facilitate efficient interaction and management of operations within the company.</p>
        <Link to="/login" className="welcome-login-button">
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
