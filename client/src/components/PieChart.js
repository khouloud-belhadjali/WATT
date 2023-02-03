import{PolarArea} from "react-chartjs-2";
import React ,{useState}from "react";
import{UserData} from '../pages/Data';
import { Chart as ChartJS } from "chart.js/auto";
function PieChart(){
    const [userData,setUserData] = useState(
		{
			labels: UserData.map((data)=> data.jour),
			datasets: [
				{
					label:"Votre consommation par jour",
					data: UserData.map((data)=> data.UserGain),
					backgroundColor: [
						'rgba(255, 99, 132, 0.4)',  // Bar 1
						'rgba(54, 162, 235, 0.4)',  // Bar 2
						'rgba(255, 206, 86, 0.4)',  // Bar 3
						'rgba(75, 192, 192, 0.4)',  // Bar 4
					],
					borderWidth: 2,
					borderColor: 'black'
				}
			]
		}
	)
return <PolarArea data={userData} />

}
export default PieChart;