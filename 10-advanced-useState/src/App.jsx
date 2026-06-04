// import React from 'react'
import { useState } from 'react';

const App = () => {
    const [num, setNum] = useState({ user: 'Sarthak', age: 20 });

    const btnClicked = () => {
        const newNum = { ...num };
        newNum.user = 'Aman';
        newNum.age = 29;
        setNum(newNum);
    }



    const [numb, setNumb] = useState([10, 20, 30]);

		const btnbClicked = () => { 
			const newNumb = [...numb];
			newNumb.push(99);
			setNumb(newNumb);
		};



    const [abc, setAbc] = useState({ user: 'Rishi', age: 17 });

		const abcClicked = () => {
			 setAbc((prev) => ({ ...prev, age: 50 })); // “Take the previous object, copy everything, and replace (or update) the age property with 50.” Simple way to remember: “Copy everything, then update age.”
      // const newAbc = { ...abc };
      // newAbc.age = 50;
      // setAbc(newAbc);
		};


		const [def, setDef] = useState(10);

		const defClicked = () => {
			// setDef(def + 1);
			// setDef(def + 1);  wrongmethod
			// setDef(def + 1);
			setDef((prev) => prev + 1);
			setDef((prev) => prev + 1);
			setDef((prev) => prev + 1);
		};

   

    return (
			<div>

				<h1>{num.user}, {num.age}</h1>
				<button onClick={btnClicked}>click</button>

				<h1>{numb}</h1>
				<button onClick={btnbClicked}>click</button>


				<h1>{abc.user}, {abc.age}</h1>
				<button onClick={abcClicked}>click</button>

				<h1>{def}</h1>
				<button onClick={defClicked}>click</button>


			</div>
		);
}

export default App;
