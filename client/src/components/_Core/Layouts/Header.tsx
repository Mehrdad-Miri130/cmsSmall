import { Button, Modal } from 'antd';
import useModal from 'core/hooks/useModal';
import Login from 'components/Login/Login';
import { useSelector } from 'react-redux';
import { RootState } from 'core/store';
import { useLogoutQuery } from 'components/Login/hooks/react-query/useLogoutQuery';
import { Link } from 'react-router-dom';
import useRoute from 'core/hooks/useRoute';

const Header = () => {
	// hooks
	const { routes } = useRoute();
	const { modal, showModal, hideModal } = useModal();

	// store
	const { isAuthenticated, isAdmin, userInfo } = useSelector((store: RootState) => store.mainInfoStore);

	// query
	const { mutate, isLoading } = useLogoutQuery();

	return (
		<>
			<Modal open={modal} onCancel={hideModal} footer={null} title='Login'>
				<Login hideModal={hideModal} />
			</Modal>

			<div className='shadow-lg px-8 py-6 flex justify-between items-center'>
				<div className='flex items-center space-x-5'>
					<Link to={routes.HOME.link}>Home</Link>
					{isAuthenticated && <Link to={routes.MY_BLOG.link}>My Blog</Link>}
					{isAdmin && <Link to={routes.ADMIN.link}>Admin Page</Link>}
				</div>

				<h2 className='m-0'>Farzin CMS</h2>

				{isAuthenticated ? (
					<div className='flex space-x-3 items-center'>
						<span>{userInfo?.email || ''}</span>
						<Button type='primary' danger onClick={mutate} loading={isLoading}>
							Logout
						</Button>
					</div>
				) : (
					<Button type='primary' onClick={showModal}>
						Login
					</Button>
				)}
			</div>
		</>
	);
};

export default Header;
