import { useMutation, QueryKey, UseMutationOptions, MutationFunction } from '@tanstack/react-query';
import useApiCatcher from '../useApiCatcher';
import useLogout from 'core/helpers/logout/useLogout';

const useMutationHook = (queryKey: QueryKey, queryFn: MutationFunction, queryOptions: UseMutationOptions, showError = true) => {
	//hooks
	const apiCatcher = useApiCatcher();
	const { logout } = useLogout();

	return useMutation(queryKey, queryFn, {
		...queryOptions,
		onError: (res: any, payload: any) => {
			if (res.response.status === 401 || res.response.status === 403 ) {
				logout();
			}

			showError && apiCatcher(res.response?.data, undefined, payload);
		},
	});
};

export default useMutationHook;
