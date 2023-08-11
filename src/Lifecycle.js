import React, { useEffect, useState } from 'react';

const Lifecycle = () => {
	const [count, setCount] = useState(0);
	const [text, setText] = useState('');

	useEffect(() => {
		console.log('Mount');
	}, []);

	useEffect(() => {
		console.log('Update');
	});
	useEffect(() => {
		console.log(`Count Is Update : ${count}`);
	}, [count]);

	useEffect(() => {
		console.log(`TEXT Is Update : ${text}`);
	}, [text]);
	return (
		<div style={{ padding: 20 }}>
			<div>
				{count}
				<button onClick={() => setCount(count + 1)}>+</button>
			</div>

			<div>
				<input value={text} onChange={(e) => setText(e.target.value)} />
			</div>
		</div>
	);
};

export default Lifecycle;
