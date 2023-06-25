import React from 'react';
import { Form } from 'antd';
import { useLoginQuery } from 'components/Login/hooks/react-query/useLoginQuery';

const useLogin = (hideModal: () => void) => {
	// hooks
	const [form] = Form.useForm();

	// query
	const { mutate, isLoading } = useLoginQuery();

	const onFinish = (values: { email: string; password: string }) => {
		mutate(values, { onSuccess: () => hideModal() });
	};

	return { form, isLoading, onFinish };
};

export default useLogin;
