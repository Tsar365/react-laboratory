// import React from 'react'
import { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    alert(title);
    console.log("form submit hye gese::", title);
    setTitle('');
  };
  return (
		<div>
			<form
				onSubmit={(e) => {
					submitHandler(e);
				}}>
				<input
					type="text"
					placeholder="Enter your name"
					value={title}
					onChange={(e) => {
						console.log(e.target.value);
						setTitle(e.target.value);
					}}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default App