import { Form } from 'antd';
import { formatDate } from 'core/helpers/utils';
import { useEffect, useState } from 'react';
import { useAdminBlogCreateQuery } from 'components/AdminAllBlog/Create/hooks/react-query/useAdminBlogCreateQuery';

interface IMyBlogCreatePayload {
	title: string;
	publishedAt: any;
	content: string;
	image: string;
	author: number;
	orders: string;
	orderTitle?: string;
	orderImage?: string;
	orderContent?: string;
}

const useAdminBlogCreate = (hideModal: () => void) => {
	// hooks
	const [form] = Form.useForm();

	// state
	const [imageSelected, setImageSelected] = useState('');

	// query
	const { mutate, isLoading } = useAdminBlogCreateQuery();

	const onFinishHandler = (values: IMyBlogCreatePayload) => {
		const formattedValue: IMyBlogCreatePayload = {
			author: values.author,
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

export default useAdminBlogCreate;
