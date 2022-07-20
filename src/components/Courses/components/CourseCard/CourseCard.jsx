// rfc
import React, { useState } from 'react';
import Button from '../../../../common/Button/Button';
import Styles from './CourseCard.module.css';

function CourseCard({
	title,
	description,
	creationDate,
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

	authors.forEach((key, index) => {
		authorsList.forEach((element) => {
			if (element.id === key) {
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
