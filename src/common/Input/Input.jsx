import React, { useId } from 'react';
import styles from './Input.module.css';

export default function Input(props) {
	const id = useId();
	let type;
	if (props.type) {
		type = props.type;
	} else {
		type = 'text';
	}
	return (
		<div className={styles.inputBody}>
			<label className={styles.label} htmlFor={id}>
				{props.labeltext}
			</label>
			<input
				{...props}
				className={styles.input}
				id={id}
				type={type}
				placeholder={props.placeholder}
			/>
		</div>
	);
}
