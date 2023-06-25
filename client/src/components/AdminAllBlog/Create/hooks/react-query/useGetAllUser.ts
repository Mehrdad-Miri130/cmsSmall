import { UseQueryResult } from '@tanstack/react-query';
import useQueryHook from 'core/hooks/masterQuery/useQueryHook';
import api from 'core/services/fetch-api/useApi';
import useEndPointUrl from 'core/hooks/useEndPointUrl';
import { IAuthorList } from 'core/types/userType';

export const useGetAllUser = () => {
	// hooks
	const { endPointUrls } = useEndPointUrl();

	return useQueryHook([endPointUrls.ALL_USER], () => api.get(endPointUrls.ALL_USER), {
		select: (res: any) => res.data,
	}) as UseQueryResult<IAuthorList, Error>;
};
