// rfc
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Button from '../../common/Button/Button';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

function Courses({ newPosts, setNewPosts, newIdArr, setNewIdArr }) {
	const router = useNavigate();
	// Стан для інпуту пошуку:
	const [inputValue, setInputValue] = useState('');
	// Стан постів для пошуку:
	const [searhArr, setSearhArr] = useState([...newPosts]);

	return (
		<div className='courses'>
			<div className='search-row'>
				<SearchBar
					// posts={mockedCoursesList}
					posts={searhArr}
					//setPosts={setPosts}
					setPosts={setNewPosts}
					inputValue={inputValue}
					setInputValue={setInputValue}
					setSearhArr={setSearhArr}
				/>
				<Button
					buttontext='Add new course'
					onClick={(event) => {
						event.preventDefault();
						// setIsCourses(false);
						router(`/courses/add`);
					}}
				></Button>
			</div>
			{/* {posts.map((item) => ( */}
			{newPosts.map((item) => (
				<CourseCard
					key={item.id}
					id={item.id}
					title={item.title}
					description={item.description}
					creationDate={item.creationDate}
					authors={item.authors}
					duration={item.duration}
					authorsList={newIdArr}
				/>
			))}
		</div>
	);
}

export default Courses;
