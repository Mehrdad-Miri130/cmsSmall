import React, { FC } from 'react';
import { Button, Form, Input } from 'antd';
import useLogin from 'components/Login/hooks/useLogin';

interface ILogin {
	hideModal: () => void;
}

const Login: FC<ILogin> = ({ hideModal }) => {
	const { form, onFinish, isLoading } = useLogin(hideModal);
	return (
		<Form form={form} onFinish={onFinish} layout='vertical'>
			<Form.Item
				name='email'
				required
				label='Email'
				rules={[
					{ required: true, message: 'enter Email' },
					{ type: 'email', message: 'incorrect Email' },
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item name='password' required label='Password' rules={[{ required: true, message: 'enter Password' }]}>
				<Input.Password />
			</Form.Item>

			<Button type='primary' htmlType='submit' loading={isLoading}>
				Login
			</Button>
		</Form>
	);
};

export default Login;
