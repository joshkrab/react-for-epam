import React, { useState } from 'react';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Header from './components/Header/Header';
import './styles/App.css';

function App() {
	const [isCourses, setIsCourses] = useState(true);
	return (
		<div className='app'>
			<Header />
			{isCourses ? (
				<Courses isCourses={isCourses} setIsCourses={setIsCourses} />
			) : (
				<CreateCourse isCourses={isCourses} setIsCourses={setIsCourses} />
			)}
		</div>
	);
}

export default App;
