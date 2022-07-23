import React, { useId } from 'react';
import styles from './Input.module.css';

export default function Input({ labelText, placeholdetText }) {
	const id = useId();
	return (
		<div className={styles.inputBody}>
			<label htmlFor={id}>{labelText}</label>
			<input
				className={styles.input}
				id={id}
				type='text'
				placeholder={placeholdetText}
			/>
		</div>
	);
}
