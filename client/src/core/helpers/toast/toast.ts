import { toast, ToastContent, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastHandler = (type: 'error' | 'success' | 'warn' | 'info', content: ToastContent<unknown>, options?: ToastOptions | undefined) => {
  return toast[type](content, { ...options, position: 'bottom-center', autoClose: 5000 });
};

export default toastHandler;
