import { UseQueryResult } from '@tanstack/react-query';
import useQueryHook from 'core/hooks/masterQuery/useQueryHook';
import api from 'core/services/fetch-api/useApi';
import useEndPointUrl from 'core/hooks/useEndPointUrl';
import { IUser } from 'core/types/userType';
import Cookies from 'js-cookie';
import { setAdmin, setUserInfo } from 'core/store/slice/mainInfo/mainInfoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'core/store';

export const useGetCurrentUser = () => {
	// hooks
	const { endPointUrls } = useEndPointUrl();
	const dispatch = useDispatch();

	// store
	const { isAuthenticated } = useSelector((store: RootState) => store.mainInfoStore);

	return useQueryHook([endPointUrls.CURRENT_USER], () => api.get(endPointUrls.CURRENT_USER), {
		select: (res: any) => res.data,
		onSuccess: (res: any) => {
			Cookies.set('role', res?.role);
			dispatch(setAdmin(res?.role === 'admin'));
			dispatch(setUserInfo(res));
		},
		enabled: isAuthenticated,
	}) as UseQueryResult<IUser, Error>;
};
