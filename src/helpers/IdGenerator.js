import { useId } from 'react';

export const IdGenerator = () => {
	const id = useId();
	console.log('id = ', id);
	return id;
};
