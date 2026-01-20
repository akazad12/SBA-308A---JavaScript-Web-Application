// const locationInput = document.getElementById('location-input');
// const locationCoord = document.getElementById('location-coordinates');

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

// getLocation('Savannah')

async function getWeather(location){
    const {lat,lon,name} = await getLocation(location);
    console.log(lat,lon,name)
    const url = `https://api.open-meteo.com/v1/forecast
    ?latitude=${lat}
    &longitude=${lon}
    &temperature_unit=fahrenheit
    &current=temperature_2m,precipitation
    &hourly = temperature_2m, apparent_temperature, precipitation_probability, precipitation,weather_code
    `.replace(/\s+/g, "");
    const response = await fetch(url);
    const data = await response.json();

    console.log(data.current);
    console.log(data.hourly)

}
async function processData(location){
    const finalResult = await getWeather(location);
    console.log(finalResult);
}



console.log(getWeather('New York City'))