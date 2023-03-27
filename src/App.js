// import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

// react
import { Routes, Route /*, useLocation*/ } from 'react-router-dom';

// data
import { navLinks } from './data/navLinks';

// components
import NavBar from './components/navigation/navigation-bar';

// routes
import Home from './routes/home/home.route';

function App() {
	return (
		<Routes>
			<Route path='/' element={<NavBar links={navLinks} />}>
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
