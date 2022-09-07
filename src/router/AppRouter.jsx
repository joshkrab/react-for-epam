// rfc
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Courses from '../components/Courses/Courses';

const AppRouter = ({
	isCourses,
	setIsCourses,
	newPosts,
	setNewPosts,
	newIdArr,
	setNewIdArr,
}) => {
	return (
		<Routes>
			{/* <Route path="about" element={<About />}></Route>
         <Route exact path="posts" element={<Posts />}></Route>
         <Route exact path="posts/:id" element={<PostIdPage />}></Route> */}
			{/* <Route path="*" element={<Login />}></Route> */}
			<Route
				path='/courses'
				element={
					<Courses
						isCourses={isCourses}
						setIsCourses={setIsCourses}
						newPosts={newPosts}
						setNewPosts={setNewPosts}
						newIdArr={newIdArr}
						setNewIdArr={setNewIdArr}
					/>
				}
			></Route>
		</Routes>
	);
};

export default AppRouter;
