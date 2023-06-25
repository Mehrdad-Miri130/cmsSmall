import useBlogList from 'components/Blog/List/hooks/useBlogList';
import BlogItem from 'components/_Core/UI/BlogItem/BlogItem';

const BlogList = () => {
	const { blogList } = useBlogList();

	return (
		<div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
			{blogList?.data?.map((blog) => (
				<BlogItem key={blog.pageId} blogId={blog.pageId} {...blog} />
			))}
		</div>
	);
};

export default BlogList;
