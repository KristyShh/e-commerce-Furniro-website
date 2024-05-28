// LogoutButton.tsx
import React from 'react';
import { useAppDispatch } from '../../hooks/useRedux';
import { logout } from '../../redux toolkit/auth/slice';
import { useNavigate } from 'react-router-dom';

const LogoutButton: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        alert('You have been logged out.'); 
        dispatch(logout());
        navigate('/login', { replace: true });
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
