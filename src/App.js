import React from 'react';

// Views
import Header from './components/Header/Header';
import LoginButton from './components/Buttons/LoginButton';
import LogoutButton from './components/Buttons/LogoutButton';
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
import { useAuth0 } from '@auth0/auth0-react';

function App() {
	const { isAuthenticated } = useAuth0();
	return (
		<div className="App">
			<section className="main-header-wrapper">
				<Header />
			</section>
			<LoginButton />
			<LogoutButton />
			{isAuthenticated && <UsersView />}
		</div>
	);
}

export default App;
