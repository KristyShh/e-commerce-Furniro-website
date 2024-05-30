import React from 'react';
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { setAuth, setName, setPassword, setEmail } from "../../redux toolkit/auth/slice";
import { useNavigate, useLocation } from 'react-router-dom';
import './loginPage.scss';
import LogoutButton from '../logoutButton/logoutButton';

export const LoginPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.state?.from?.pathname || '/blog';

    const { Name, password, email } = useAppSelector((state) => state.auth);

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setName(event.target.value));
    };

    const onPassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPassword(event.target.value));
    };
    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setEmail(event.target.value));
    }

    const onSubmitButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (Name && password && email) {
            dispatch(setAuth( )); 
            navigate(path, { replace: true });
        } else {
            alert("Please fill all fields Name and Password, Email.");
        }
    }
    return (
   
<div className="login-page">
            <form>
                <input
               
                    type="text"
                    placeholder="Name"
                    value={Name}
                    onChange={onNameChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onPassChange}
                />
                <input
                type="email"
                placeholder="Email"
                value = {email}
                onChange = {onEmailChange}
                />
                <button type="submit" onClick={onSubmitButton}  >Login </button>
                <div className="logout-button">
                <LogoutButton />
                </div>
            </form>
        </div>
    );
};