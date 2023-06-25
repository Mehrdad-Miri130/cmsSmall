import { UseMutationResult, useQueryClient } from '@tanstack/react-query';
import useMutationHook from 'core/hooks/masterQuery/useMutationHook';
import api from 'core/services/fetch-api/useApi';
import useEndPointUrl from 'core/hooks/useEndPointUrl';

export const useMyBlogCreateQuery = () => {
	const { endPointUrls } = useEndPointUrl();
	const queryClient = useQueryClient();

	return useMutationHook([endPointUrls.ALL_BLOGS, 'create'], (data) => api.post(endPointUrls.ALL_BLOGS, data), {
		onSuccess: () => {
			queryClient.invalidateQueries([endPointUrls.MY_BLOGS]);
		},
	}) as UseMutationResult;
};
