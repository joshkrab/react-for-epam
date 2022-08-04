import React, { useState } from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import Textarea from '../../common/Textarea/Textarea';
import Styles from './CreateCourse.module.css';

export default function CreateCourse() {
	const [duration, setDuration] = useState('00:00');
	const [autorsOut, setAutorsOut] = useState('Authors list is empty');

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

	return (
		<div className={Styles.CreateCourse}>
			<div className={Styles.headerRow}>
				<Input labelText='Title' placeholder='Enter title...' />
				<Button buttontext='Create course'></Button>
			</div>
			<Textarea labelText='Description' placeholder='Enter description' />
			<div className={Styles.CreateCourseBody}>
				<div className={Styles.CreateCourseRow1}>
					<p style={{ textAlign: 'center', padding: '0 0 20px 0' }}>
						Add author
					</p>
					<Input
						style={{ margin: '0 0 20px 0', width: '100%' }}
						labelText='Author name'
						placeholder='Enter author name...'
					/>
					<Button
						style={{ margin: '0 0 40px 0' }}
						buttontext='Create author'
					></Button>
					<p style={{ textAlign: 'center', padding: '0 0 20px 0' }}>Duration</p>
					<Input
						style={{ margin: '0 0 20px 0', width: '100%' }}
						labelText='Duration'
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
					<p style={{ textAlign: 'center', padding: '0 0 40px 0' }}>Authors</p>
					{mockedAuthorsList.map((item) => (
						<div className={Styles.AuthorName} key={item.id}>
							<span>{item.name}</span>
							<Button buttontext='Add author'></Button>
						</div>
					))}
					<p style={{ textAlign: 'center', margin: '40px 0 20px 0' }}>
						Course authors
					</p>
					<div className={Styles.AuthorOutput}>{autorsOut}</div>
				</div>
			</div>
		</div>
	);
}
