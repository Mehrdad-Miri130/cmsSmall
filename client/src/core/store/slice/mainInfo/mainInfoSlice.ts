import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { IUser } from 'core/types/userType';

const initialState: { apiCatcherFormErrors: any[]; isAuthenticated: boolean; isAdmin: boolean; userInfo: IUser | null; blogId: number | null } = {
	apiCatcherFormErrors: [],
	isAuthenticated: !!Cookies.get('isAuth'),
	isAdmin: Cookies.get('role') ? Cookies.get('role') === 'admin' : false,
	userInfo: null,
	blogId: null,
};

export const mainInfoSlice = createSlice({
	name: 'mainInfo',
	initialState: initialState,
	reducers: {
		setApiCatcherFormErrors: (state, { payload }) => {
			state.apiCatcherFormErrors = payload;
		},
		setAuthenticated: (state, { payload }) => {
			state.isAuthenticated = payload;
		},
		setAdmin: (state, { payload }) => {
			state.isAdmin = payload;
		},
		setUserInfo: (state, { payload }) => {
			state.userInfo = payload;
		},
		setBlogId: (state, { payload }) => {
			state.blogId = payload;
		},
	},
});

export const { setApiCatcherFormErrors, setAuthenticated, setAdmin, setUserInfo, setBlogId } = mainInfoSlice.actions;
export default mainInfoSlice.reducer;
