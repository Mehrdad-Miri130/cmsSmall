import { useParams } from 'react-router-dom';

const useRoute = () => {
	const { blogId } = useParams();

	const routes = Object.freeze({
		HOME: { route: '/', link: '/' },
		ADMIN: { route: '/admin', link: '/admin' },
		MY_BLOG: { route: '/my-blog', link: '/my-blog' },
		SINGLE_BLOG: { route: '/single-blog/:blogId', link: (blogId: string | number) => `/single-blog/${blogId}` },
	});

	return { routes, blogId };
};

export default useRoute;
