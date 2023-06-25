import { Provider } from 'react-redux';
import store from 'core/store';
import { FC, ReactNode } from 'react';

interface IReduxProvider {
  children: ReactNode;
}

const ReduxProvider: FC<IReduxProvider> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
