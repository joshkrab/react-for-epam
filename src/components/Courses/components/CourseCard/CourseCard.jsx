// rfc
import React, { useState } from 'react';
import Button from '../../../../common/Button/Button';
import Styles from './CourseCard.module.css';

function CourseCard({
	title,
	creationDate,
	description,
	authors,
	duration,
	authorsList,
}) {
	const [newAuthors, setNewAuthors] = useState(authors);

	function getTime(mins) {
		const hours = Math.trunc(mins / 60);
		const minutes = mins % 60;
		return `${hours}:${minutes} hours`;
	}

	// Перебираємо пропс авторів поточного поста - там масив з двома айдішниками
	authors.forEach((key, index) => {
		// Перебираємо повний масив авторів/айдішників
		authorsList.forEach((element) => {
			// Якщо даний айтем то наш айді/автор
			if (element.id === key) {
				// Додаємо в стан авторів по індексу значення поля name
				setNewAuthors([...authors, (authors[index] = element.name)]);
			}
		});
	});

	return (
		<div className={Styles.courseCard}>
			<div className={Styles.column1}>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<div className={Styles.column2}>
				<p>
					<span>Authors:</span> {newAuthors.join(', ')}
				</p>
				<p>
					<span>Duration:</span> {getTime(duration)}
				</p>
				<p>
					<span>Created:</span> {creationDate.split('/').join('.')}
				</p>
				<Button buttonText='Show course' />
			</div>
		</div>
	);
}

export default CourseCard;
