import useApiCatcher from 'core/hooks/useApiCatcher';
import useLogout from '../logout/useLogout';

const useQueryOnErrorHandler = () => {
	const apiCatcher = useApiCatcher();
	const { logout } = useLogout();

	const onErrorHandler = (res: any, showError: boolean, payload?: any) => {
		if (res?.response?.status === 401 || res?.response?.status === 403) {
			logout();
		}

		showError && apiCatcher(res?.response.data?.errors || res?.response?.data?.message, undefined, payload);
	};

	return { onErrorHandler };
};

export default useQueryOnErrorHandler;
