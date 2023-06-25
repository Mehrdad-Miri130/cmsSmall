import { UseMutationResult, useQueryClient } from '@tanstack/react-query';
import useMutationHook from 'core/hooks/masterQuery/useMutationHook';
import api from 'core/services/fetch-api/useApi';
import useEndPointUrl from 'core/hooks/useEndPointUrl';

export const useAdminBlogCreateQuery = () => {
	const { endPointUrls } = useEndPointUrl();
	const queryClient = useQueryClient();

	return useMutationHook([endPointUrls.BLOGS_ADMIN(), 'create'], (data) => api.post(endPointUrls.BLOGS_ADMIN(), data), {
		onSuccess: () => {
			queryClient.invalidateQueries([endPointUrls.BLOGS_ADMIN()]);
		},
	}) as UseMutationResult;
};
