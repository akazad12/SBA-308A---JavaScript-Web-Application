import * as methods from './apiFunctions.mjs'
import {
  userInput,
  temperature,
  realFeel,
  percipitation,
  windSpeed,
  submit,
  searchQuery,
  loca,
  dTime,
  dMaxTemp,
  dMinTemp,
  dRealFeelMax,
  dRealFeelMin,
  dWindSpeed,
  dPrecipProb,
  weatherResults
} from "./elements.mjs"





console.log(temperature)



userInput.addEventListener('submit', async e => {
    e.preventDefault()
    // temperature.textContent = current.temperature_2m
    // console.log(temperature)
    userInput.classList.add("hidden")
    const input = searchQuery.value;

    const data = await methods.getWeather(input)
    const current = data.current

    temperature.textContent = current.temperature_2m;
    realFeel.textContent = "Real Feel: " +current.apparent_temperature;
    percipitation.innerText = 'Precipitation: '+current.precipitation;
    windSpeed.textContent = 'Wind Speed: ' +current.wind_speed_10m;
    console.log(current)
    console.log(data.daily)
    const daily = data.daily
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
        //TODO
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