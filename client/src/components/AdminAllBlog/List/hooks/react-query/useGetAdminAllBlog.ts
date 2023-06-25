import { UseQueryResult } from '@tanstack/react-query';
import useQueryHook from 'core/hooks/masterQuery/useQueryHook';
import api from 'core/services/fetch-api/useApi';
import useEndPointUrl from 'core/hooks/useEndPointUrl';
import { IBlogList } from 'core/types/blogType';

export const useGetAdminAllBlog = () => {
	// hooks
	const { endPointUrls } = useEndPointUrl();

	return useQueryHook([endPointUrls.BLOGS_ADMIN()], () => api.get(endPointUrls.BLOGS_ADMIN()), {
		select: (res: any) => res.data,
	}) as UseQueryResult<IBlogList, Error>;
};
