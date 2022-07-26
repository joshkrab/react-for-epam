// rfc
import React from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

const SearchBar = ({ inputValue, setInputValue, setPosts, posts }) => {
	function searchPosts(event) {
		event.preventDefault();
		if (inputValue) {
			setPosts(
				posts.filter((i) => {
					return i.title.toLowerCase().includes(inputValue.toLowerCase());
				})
			);
		}
	}

	function isInputValue(event) {
		console.log('В інпуті: ', event.target.value);
		setInputValue(event.target.value);
		if (event.target.value === '') {
			setPosts(posts);
		}
	}

	return (
		<div className='search-bar'>
			<Input
				value={inputValue}
				placeholder='Enter course name...'
				onChange={isInputValue}
			/>
			<Button onClick={searchPosts} buttontext='Search'></Button>
		</div>
	);
};

export default SearchBar;
