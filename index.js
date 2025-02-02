const apiKey="9d18815c227f4021be3bec67dea8b9c8";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")
 async function checkWeather(city){
   const response= await fetch(apiUrl + city+ `&appid=${apiKey}`);
   if(!response.ok){
    throw new Error("Invalid City Name")
   }
   const data = await response.json();
   return data
   
}
searchbtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value).then((mydata)=>{
        console.log(mydata)
        document.querySelector(".city").innerHTML=mydata.name
        document.querySelector(".temp").innerHTML= Math.round(mydata.main.temp)+"°C"
        document.querySelector(".humidity").innerHTML=mydata.main.humidity+"%"
        document.querySelector(".wind").innerHTML=mydata.wind.speed+"Km/h"
        if(mydata.weather[0].main==="cloudy"){
            weatherIcon.src="assest/clouds.png";
        }
        else if(mydata.weather[0].main.toLowerCase()==="clear"){
            weatherIcon.src="assest/clear.png";
        }
        else if(mydata.weather[0].main.toLowerCase()==="drizzle"){
            weatherIcon.src="assest/drizzle.png";
        }
        else if(mydata.weather[0].main.toLowerCase()==="humidity"){
            weatherIcon.src="assest/humidity.png";
        }
        else if(mydata.weather[0].main.toLowerCase()==="mist"){
            weatherIcon.src="assest/mist.png";
        }
        else if(mydata.weather[0].main.toLowerCase()==="rain"){
            weatherIcon.src="assest/rain.png";
        }
        else if(mydata.weather[0].main.toLowerCase()==="snow"){
            weatherIcon.src="assest/snow.png";
        }
        else if(mydata.weather[0].main.toLowerCase()==="wind"){
            weatherIcon.src="assest/wind.png";
        }
        document.querySelector(".weather").style.display="block";
     }).catch((error)=>{
        alert(error)
     })
})
 