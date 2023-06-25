import React, { FC } from 'react';
import { Button, Popconfirm } from 'antd';
import useRoute from 'core/hooks/useRoute';
import { Link } from 'react-router-dom';
import { useMyBlogDeleteQuery } from 'components/MyBlog/Create/hooks/react-query/useMyBlogDeleteQuery';
import { useAdminBlogDeleteQuery } from 'components/AdminAllBlog/Create/hooks/react-query/useAdminBlogDeleteQuery';
import { IBlog } from 'core/types/blogType';
import { useDispatch } from 'react-redux';
import { setBlogId } from 'core/store/slice/mainInfo/mainInfoSlice';

interface IBlogItem {
	image: string;
	blogId: number;
	title: string;
	publishedAt: string;
	authorEmail: string;
	hasAction?: boolean;
	isAdminPage?: boolean;
	updateShowModal?: () => void;
}

const BlogItem: FC<IBlogItem> = ({ image, title, authorEmail, publishedAt, hasAction, blogId, isAdminPage, updateShowModal }) => {
	// hooks
	const { routes } = useRoute();
	const dispatch = useDispatch();

	// query
	const { mutate: deleteMyBlog, isLoading: isLoadingDeleteMyBlog } = useMyBlogDeleteQuery();
	const { mutate: deleteAdminBlog, isLoading: isLoadingDeleteAdminBlog } = useAdminBlogDeleteQuery();

	return (
		<div className='flex flex-col space-y-4 shadow-lg rounded-lg'>
			<div>
				<Link target='_blank' to={routes.SINGLE_BLOG.link(blogId)}>
					<img src={image} className='rounded-lg w-full' />
				</Link>
			</div>

			<div className='px-4'>
				<Link target='_blank' to={routes.SINGLE_BLOG.link(blogId)}>
					<h3 className='text-center hover:underline'>{title}</h3>
				</Link>

				{authorEmail && (
					<p className='flex justify-between'>
						<span className='font-bold'>author:</span> <span>{authorEmail}</span>
					</p>
				)}

				<p className='flex justify-between'>
					<span className='font-bold'>publish date:</span> <span>{publishedAt === null ? 'Not Publish' : publishedAt}</span>
				</p>

				{hasAction && (
					<div className='mt-8'>
						<div className='bg-gray-300 h-0.5' />

						<div className='flex py-5 items-center justify-between border-t'>
							<Button
								type='primary'
								onClick={() => {
									updateShowModal && updateShowModal();
									dispatch(setBlogId(blogId));
								}}
							>
								Edit
							</Button>

							<Popconfirm title='Are You Sure To Delete ?' onConfirm={() => (isAdminPage ? deleteAdminBlog({ id: blogId }) : deleteMyBlog({ id: blogId }))}>
								<Button loading={isAdminPage ? isLoadingDeleteAdminBlog : isLoadingDeleteMyBlog} type='primary' danger>
									Delete
								</Button>
							</Popconfirm>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default BlogItem;
