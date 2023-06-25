import useQueryClientMaster from 'core/services/react-query/useQueryClientMaster';
import { FC, ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

interface IReactQueryProvider {
	children: ReactNode;
}

const ReactQueryProvider: FC<IReactQueryProvider> = ({ children }) => {
	const { queryClientMaster } = useQueryClientMaster();
	return (
		<>
			<QueryClientProvider client={queryClientMaster}>
				{children}
				{/* <ReactQueryDevtools initialIsOpen={false} /> */}
			</QueryClientProvider>
		</>
	);
};

export default ReactQueryProvider;
