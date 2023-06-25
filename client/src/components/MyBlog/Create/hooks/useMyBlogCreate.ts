import { Form } from 'antd';
import { formatDate } from 'core/helpers/utils';
import { useMyBlogCreateQuery } from 'components/MyBlog/Create/hooks/react-query/useMyBlogCreateQuery';
import { useEffect, useState } from 'react';

export interface IMyBlogPayload {
	title: string;
	publishedAt: any;
	content: string;
	image: string;
	orders: string;
	orderTitle?: string;
	orderImage?: string;
	orderContent?: string;
}

const useMyBlogCreate = (hideModal: () => void) => {
	// hooks
	const [form] = Form.useForm();

	// state
	const [imageSelected, setImageSelected] = useState('');

	// query
	const { mutate, isLoading } = useMyBlogCreateQuery();

	const onFinishHandler = (values: IMyBlogPayload) => {
		const formattedValue: IMyBlogPayload = {
			content: values.content,
			image: values.image,
			title: values.title,
			orders: JSON.stringify({
				orderContent: values?.orderContent && +values?.orderContent,
				orderTitle: values?.orderTitle && +values?.orderTitle,
				orderImage: values?.orderImage && +values?.orderImage,
			}),
			publishedAt: values.publishedAt ? formatDate(values.publishedAt?.$d) : '0001-01-01',
		};

		mutate(formattedValue, {
			onSuccess: () => {
				form.resetFields();
				setImageSelected('');
				return hideModal();
			},
		});
	};

	useEffect(() => {
		form.setFieldsValue({ orderTitle: 1, orderImage: 2, orderContent: 3 });
	}, []);

	return { form, onFinishHandler, isLoading, imageSelected, setImageSelected };
};

export default useMyBlogCreate;
