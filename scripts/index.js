const userInput = document.getElementById('userInput');
const temperature = document.getElementById('temperatureText');
const realFeel = document.getElementById('realFeelText');
const percipitation = document.getElementById('precipitationText');
const windSpeed = document.getElementById('windSpeedText');
const submit = document.getElementById('submit')
const searchQuery = document.getElementById('loc_input');
const loca = document.getElementById('location')
const dTime = document.getElementById('dTime')


const dMaxTemp = document.getElementById('tempMaxText')
const dMinTemp = document.getElementById('tempMinText')
const dRealFeelMax = document.getElementById('realFeelMaxText')
const dRealFeelMin = document.getElementById('realFeelMinText')
const dWindSpeed = document.getElementById('dwindSpeedText')
const dPrecipProb = document.getElementById('precipProbText')

const weatherResults = document.getElementById("weather-results")




async function getLocation(location) {
    try {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json`);
        const data = await response.json();
        const result = data.results[0];

        return {
            name: result.name,
            lat: result.latitude,
            lon: result.longitude

        }
    }
    catch (err) {
        console.error('Error fetching data', err)
    }
}


async function getWeather(location) {
    const { lat, lon, name } = await getLocation(location);
    //console.log(lat,lon,name)
    const url = new URL("https://api.open-meteo.com/v1/forecast");
    url.search = new URLSearchParams({
        latitude: lat,
        longitude: lon,
        forecast_days: 4,
        temperature_unit: 'fahrenheit',
        current: 'temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m',
        daily: 'weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_probability_max,wind_speed_10m_max',
        timezone: 'auto'
    });
    const response = await fetch(url);
    const data = await response.json();

    // console.log(data.current);
    // console.log(data.daily)
    // console.log(name)
    console.log(data)
    return {
        name,
        current: data.current,
        daily: data.daily
    }

}
console.log(temperature)


// console.log(getWeather('New York City'))

userInput.addEventListener('submit', async e => {
    e.preventDefault()
    // temperature.textContent = current.temperature_2m
    // console.log(temperature)
    userInput.classList.add("hidden")
    const input = searchQuery.value;

    data = await getWeather(input)
    current = data.current

    temperature.textContent = current.temperature_2m;
    realFeel.textContent = "Real Feel: " +current.apparent_temperature;
    percipitation.innerText = 'Precipitation: '+current.precipitation;
    windSpeed.textContent = 'Wind Speed: ' +current.wind_speed_10m;
    console.log(current)
    console.log(data.daily)
    daily = data.daily
    dTime.innerText = current.time
    loca.innerText = data.name



    const dayDiv = document.getElementById('daily')
    dayDiv.classList.add("container")
    // for (day in daily){
    console.log(Object.values(daily))
    // for (i in Object.values(daily)){
    //     console.log(i)
    // }

    // console.log(daily.temperature_2m_max[0])
    const indexes = [0, 1, 2, 3]
    const keys = ["time","weather_code","temp_daily_max", "temp_daily_min",
        "apparent_max","apparent_min", "daily_percip", "daily_wind"
    ]
    const row = document.createElement('div')
    row.classList.add("row")
    // row.classList.add("g-lg-5")
    // row.classList.add("")


    
    // dayDiv.append(row)

   
    indexes.forEach(index => {
        let i = 0
        const card = document.createElement('div')
        card.classList.add("col-md-3")
        card.classList.add("col-sm-6")
        

        card.classList.add("justify-content-center")
        card.classList.add("card")



    ///KEEPPP
        Object.values(daily).forEach(value =>{
            if(keys[i] != "weather_code"){
            const temp = document.createElement('p')
            temp.innerText = keys[i] + ":" + value[index]
            card.append(temp)}
            i=i+1
            
        })

        i = 0
        row.append(card)

    })
    weatherResults.classList.remove("hidden")
    weatherResults.classList.add("active")
    dayDiv.append(row)
})