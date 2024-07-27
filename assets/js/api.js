

'use strict'
const api_key="0c19e3860644ddcbcfdebc9aa662ec5e";
export const fetchData=function(URL,callback){
    fetch(`${URL}&appid=${api_key}`).then(res=>res.json())
    .then(data=>callback(data));
}


// https://api.openweathermap.org/data/2.5/weather?lat=23.7644025&lon=90.389015&units=metric&appid=0c19e3860644ddcbcfdebc9aa662ec5e
//https://api.openweathermap.org/data/2.5/weather?23.7644025&90.389015&units=metric&appid=0c19e3860644ddcbcfdebc9aa662ec5e
export const url={
    currentWeather(lat,lon){
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
        
    },
    forecast(lat,lon){
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    airPollution(lat,lon){
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },
    reverseGeo(lat,lon){
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },
    geo(query){
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}

