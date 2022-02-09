export default async function getWeather() {
  try{
    let locationInput = document.getElementsByName('city')[0].value;
    let location = locationInput ? locationInput : 'taipei';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.appid}`;
    let response = await fetch(url);    
    let weatherData = response.json();
    return weatherData
  } catch(error) {
    console.error(error);
  }  
}
