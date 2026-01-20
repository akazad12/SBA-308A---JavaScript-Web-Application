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

export{
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
}
