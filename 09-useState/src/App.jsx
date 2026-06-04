// import React from 'react'
import { useState } from 'react';

const App = () => {

   const [number, setNumber] = useState(0);
		const [name, setName] = useState('ehsan');

    function changenumber() {
      setNumber(number + 1)
      setName('ehsan ali')
    }


const [num, setNum] = useState(0);

function increaseNum() {
	setNum(num + 1);
}

function decreaseNum() {
	setNum(num - 1);
}



  return (
		<div>
			<h1>value of number: {number}</h1>
			<h1>value of name: {name}</h1>
			<button onClick={changenumber}>change number</button>

			<h1>{num}</h1>
			<button onClick={increaseNum}>increase</button>
			<button onClick={decreaseNum}>decrease</button>
		</div>
	);
}

export default App