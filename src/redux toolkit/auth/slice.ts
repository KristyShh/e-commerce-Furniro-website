import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegistrationState {
    Name: string;
    password: string;
    email: string;
    isAuth: boolean;
}

const initialState: RegistrationState = {
    Name: '',
    password: '',
    email: '',
    isAuth: false
};

export const registrationFormSlice = createSlice({
    name: 'registrationForm',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.Name = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setAuth: (state) => {
            // Проверяем, заполнены ли поля Name и password
            if (state.Name && state.password && state.email) {
                state.isAuth = true;
            }
        },
        logout: (state) => {
            state.isAuth = false;
            state.Name = '';
            state.password = '';
            state.email = '';
        },
    }
});

export const { setName, setPassword, setEmail, setAuth, logout } = registrationFormSlice.actions;

export default registrationFormSlice.reducer;


      