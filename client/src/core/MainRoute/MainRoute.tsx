import { lazy, memo, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import GlobalLoading from 'components/_Core/UI/GlobalLoading/GlobalLoading';
import useRoute from 'core/hooks/useRoute';
import MainLayout from 'components/_Core/Layouts/MainLayout';
import PrivateRoute from 'components/_Core/Route/PrivateRoute';
import { useSelector } from 'react-redux';
import { RootState } from 'core/store';

// public route
const MainPage = lazy(() => import('pages/MainPage'));
const AdminPage = lazy(() => import('pages/AdminPage'));
const MyBlogPage = lazy(() => import('pages/MyBlogPage'));
const SingleBlogPage = lazy(() => import('pages/SingleBlogPage'));

const MainRoute = () => {
	// hooks
	const { routes } = useRoute();

	// store
	const { isAuthenticated, isAdmin } = useSelector((store: RootState) => store.mainInfoStore);

	const privateRoute = [
		{
			path: routes.HOME.route,
			element: <MainPage />,
			isAuthenticated: true,
			role: true,
		},
		{
			path: routes.SINGLE_BLOG.route,
			element: <SingleBlogPage />,
			isAuthenticated: true,
			role: true,
		},
		{
			path: routes.MY_BLOG.route,
			element: <MyBlogPage />,
			isAuthenticated,
			role: true,
		},
		{
			path: routes.ADMIN.route,
			element: <AdminPage />,
			isAuthenticated,
			role: isAdmin,
		},
	];

	return (
		<Suspense fallback={<GlobalLoading />}>
			<MainLayout>
				<Routes>
					{privateRoute.map((route) => (
						<Route key={route.path} path={route.path} element={<PrivateRoute isAuthenticated={route.isAuthenticated} role={route.role} />}>
							<Route {...route} />
						</Route>
					))}

					<Route path='*' element={<Navigate to='/' replace />} />
				</Routes>
			</MainLayout>
		</Suspense>
	);
};

export default memo(MainRoute);
