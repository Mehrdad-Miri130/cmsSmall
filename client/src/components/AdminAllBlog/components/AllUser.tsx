import React from 'react';
import { useGetAllUser } from 'components/AdminAllBlog/Create/hooks/react-query/useGetAllUser';
import { Select, SelectProps } from 'antd';

const AllUser = ({ ...props }) => {
	const { data, isFetching } = useGetAllUser();

	const options: SelectProps['options'] = data?.data?.map((item) => ({ label: item.email, value: item.id }));

	return <Select options={options} loading={isFetching} {...props} />;
};

export default AllUser;
