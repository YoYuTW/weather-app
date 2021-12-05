export default async function getWeather() {
  try{
    let locationInput = document.getElementsByName('city')[0].value;
    let location = locationInput ? locationInput : 'taipei';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=42cf269e158e8ec78f48c3095855c4c9`;
    let response = await fetch(url);    
    let weatherData = response.json();
    return weatherData
  } catch(error) {
    console.error(error);
  }  
}
