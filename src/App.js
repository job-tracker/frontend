import React from 'react';

// Views
import Header from './components/Header/Header.js';
import LandingPage from './views/LandingPage/LandingPage';
import EmployeeView from './views/EmployeePage/EmployeeView';

// Styling
import './App.css';

function App() {
	return (
		<div className="App">
			<section className="main-header-wrapper">
				<Header />
			</section>
			<EmployeeView />
		</div>
	);
}

export default App;
