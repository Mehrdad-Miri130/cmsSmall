import { QueryFunction, QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query';
import useQueryOnErrorHandler from 'core/helpers/queryOnErrorHandler/useQueryOnErrorHandler';

const useQueryHook = (queryKey: QueryKey, queryFn: QueryFunction, queryOptions: UseQueryOptions = {}, showError = true) => {
	const { onErrorHandler } = useQueryOnErrorHandler();

	return useQuery(queryKey, queryFn, {
		onError: (res: any) => {
			onErrorHandler(res, showError);
		},
		...queryOptions,
	});
};

export default useQueryHook;
