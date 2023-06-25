import './assets/css/global.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoute from 'core/MainRoute/MainRoute';
import IndexProvider from './core/providers/IndexProvider';

function App() {
	return (
		<Router>
			<IndexProvider>
				<MainRoute />
			</IndexProvider>
		</Router>
	);
}

export default App;
