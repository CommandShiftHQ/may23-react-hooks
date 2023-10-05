import React, { useState, useEffect } from 'react';

const MyComponent = () => {
	const [count, setCount] = useState(0);

	const [person, setPerson] = useState({
		name: 'Hasnaat',
		location: 'Manchester',
	});

	const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

	const [myName, setMyName] = useState('Stu');

	const incrementHandler = () => {
		setCount((prevState) => prevState + 1);
	};

	const nameChangeHandler = () => {
		setPerson((prevState) => {
			return {
				...prevState,
				location: 'Liverpool',
			};
		});
	};

	const numberChangeHandler = () => {
		setNumbers((prevState) => {
			return [...prevState, 6];
		});
	};

	useEffect(() => {
		console.log('Component Mounted inside useEffect');
		setMyName('Hasnaat');

		return () => {
			console.log('Component Unmounted');
		};
	}, [count]);

	// useEffect(() => {
	// 	console.log('useEffect depends on count');
	// }, [count, person, numbers]);

	// console.log('Component Mounted');

	return (
		<div>
			<p>Count is {count}</p>
			<button onClick={incrementHandler}>Increment</button>

			<p>My name is {person.name}</p>
			<p>My location is {person.location}</p>
			<button onClick={nameChangeHandler}>Change Name</button>

			<p>My numbers are {numbers}</p>
			<button onClick={numberChangeHandler}>Add Number</button>

			<p>Name is {myName}</p>
		</div>
	);
};

export default MyComponent;
