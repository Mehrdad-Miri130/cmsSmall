import BlogItem from 'components/_Core/UI/BlogItem/BlogItem';
import useAdminAllBlogList from 'components/AdminAllBlog/List/hooks/useAdminAllBlogList';
import { Button, Modal } from 'antd';
import AdminBlogCreate from 'components/AdminAllBlog/Create/AdminBlogCreate';
import AdminBlogUpdate from 'components/AdminAllBlog/Update/AdminBlogUpdate';

const AdminAllBlogList = () => {
	const { blogList, createShowModal, updateShowModal, updateHideModal, createHideModal, updateModal, createModal } = useAdminAllBlogList();

	return (
		<>
			<Modal width={700} open={createModal} onCancel={createHideModal} footer={null} title='Create Blog'>
				<AdminBlogCreate hideModal={createHideModal} />
			</Modal>

			<Modal destroyOnClose width={700} open={updateModal} onCancel={updateHideModal} footer={null} title='Update Blog'>
				<AdminBlogUpdate hideModal={updateHideModal} />
			</Modal>

			<div className='space-y-6'>
				<div className='flex items-center justify-between'>
					<h2>Admin Blog Management</h2>
					<Button onClick={createShowModal} type='primary'>
						Create Blog
					</Button>
				</div>

				<div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
					{blogList?.data?.map((blog) => (
						<BlogItem updateShowModal={updateShowModal} key={blog.pageId} blogId={blog.pageId} hasAction isAdminPage {...blog} />
					))}
				</div>
			</div>
		</>
	);
};

export default AdminAllBlogList;
