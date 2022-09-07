import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import Textarea from '../../common/Textarea/Textarea';

import Styles from './CreateCourse.module.css';

import { v4 as uuid } from 'uuid';

export default function CreateCourse({
	newPosts,
	setNewPosts,
	newIdArr,
	setNewIdArr,
}) {
	const router = useNavigate();
	const [duration, setDuration] = useState('00:00');
	const [durMinutes, setDurMinutes] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const [authors, setAuthors] = useState([...newIdArr]);
	const [authorsOut, setAuthorsOut] = useState([]);
	const [newAuthor, setNewAuthor] = useState('');

	function addNewAuthor() {
		const id = uuid();
		setAuthors([
			...authors,
			{
				id: `${id}`,
				name: `${newAuthor}`,
			},
		]);
		setNewIdArr([
			...newIdArr,
			{
				id: `${id}`,
				name: `${newAuthor}`,
			},
		]);
	}

	function setHours(min) {
		let minutes;
		let hours;
		if (min >= 60) {
			minutes = min % 60;
			hours = Math.floor(min / 60);
		} else {
			minutes = min;
			hours = '00';
		}

		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		if (min === '') {
			minutes = '00';
		}
		if (hours < 10 && hours !== '00') {
			hours = '0' + hours;
		}

		setDuration(`${hours}:${minutes}`);
	}

	function addCourse() {
		const date = new Date().toLocaleDateString('en-GB');
		const id = uuid();
		if (
			title.length > 2 &&
			description.length > 2 &&
			durMinutes > 0 &&
			authorsOut[0]
		) {
			const authorsIdArray = authorsOut.map((item) => item.id);
			const newPost = {
				id: id,
				title: title,
				description: description,
				creationDate: date,
				duration: +durMinutes,
				authors: [...authorsIdArray],
			};

			setNewPosts([...newPosts, newPost]);
			// setIsCourses(true);
			router(`/courses`);
		} else {
			alert('Please, fill in all fields!');
		}
	}

	return (
		<div className={Styles.CreateCourse}>
			<div className={Styles.headerRow}>
				<Input
					labeltext='Title'
					placeholder='Enter title...'
					onChange={(event) => {
						setTitle(event.target.value);
					}}
				/>
				<Button
					buttontext='Create course'
					onClick={(event) => {
						event.preventDefault();
						addCourse();
					}}
				></Button>
			</div>

			<Textarea
				labelText='Description'
				placeholder='Enter description'
				onChange={setDescription}
			/>

			<div className={Styles.CreateCourseBody}>
				<div className={Styles.CreateCourseRow1}>
					<p style={{ textAlign: 'center', padding: '0 0 20px 0' }}>
						Add author
					</p>
					<Input
						style={{ margin: '0 0 20px 0', width: '100%' }}
						labeltext='Author name'
						placeholder='Enter author name...'
						onChange={(event) => {
							setNewAuthor(event.target.value);
						}}
					/>
					<Button
						style={{ margin: '0 0 40px 0' }}
						buttontext='Create author'
						onClick={(event) => {
							event.preventDefault();
							newAuthor.length >= 2
								? addNewAuthor()
								: alert('Input valid data, min 2 letters');
						}}
					></Button>

					<p style={{ textAlign: 'center', padding: '0 0 20px 0' }}>Duration</p>

					<Input
						style={{ margin: '0 0 20px 0', width: '100%' }}
						labeltext='Duration'
						placeholder='Enter duration in minutes...'
						type='number'
						onChange={(event) => {
							setHours(event.target.value);
							setDurMinutes(event.target.value);
						}}
					/>
					<div className={Styles.durationOutput}>
						Duration: {duration} hours
					</div>
				</div>
				<div className={Styles.CreateCourseRow2}>
					<p style={{ textAlign: 'center', padding: '0 0 40px 0' }}>Authors:</p>

					{authors[0] ? (
						authors.map((item, index) => (
							<div className={Styles.AuthorName} key={item.id}>
								<span>{item.name}</span>
								<Button
									onClick={(event) => {
										event.preventDefault();
										setAuthorsOut([...authorsOut, item]);
										setAuthors(authors.filter((i) => i !== item));
									}}
									buttontext='Add author'
								></Button>
							</div>
						))
					) : (
						<div className={Styles.AuthorOutput}>Authors list is empty</div>
					)}

					<p style={{ textAlign: 'center', margin: '40px 0 20px 0' }}>
						Course authors:
					</p>

					{authorsOut[0] ? (
						authorsOut.map((item) => (
							<div className={Styles.AuthorName} key={item.id}>
								<span>{item.name}</span>
								<Button
									onClick={(event) => {
										event.preventDefault();
										setAuthors([...authors, item]);
										setAuthorsOut(authorsOut.filter((i) => i !== item));
									}}
									buttontext='Delete author'
								></Button>
							</div>
						))
					) : (
						<div className={Styles.AuthorOutput}>Authors list is empty</div>
					)}
				</div>
			</div>
		</div>
	);
}
