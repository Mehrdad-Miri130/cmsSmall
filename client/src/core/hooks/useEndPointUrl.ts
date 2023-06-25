import { useParams } from 'react-router-dom';

const useEndPointUrl = () => {
	const { blogId } = useParams();

	const endPointUrls = Object.freeze({
		// auth
		LOGIN: '/api/sessions',
		CURRENT_USER: '/api/sessions/current',

		// blog
		ALL_BLOGS: '/api/pages',
		BLOGS_ADMIN: (blogIdParam?: number) => `/api/pages/by-admin${blogIdParam ? `/${blogIdParam}` : ''}`,
		MY_BLOGS: '/api/pages/my-blog',
		SINGLE_BLOG: (blogIdParam?: number) => `/api/pages/${blogIdParam || blogId}`,

		// user
		ALL_USER: '/api/user',
	});

	return { endPointUrls, blogId };
};

export default useEndPointUrl;
