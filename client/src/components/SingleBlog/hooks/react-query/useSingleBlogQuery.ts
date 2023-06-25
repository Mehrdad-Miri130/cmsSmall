import { UseQueryResult } from '@tanstack/react-query';
import useQueryHook from 'core/hooks/masterQuery/useQueryHook';
import api from 'core/services/fetch-api/useApi';
import useEndPointUrl from 'core/hooks/useEndPointUrl';
import { IBlogDetail } from 'core/types/blogType';
import { useSelector } from 'react-redux';
import { RootState } from 'core/store';

export const useSingleBlogQuery = () => {
	// hooks
	const { endPointUrls } = useEndPointUrl();

	// store
	const { blogId } = useSelector((store: RootState) => store.mainInfoStore);

	return useQueryHook([endPointUrls.SINGLE_BLOG, blogId], () => api.get(endPointUrls.SINGLE_BLOG(blogId || undefined)), {
		select: (res: any) => res.data,
	}) as UseQueryResult<IBlogDetail, Error>;
};
