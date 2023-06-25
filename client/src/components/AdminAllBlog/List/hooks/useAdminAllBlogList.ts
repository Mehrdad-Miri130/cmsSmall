import { useGetAdminAllBlog } from 'components/AdminAllBlog/List/hooks/react-query/useGetAdminAllBlog';
import useModal from 'core/hooks/useModal';

const useAdminAllBlogList = () => {
	// query
	const { data: blogList } = useGetAdminAllBlog();

	// hooks
	const { modal: createModal, hideModal: createHideModal, showModal: createShowModal } = useModal();
	const { modal: updateModal, hideModal: updateHideModal, showModal: updateShowModal } = useModal();

	return { blogList, updateShowModal, createShowModal, createHideModal, updateHideModal, createModal, updateModal };
};

export default useAdminAllBlogList;
