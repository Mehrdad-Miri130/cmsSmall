import { UseMutationResult } from '@tanstack/react-query';
import useMutationHook from 'core/hooks/masterQuery/useMutationHook';
import api from 'core/services/fetch-api/useApi';
import useEndPointUrl from 'core/hooks/useEndPointUrl';
import { useDispatch } from 'react-redux';
import { setAdmin, setAuthenticated } from 'core/store/slice/mainInfo/mainInfoSlice';
import Cookies from 'js-cookie';

export const useLoginQuery = () => {
	const { endPointUrls } = useEndPointUrl();
	const dispatch = useDispatch();

	return useMutationHook([endPointUrls.LOGIN], (data) => api.post(endPointUrls.LOGIN, data), {
		onSuccess: (res: any) => {
			Cookies.set('isAuth', 'true');
			Cookies.set('role', res?.data?.role);
			dispatch(setAuthenticated(true));
			dispatch(setAdmin(res?.data?.role === 'admin'));
		},
	}) as UseMutationResult;
};
