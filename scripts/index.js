// const locationInput = document.getElementById('location-input');
// const locationCoord = document.getElementById('location-coordinates');

async function getLocation(location){
    try {
    const response = await fetch (`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json`);
    const data = await response.json();
    console.log(data)
    const result = data;

    return {
        name: result.name,
        lat: result.latitude,
        lon: result.longitude

    }}
    catch (err){
        console.error('Error fetching data',err)
    }
}

console.log(getLocation('Savannah'))