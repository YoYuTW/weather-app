import './style.css';
import getWeather from './getWeather';
import { createNewElement, appendChildren } from './create-new-element'
import { format } from 'date-fns'

const searchBar = createNewElement('div','searchBar',[]);

const locationInput = createNewElement('input','',[]);
locationInput.setAttribute('name', 'city');
locationInput.setAttribute('placeholder', 'Enter a city to get weather!');
locationInput.setAttribute('autocomplete', 'nope');
document.body.appendChild(locationInput);

const searchBtn = createNewElement('div','search',[]);
searchBtn.addEventListener('click', renderWeather) ;
searchBtn.innerHTML = '🔎'
appendChildren(searchBar,[locationInput,searchBtn]);

const result = createNewElement('div', 'result', []);

const city = createNewElement('div', 'city', ['center']);

const timeBlock = createNewElement('div', 'timeBlock', ['center']);

const weatherBlock = createNewElement('div', 'weather', ['center']);

const tempBlock = createNewElement('div', 'tempBlock', ['center']);
const temp = createNewElement('div', 'temp', []);

const tempInformation = createNewElement('div', 'tempInfo', []);
const tempFeelsLikeText = createNewElement('div', '', ['text']);
tempFeelsLikeText.innerHTML = 'FEELS LIKE';
const tempFeelsLike = createNewElement('div', '', ['info']);
const windText = createNewElement('div', '', ['text']);
windText.innerHTML = 'WIND';
const wind = createNewElement('div', '', ['info']);
const humidityText = createNewElement('div', '', ['text']);
humidityText.innerHTML = 'HUMIDITY';
const humidity = createNewElement('div', '', ['info']);
appendChildren(tempInformation, [tempFeelsLikeText, tempFeelsLike, windText, wind, humidityText, humidity]);

appendChildren(tempBlock, [temp, tempInformation]);

appendChildren(result, [city, timeBlock, weatherBlock, tempBlock]);

document.body.appendChild(searchBar);
document.body.appendChild(result);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter'){
    renderWeather();
  };
});
renderWeather();

function renderWeather() {
  getWeather().then(resolve => {
    console.log(resolve);
    let rightNow = new Date().getTime() + (resolve.timezone - 28800)*1000;
    city.innerHTML = `${resolve.name}. ${resolve.sys.country}`;
    timeBlock.innerHTML = format(rightNow, 'MM/dd HH:mm');
    weatherBlock.innerHTML = resolve.weather[0].main;
    temp.innerHTML = `${Math.floor(resolve.main.temp - 273)}°C`;
    tempFeelsLike.innerHTML = `${Math.floor(resolve.main.feels_like - 273)}°C`;
    wind.innerHTML = `${resolve.wind.speed} m/s`;
    humidity.innerHTML = `${resolve.main.humidity} %`;
    document.getElementsByName('city')[0].value = '';
  })
  .catch(reject => alert('ERROR: CITY NOT FOUND'));
};