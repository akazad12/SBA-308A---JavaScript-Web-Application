const userInput = document.getElementById('userInput');
const temperature = document.getElementById('temperatureTxt');
const realFeel = document.getElementById('realFeelTxt');
const percipitation = document.getElementById('percipitationTxt');
const windSpeed = document.getElementById('windSpeedTxt');
const submit = document.getElementById('submit')



async function getLocation(location){
    try {
    const response = await fetch (`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json`);
    const data = await response.json();
    const result = data.results[0];

    return {
        name: result.name,
        lat: result.latitude,
        lon: result.longitude

    }}
    catch (err){
        console.error('Error fetching data',err)
    }
}


async function getWeather(location){
    const {lat,lon,name} = await getLocation(location);
    console.log(lat,lon,name)
    const url = new URL("https://api.open-meteo.com/v1/forecast");
    url.search = new URLSearchParams({
        latitude:lat,
        longitude:lon,
        forecast_days:3,
        temperature_unit:'fahrenheit',
        current:'temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m',
        daily: 'weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_probability_max,wind_speed_10m_max',
        timezone: 'auto'
    });
    const response = await fetch(url);
    const data = await response.json();

    console.log(data.current);
    console.log(data.daily)
    console.log(name)
    return{
        name,
        current: data.current,
        daily: data.daily
    }

}
console.log(temperature)


console.log(getWeather('New York City'))

userInput.addEventListener('submit',async e=>{
    e.preventDefault()
    temperature.innerText = 100
    console.log(temperature)


})