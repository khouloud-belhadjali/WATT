import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import BarChart from '../components/BarChart'
import LineChart from '../components/LineChart';
import PieChart from '../components/PieChart';
import{UserData} from './Data'
import myGif from '../assets/light-logo.gif' ;
const MaConsommation = () => {
	
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
		
	</>
);
};

export default MaConsommation;
