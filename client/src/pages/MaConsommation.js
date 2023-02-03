import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import BarChart from '../components/BarChart'
import LineChart from '../components/LineChart';
import PieChart from '../components/PieChart';
import{UserData} from './Data'
import myGif from '../assets/light-logo.gif' ;
import compteur from '../assets/compteur.png';
import ad from '../assets/nouveau.png'
import emailjs from '@emailjs/browser';
import './MaConsommation.css'

const MaConsommation = () => {
	
	const [counter,setCounter] =useState(100);
	const templateParams = {
		to_name: 'Khouloud',
		from_name: 'Watt',
		message_html: 'hello khouloud'
	  }; 

	const increaseConsumption =() =>{
		setCounter(counter + 100);
		if(counter >=500)
			{
			alert('email.sent');
			emailjs.send("service_8vokf4k","template_jxzw1el",templateParams,'nxfOOCBx-p2TaHE96')
			.then(function(response) {
      			console.log('SUCCESS!', response.status, response.text);
				
    		}, function(error) {
      			console.log('FAILED...', error);})
			}
	};
	
return (
	
	<div className='consumption'>
			<div className='bodies'>
				<img src={myGif} className="logo-image"/>
				<h1 className='intro'>Cet hiver avec WATT?, nous prenons les bonnes mesures pour assurer à tous un bon approvisionnement en électricité.</h1>
				<h1 className='suivie'>Avec Watt vous pouvez consulter votre consommation annuelle et mensuelle ainsi que la: </h1>
				<div className='graphic-box'>
					<div className='chart' >
					<BarChart />
					</div>
					<div className='chart' >
						<LineChart />
					</div>
				</div>
				<div className='chart2'>
					<PieChart />
				</div>

				<div className='nouveau'>
					<span></span>
					<img src={ad} className="ad-image"style={{width:350}}/>
					<h1>Vous pouvez dés maintenant consultez votre compteur en temps réel et vous recevrez <br/>un email si vous dépassez le seuil maximale mensuel </h1>
				</div>
				
				<div className='compteur'>
					<img src={compteur} className="compteur-image"style={{width:400,zIndex:1}}/>
						<button className='btn-compteur' onClick={increaseConsumption}></button>
						<div className='val-compteur'>{counter}</div>
				</div>

				
			</div>
		</div>
);
};

export default MaConsommation;
