import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from './common/Button/Button';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Header from './components/Header/Header';
import './styles/App.css';

function App() {
	const [isCourses, setIsCourses] = useState(true);
	// Отримуємо дані з редакс стану:
	const dispach = useDispatch();
	// Беремо конкретну змінну зі стану:
	const cash = useSelector((state) => state.cash);
	console.log(cash);

	// Функція зміни стану:
	function addCash(cash) {
		dispach({ type: 'ADD_CASH', payload: cash }); // Передаємо екшн діспечеру
	}
	function getCash(cash) {
		dispach({ type: 'GET_CASH', payload: cash }); // Передаємо екшн діспечеру
	}
	// console.log(changeState(5));

	return (
		<div className='app'>
			<Header />
			{isCourses ? (
				<Courses isCourses={isCourses} setIsCourses={setIsCourses} />
			) : (
				<CreateCourse isCourses={isCourses} setIsCourses={setIsCourses} />
			)}
			<div>Зараз в стану redux: {cash}грн</div>
			<Button
				buttontext='Пополнити рахунок'
				onClick={() => addCash(Number(prompt()))}
			></Button>
			<Button
				buttontext='Зняти з рахунку'
				onClick={() => getCash(Number(prompt()))}
			></Button>
		</div>
	);
}

export default App;
