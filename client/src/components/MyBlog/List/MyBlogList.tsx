import React from 'react';
import BlogItem from 'components/_Core/UI/BlogItem/BlogItem';
import useMyBlogList from 'components/MyBlog/List/hooks/useMyBlogList';
import { Button, Modal } from 'antd';
import MyBlogCreate from 'components/MyBlog/Create/MyBlogCreate';
import MyBlogUpdate from 'components/MyBlog/Update/MyBlogUpdate';

const MyBlogList = () => {
	const { blogList, createShowModal, updateShowModal, updateHideModal, createHideModal, updateModal, createModal } = useMyBlogList();

	return (
		<>
			<Modal width={700} open={createModal} onCancel={createHideModal} footer={null} title='Create Blog'>
				<MyBlogCreate hideModal={createHideModal} />
			</Modal>

			<Modal destroyOnClose width={700} open={updateModal} onCancel={updateHideModal} footer={null} title='Update Blog'>
				<MyBlogUpdate hideModal={updateHideModal} />
			</Modal>

			<div className='space-y-6'>
				<div className='flex items-center justify-between'>
					<h2>My Blog</h2>
					<Button onClick={createShowModal} type='primary'>
						Create Blog
					</Button>
				</div>

				<div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
					{blogList?.data?.map((blog) => (
						<BlogItem updateShowModal={updateShowModal} key={blog.id} blogId={blog.id} hasAction {...blog} />
					))}
				</div>
			</div>
		</>
	);
};

export default MyBlogList;
