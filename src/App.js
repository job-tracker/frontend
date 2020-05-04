import React from 'react';

// Views
import Header from './components/Header/Header.js';
import LandingPage from './views/LandingPage/LandingPage';
import EmployeeView from './views/EmployeeView/EmployeeView';
import JobsiteView from './views/JobsiteView/JobsiteView';
import BuildingView from './views/BuildingView/BuildingView.js';

// Styling
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="main-header-wrapper">
        <Header />
      </section>
      <BuildingView />
    </div>
  );
}

export default App;
