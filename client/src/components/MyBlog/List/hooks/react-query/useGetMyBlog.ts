import { UseQueryResult } from '@tanstack/react-query';
import useQueryHook from 'core/hooks/masterQuery/useQueryHook';
import api from 'core/services/fetch-api/useApi';
import useEndPointUrl from 'core/hooks/useEndPointUrl';
import { IBlogList } from 'core/types/blogType';

export const useGetMyBlog = () => {
	// hooks
	const { endPointUrls } = useEndPointUrl();

	return useQueryHook([endPointUrls.MY_BLOGS], () => api.get(endPointUrls.MY_BLOGS), {
		select: (res: any) => res.data,
	}) as UseQueryResult<IBlogList, Error>;
};
