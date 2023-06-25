import { UseMutationResult, useQueryClient } from '@tanstack/react-query';
import useMutationHook from 'core/hooks/masterQuery/useMutationHook';
import api from 'core/services/fetch-api/useApi';
import useEndPointUrl from 'core/hooks/useEndPointUrl';

export const useAdminBlogDeleteQuery = () => {
	const { endPointUrls } = useEndPointUrl();
	const queryClient = useQueryClient();

	return useMutationHook([endPointUrls.BLOGS_ADMIN, 'delete'], (data: any) => api.delete(endPointUrls.BLOGS_ADMIN(data?.id)), {
		onSuccess: () => {
			queryClient.invalidateQueries([endPointUrls.BLOGS_ADMIN()]);
		},
	}) as UseMutationResult;
};
