import { FC, ReactNode } from 'react';
import { useGetCurrentUser } from 'core/hooks/react-query/useUserInfoQuery';

interface IAppProvider {
	children: ReactNode;
}

const AppProvider: FC<IAppProvider> = ({ children }) => {
	useGetCurrentUser();

	return <>{children}</>;
};

export default AppProvider;
