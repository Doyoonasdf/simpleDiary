import { useState } from 'react';

const DiaryEditor = () => {
	const [author, setAuthor] = useState('');
	const [content, setContent] = useState('');

	return (
		<div className='DiaryEditor'>
			<h2>오늘의 일기</h2>
			<div>
				<input
					name='author'
					value={author}
					onChange={(e) => {
						// console.log(e.target.value);
						// console.log(e.target.name);
						setAuthor(e.target.value);
					}}
				/>
			</div>
			<div>
				<textarea
					value={content}
					onChange={(e) => {
						setContent(e.target.value);
					}}
				/>
				{/* <textarea
					name=''
					id=''
					cols='30'
					rows='10'
					value={content}
					onChange={(e) => {
						setContent(e.target.value);
						console.log(e.target.value);
					}}
				></textarea> */}
			</div>
		</div>
	);
};
export default DiaryEditor;
