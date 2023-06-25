import { Form } from 'antd';
import { formatDate } from 'core/helpers/utils';
import { useEffect, useState } from 'react';
import { useAdminBlogUpdateQuery } from 'components/AdminAllBlog/Update/hooks/react-query/useAdminBlogUpdateQuery';
import { IOrder } from 'core/types/blogType';
import { useSingleBlogQuery } from 'components/SingleBlog/hooks/react-query/useSingleBlogQuery';
import dayjs from 'dayjs';

interface IMyBlogUpdatePayload {
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

const useAdminBlogUpdate = (hideModal: () => void) => {
	// hooks
	const [form] = Form.useForm();

	// state
	const [imageSelected, setImageSelected] = useState('');

	// query
	const { mutate, isLoading } = useAdminBlogUpdateQuery();
	const { data: blogDetail } = useSingleBlogQuery();

	const onFinishHandler = (values: IMyBlogUpdatePayload) => {
		const formattedValue: IMyBlogUpdatePayload = {
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

		mutate(
			{ payload: formattedValue, id: blogDetail?.data?.id },
			{
				onSuccess: () => {
					form.resetFields();
					setImageSelected('');
					return hideModal();
				},
			}
		);
	};

	useEffect(() => {
		const order: IOrder = blogDetail && JSON.parse(blogDetail?.data.orders);

		setImageSelected(blogDetail?.data.image || '');

		order &&
			form.setFieldsValue({
				...blogDetail?.data,
				publishedAt: blogDetail?.data?.publishedAt ? dayjs(blogDetail?.data?.publishedAt) : undefined,
				orderTitle: order.orderTitle,
				orderImage: order.orderImage,
				orderContent: order.orderContent,
			});
	}, [blogDetail]);

	return { form, onFinishHandler, isLoading, imageSelected, setImageSelected };
};

export default useAdminBlogUpdate;
