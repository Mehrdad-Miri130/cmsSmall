import { useGetAllBlog } from 'components/Blog/List/hooks/react-query/useGetAllBlog';

const useBlogList = () => {
	const { data: blogList } = useGetAllBlog();
	return { blogList };
};

export default useBlogList;
