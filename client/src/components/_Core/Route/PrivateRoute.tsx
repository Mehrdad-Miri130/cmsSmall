import useRoute from 'core/hooks/useRoute';
import { FC, memo } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface IPrivateRoute {
	role: boolean;
	isAuthenticated: boolean;
}

const PrivateRoute: FC<IPrivateRoute> = ({ role, isAuthenticated }) => {
	const { routes } = useRoute();

	if (isAuthenticated && !!role)
		return (
			<>
				<Outlet />
			</>
		);
	else return <Navigate to={routes.HOME.link} />;
};

export default memo(PrivateRoute);
