import { ConfigProvider } from 'antd';
import { FC, ReactNode } from 'react';
import en from 'antd/locale/en_US';

interface IAntProvider {
	children: ReactNode;
}

const AntProvider: FC<IAntProvider> = ({ children }) => {
	return (
		<ConfigProvider input={{ autoComplete: 'off' }} locale={en} direction='ltr'>
			{children}
		</ConfigProvider>
	);
};

export default AntProvider;
