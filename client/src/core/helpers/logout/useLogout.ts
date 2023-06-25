import { useQueryClient } from '@tanstack/react-query';
import { setAdmin, setAuthenticated } from 'core/store/slice/mainInfo/mainInfoSlice';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';

const useLogout = () => {
	const dispatch = useDispatch();
	const queryClient = useQueryClient();

	const logout = () => {
		queryClient.clear();
		dispatch(setAuthenticated(false));
		dispatch(setAdmin(false));
		Cookies.remove('role');
		Cookies.remove('isAuth');
	};

	return { logout };
};

export default useLogout;
