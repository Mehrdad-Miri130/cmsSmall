import { FC, ReactNode } from 'react';
import AntProvider from './AntProvider/AntProvider';
import AppProvider from './AppProvider/AppProvider';
import ReactQueryProvider from './ReactQueryProvider/ReactQueryProvider';
import ReduxProvider from './ReduxProvider/ReduxProvider';
import ToastProvider from './ToastProvider/ToastProvider';

interface IIndexProvider {
	children: ReactNode;
}

const IndexProvider: FC<IIndexProvider> = ({ children }) => {
	return (
		<ReduxProvider>
			<AntProvider>
				<ReactQueryProvider>
					<AppProvider>{children}</AppProvider>
				</ReactQueryProvider>
				<ToastProvider />
			</AntProvider>
		</ReduxProvider>
	);
};

export default IndexProvider;
