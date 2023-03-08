import './App.scss';

// react
import { Routes, Route /*, useLocation*/ } from 'react-router-dom';

// data
import { navLinks } from './data/navLinks';

// components
import Nav from './components/navigation/nav';

// routes
import Home from './routes/home/home.route';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Nav links={navLinks} />}>
				<Route index element={<Home />} />
				{/*}
        		<Route path='shop' element={<Shop />} />
				<Route exact path='shop/:categoryTitle' element={<Shop />} />
				<Route path='sign-in-up' element={<SignInUp />} />
				<Route path='sign-out' element={<SignInUp />} />
				<Route path='checkout' element={<Checkout />} />
        {*/}
			</Route>
		</Routes>
	);
}

export default App;
