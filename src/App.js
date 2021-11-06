import React from 'react';

// Views
import Header from './components/Header/Header';
import LoginButton from './components/Buttons/LoginButton';
import LoginView from './views/LoginView/LoginView';
import UsersView from './views/UsersView/UsersView';
import AuthUserView from './views/AuthUserView/AuthUserView';
import LandingPage from './views/LandingPage/LandingPage';
import EmployeeView from './views/EmployeeView/EmployeeView';
import JobsiteView from './views/JobsiteView/JobsiteView';
import BuildingView from './views/BuildingView/BuildingView';
import UnitView from './views/UnitView/UnitView';

// Styling
import './App.css';

function App() {
	return (
		<div className="App">
			<section className="main-header-wrapper">
				<Header />
			</section>
			<LoginButton />
		</div>
	);
}

export default App;
