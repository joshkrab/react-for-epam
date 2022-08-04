import React, { useId } from 'react';
import Styles from './Textarea.module.css';

export default function Textarea({ labelText, placeholder }) {
	const id = useId();
	return (
		<div className={Styles.Textarea}>
			<label htmlFor={id}>{labelText}</label>
			<textarea placeholder={placeholder} id={id}></textarea>
		</div>
	);
}
