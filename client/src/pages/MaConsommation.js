import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import BarChart from '../components/BarChart'
import LineChart from '../components/LineChart';
import PieChart from '../components/PieChart';
import{UserData} from './Data'
import myGif from '../assets/light-logo.gif' ;
import compteur from '../assets/compteur.png';
import emailjs from '@emailjs/browser'

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
	
	<>
        <style>{'body {  background: linear-gradient(#0c1022 9%, #ffff 40%) fixed;}'}</style>
		<img src={myGif}
            className="header--image"
			style={{width:200,marginLeft:10,marginTop:100,position:'absolute'}}/>
		<h1 style={{marginLeft:150,marginTop:100 , fontFamily:'fantasy',fontWeight:'bold' ,letterSpacing:9, }}>Cet hiver avec WATT?, nous prenons les bonnes mesures pour assurer à tous un bon approvisionnement en électricité.</h1>
		
		<h1 style={{marginLeft:300,marginTop:200 ,fontFamily:'fantasy',fontWeight:'bold'}}>Jetez un oeil à votre consommation d'électricité annuelle.</h1>
		<div style={{marginLeft:300,marginTop:90 ,width:700}}>
		<BarChart />
		</div>

		<h1 style={{marginLeft:300,marginTop:200 ,fontFamily:'fantasy',fontWeight:'bold'}}>Votre consommation d'électricité mensuelle.</h1>
		<div style={{marginLeft:300,marginTop:100 ,width:700}}>
		<LineChart />
		</div>

		<h1 style={{marginLeft:300,marginTop:150 ,fontFamily:'fantasy',fontWeight:'bold'}}>Votre consommation d'électricité quotidiennes.</h1>
		<div style={{marginLeft:400,marginTop:120 ,width:500}}>
		<PieChart />
		</div>
		<h1 style={{marginLeft:500,marginTop:150 ,fontFamily:'fantasy',fontWeight:'bold'}}>Votre compteur à l'instant.</h1>
		<div style={{marginLeft:500,marginTop:120 ,width:500}}>
		<img src={compteur}
            className="compteur-image"
			style={{width:400,zIndex:1}}/>
			<button className='btn-compteur' onClick={increaseConsumption}></button>
			<div className='val-compteur'>{counter}</div>
			{}
			
		</div>
		


	</>
);
};

export default MaConsommation;
