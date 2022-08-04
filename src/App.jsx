import React from 'react';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Header from './components/Header/Header';
import './styles/App.css';

function App() {
	return (
		<div className='App'>
			<Header />
			<Courses />
			<CreateCourse />
		</div>
	);
}

export default App;
