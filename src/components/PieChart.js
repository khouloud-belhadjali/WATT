import{Pie} from "react-chartjs-2";
import React ,{useState}from "react";
import{UserData} from '../pages/Data'
function PieChart({charData}){
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
						'rgba(153, 102, 255, 0.2)', // Bar 5
						'rgba(255, 159, 64, 0.2)'   // Bar 6
					],
					borderWidth: 2,
					borderColor: 'black'
				}
			]
		}
	)
return <Pie data={userData} />

}
export default PieChart;