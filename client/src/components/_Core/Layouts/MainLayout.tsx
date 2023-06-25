import React, { FC, ReactNode } from 'react';
import Header from 'components/_Core/Layouts/Header';

interface IMainLayout {
	children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {

	return (
		<div className='main-template max-w-[1400px] w-full mx-auto'>
			<Header />
			<div className='main px-8 py-10'>{children}</div>
		</div>
	);
};

export default MainLayout;
