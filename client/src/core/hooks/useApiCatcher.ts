import toastHandler from 'core/helpers/toast/toast';
import { setApiCatcherFormErrors } from 'core/store/slice/mainInfo/mainInfoSlice';
import { useDispatch } from 'react-redux';

const useApiCatcher = () => {
	const dispatch = useDispatch();

	return (errorResponse: any, isSHowMessage = true, payload?: any) => {
		let errorMessages: any[] = [];
		if (!isSHowMessage) return;
		if (Array.isArray(errorResponse)) {
			errorResponse?.map((item) => {
				errorMessages = [...errorMessages, { name: item?.error, errors: [item?.message], payload }];
				toastHandler('error', item?.message);
			});
		} else if (typeof errorResponse === 'string') {
			toastHandler('error', errorResponse);
		}

		dispatch(setApiCatcherFormErrors(errorMessages));
	};
};

export default useApiCatcher;
