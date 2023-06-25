import { UseMutationResult } from '@tanstack/react-query';
import useMutationHook from 'core/hooks/masterQuery/useMutationHook';
import api from 'core/services/fetch-api/useApi';
import useEndPointUrl from 'core/hooks/useEndPointUrl';
import { useDispatch } from 'react-redux';
import {setAdmin, setAuthenticated} from 'core/store/slice/mainInfo/mainInfoSlice';
import Cookies from 'js-cookie';

export const useLogoutQuery = () => {
	const { endPointUrls } = useEndPointUrl();
	const dispatch = useDispatch();

	return useMutationHook([endPointUrls.CURRENT_USER], () => api.delete(endPointUrls.CURRENT_USER), {
		onSuccess: () => {
			Cookies.remove('isAuth');
			Cookies.remove('role');
			dispatch(setAuthenticated(false));
			dispatch(setAdmin(false));
		},
	}) as UseMutationResult;
};
