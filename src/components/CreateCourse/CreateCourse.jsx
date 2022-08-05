import React, { useState } from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import Textarea from '../../common/Textarea/Textarea';
import Styles from './CreateCourse.module.css';

export default function CreateCourse({ isCourses, setIsCourses }) {
	const [duration, setDuration] = useState('00:00');

	const mockedAuthorsList = [
		{
			id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			name: 'Vasiliy Dobkin',
		},
		{
			id: 'f762978b-61eb-4096-812b-ebde22838167',
			name: 'Nicolas Kim',
		},
		{
			id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
			name: 'Anna Sidorenko',
		},
		{
			id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
			name: 'Valentina Larina',
		},
	];

	const [authors, setAuthors] = useState([...mockedAuthorsList]);
	const [authorsOut, setAuthorsOut] = useState([]);

	return (
		<div className={Styles.CreateCourse}>
			<div className={Styles.headerRow}>
				<Input labeltext='Title' placeholder='Enter title...' />
				<Button
					buttontext='Create course'
					onClick={(event) => {
						event.preventDefault();
						setIsCourses(true);
					}}
				></Button>
			</div>
			<Textarea labelText='Description' placeholder='Enter description' />
			<div className={Styles.CreateCourseBody}>
				<div className={Styles.CreateCourseRow1}>
					<p style={{ textAlign: 'center', padding: '0 0 20px 0' }}>
						Add author
					</p>
					<Input
						style={{ margin: '0 0 20px 0', width: '100%' }}
						labeltext='Author name'
						placeholder='Enter author name...'
					/>
					<Button
						style={{ margin: '0 0 40px 0' }}
						buttontext='Create author'
					></Button>
					<p style={{ textAlign: 'center', padding: '0 0 20px 0' }}>Duration</p>
					<Input
						style={{ margin: '0 0 20px 0', width: '100%' }}
						labeltext='Duration'
						placeholder='Enter duration in minutes...'
						onChange={(event) => {
							setDuration(event.target.value);
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
