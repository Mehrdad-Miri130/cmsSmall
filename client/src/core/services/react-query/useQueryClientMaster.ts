import { QueryClient, QueryCache, MutationCache } from '@tanstack/react-query';

const useQueryClientMaster = () => {
	const queryClientMaster = new QueryClient({
		queryCache: new QueryCache({
			onError: (res: any, b) => {
				console.log(res.response, b, 444);
			},
		}),
		mutationCache: new MutationCache({
			onError: (res: any, b) => {
				console.log(res.response, b, 444);
			},
		}),
		defaultOptions: { queries: { refetchOnWindowFocus: false, keepPreviousData: true, retry: 1 } },
	});
	return { queryClientMaster };
};

export default useQueryClientMaster;
