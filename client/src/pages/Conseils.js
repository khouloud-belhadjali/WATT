import React, { useState } from 'react';
import Advices from './Advices';
import './Conseils.css'
const Conseils = () => {
	const[advices,setAdvice] = useState(Advices[0]);
	const getAdvice=()=>{
		let randomNum= Math.floor(Math.random() * Advices.length);
		setAdvice(Advices[randomNum])
	}
return (
	<>
	<div className='bg'>
	
		<div className='box2'>
			<span></span>
			<div>
			<h1>Conseil Numéro {advices.id}</h1>
			<h2>"{advices.advice}"</h2>
				<a className='btn' onClick={getAdvice}>
					Next</a>
			</div>
			
			
			
		</div>
	</div>
	
	</>
);
};

export default Conseils;
