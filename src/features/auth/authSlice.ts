import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store/store';

export interface Auth {
  accessToken?: string;
  user?: {
    email?: string;
    id: number;
    name?: string;
  };
}

interface AuthSliceProps {
  profileState: Auth;
  logged: boolean;
}

const initialState: AuthSliceProps = {
  profileState: {},
  logged: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<Auth>) => {
      state.profileState = action.payload;

      state.logged = true;
    },
    logoutUser: state => {
      state.profileState = {};

      state.logged = false;
    },
  },
});

export const getUserJwt = (state: RootState) =>
  state.auth.profileState.accessToken;

export const getUserInfo = (state: RootState) => state.auth.profileState.user;

export const userIsLogged = (state: RootState) => state.auth.logged;

export const {saveUser, logoutUser} = authSlice.actions;

export default authSlice.reducer;
