import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers/Customers';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Customers />
			</header>
		</div>
	);
}

export default App;
