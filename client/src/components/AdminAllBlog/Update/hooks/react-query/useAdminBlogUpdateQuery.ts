import { UseMutationResult, useQueryClient } from '@tanstack/react-query';
import useMutationHook from 'core/hooks/masterQuery/useMutationHook';
import api from 'core/services/fetch-api/useApi';
import useEndPointUrl from 'core/hooks/useEndPointUrl';

export const useAdminBlogUpdateQuery = () => {
	const { endPointUrls } = useEndPointUrl();
	const queryClient = useQueryClient();

	return useMutationHook([endPointUrls.BLOGS_ADMIN(), 'create'], (data: any) => api.patch(endPointUrls.BLOGS_ADMIN(data?.id), data?.payload), {
		onSuccess: () => {
			queryClient.invalidateQueries([endPointUrls.BLOGS_ADMIN()]);
		},
	}) as UseMutationResult;
};
