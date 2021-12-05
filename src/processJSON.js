export default function processJSON(response) {
  try {
    let weatherData = response.then(resolve => resolve.json());    
    return console.log(weatherData)
  } catch(error) {
    alert(error);
  }
}