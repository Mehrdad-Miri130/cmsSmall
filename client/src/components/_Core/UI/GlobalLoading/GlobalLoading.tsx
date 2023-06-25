import { ScaleLoader } from 'react-spinners';
import { FC, memo } from 'react';
import ReactDOM from 'react-dom';

const GlobalLoading: FC = () => {
	return ReactDOM.createPortal(
		<div className='w-full min-h-screen fixed flex justify-center items-center bg-white z-[9999]'>
			<ScaleLoader height={26} width={3} />
		</div>,
		document.getElementById('global-loading') as HTMLElement
	);
};

export default memo(GlobalLoading);
