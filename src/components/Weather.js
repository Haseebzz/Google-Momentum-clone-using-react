import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {WeatherContainer, Temp, City} from './WeatherStyles'

const Weather = () => {
    const[data,setData] = useState(null);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=New York&units=imperial&appid=2714f087543f56c91613129fbbe1f4dd`

useEffect( ()=>{
   axios.get(url).then((response) =>{
    setData(response.data)
   }).catch((error)=>{
    console.log('error');
   })

},[])
console.log(data);
if(!data) return null;

  return (
    <WeatherContainer>
        <Temp>{Math.floor(data.main.temp) +'°F'}</Temp>
        <City>Brooklyn, NY</City>
    </WeatherContainer>
  )
}

export default Weather