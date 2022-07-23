// rfc
import React from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

const SearchBar = () => {
	return (
		<div className='search-bar'>
			<Input labelText='' placeholdetText='Enter course name...' />
			<Button buttonText='Search'></Button>
		</div>
	);
};

export default SearchBar;
