import { useGetMyBlog } from 'components/MyBlog/List/hooks/react-query/useGetMyBlog';
import useModal from 'core/hooks/useModal';

const useMyBlogList = () => {
	// query
	const { data: blogList } = useGetMyBlog();

	// hooks
	const { modal: createModal, hideModal: createHideModal, showModal: createShowModal } = useModal();
	const { modal: updateModal, hideModal: updateHideModal, showModal: updateShowModal } = useModal();

	return { blogList, updateShowModal, createShowModal, createHideModal, updateHideModal, createModal, updateModal };
};

export default useMyBlogList;
