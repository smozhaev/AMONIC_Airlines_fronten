import React from 'react';
import { useLocation } from 'react-router-dom';
import './index.scss';
import LogoutButton from '../Buttons/LogutButton';
import AdminHeader from '../AdminHeader';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="header-container">
      {location.pathname === '/admin_menu' && (
        <div className="header-buttons">
          <AdminHeader/>
        </div>
      )}
      {location.pathname === '/menu' && (
        <div className="header-buttons">
          <LogoutButton />
        </div>
      )}
    </header>
  );
};

export default Header;
