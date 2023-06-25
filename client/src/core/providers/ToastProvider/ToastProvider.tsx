import { FC } from 'react';
import { ToastContainer } from 'react-toastify';

const ToastProvider: FC = () => {
	return <ToastContainer limit={3} theme='light' />;
};

export default ToastProvider;
