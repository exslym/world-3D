import { HashRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.scss';
import { About, Contact, Home, Projects } from './pages';

export const App = () => {
	return (
		<main className='bg-slate-300/20 h-full'>
			<HashRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</HashRouter>
			{/* <Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</Router> */}
			{/* <Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/*'
						element={
							<>
								<Routes>
									<Route path='/about' element={<About />} />
									<Route path='/projects' element={<Projects />} />
									<Route path='/contact' element={<Contact />} />
								</Routes>
							</>
						}
					/>
				</Routes>
			</Router> */}
		</main>
	);
};
