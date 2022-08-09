import { useId } from 'react';

export default function AddNewAuthor(name) {
	const id = useId();
	console.log(id);
	return {
		id: `${id}`,
		name: `${name}`,
	};
}
