import { UseMutationResult, useQueryClient } from '@tanstack/react-query';
import useMutationHook from 'core/hooks/masterQuery/useMutationHook';
import api from 'core/services/fetch-api/useApi';
import useEndPointUrl from 'core/hooks/useEndPointUrl';

export const useMyBlogUpdateQuery = () => {
	const { endPointUrls } = useEndPointUrl();
	const queryClient = useQueryClient();

	return useMutationHook([endPointUrls.SINGLE_BLOG(), 'create'], (data: any) => api.patch(endPointUrls.SINGLE_BLOG(data?.id), data?.payload), {
		onSuccess: () => {
			queryClient.invalidateQueries([endPointUrls.MY_BLOGS]);
		},
	}) as UseMutationResult;
};
