
import { useAuth } from '../../../hooks/useAuth';
import './index.scss';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const handleExit = () => {
        logout();
        navigate('/');
    };

    return (
       <button className="btn exit" onClick={handleExit}>
        Exit
      </button>
    );
}

export default LogoutButton