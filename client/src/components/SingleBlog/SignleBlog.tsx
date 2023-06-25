import { useSingleBlogQuery } from 'components/SingleBlog/hooks/react-query/useSingleBlogQuery';
import { IOrder } from 'core/types/blogType';

const SingeBlog = () => {
	const { data, isFetching } = useSingleBlogQuery();

	const order: IOrder = data?.data && JSON.parse(data?.data?.orders + '');

	if (isFetching) return <h2>Loading...</h2>;
	if (!data) return <h2>Not Found</h2>;

	const title = <h2 className='text-center'>{data?.data.title}</h2>;
	const image = (
		<div className='h-[400px] w-full'>
			<img src={data?.data.image} className='w-full h-full object-cover rounded-lg' />
		</div>
	);
	const content = <p className='whitespace-pre'>{data?.data?.content}</p>;

	return (
		<div className='space-y-8'>
			<div className='space-y-3'>
				<div className='flex justify-between items-center pb-3'>
					<span>{data?.data.publishedAt || 'Not Publish'}</span>
					<span>{data?.data.authorEmail}</span>
				</div>

				<hr />
			</div>

			{order.orderTitle === 1 && title}
			{order.orderImage === 1 && image}
			{order.orderContent === 1 && content}

			{order.orderTitle === 2 && title}
			{order.orderImage === 2 && image}
			{order.orderContent === 2 && content}

			{order.orderTitle === 3 && title}
			{order.orderImage === 3 && image}
			{order.orderContent === 3 && content}
		</div>
	);
};

export default SingeBlog;
