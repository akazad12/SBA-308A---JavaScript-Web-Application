# 4-Day Weather APP

A responsive, client-side weather application that allows users to search for a location and view current weather conditions along with a 4-day forecast. The app fetches data from a weather API (via a helper module) and dynamically updates the UI using vanilla JavaScript and ES modules.

## Demo Features
- Location-based weather search
- Current weather display:
    - Temperature (°F)
    - Real Feel (apparent temperature)
    - Precipitation
    - Wind speed
    - Date & time
- 4-day forcast are responsive cards
- Bootstrap - powered responsive layout
- Clean seperation of concerns using ES modules

## HTML Overview
The UI is contained in `index.html` and includes:

- A search form for location input
- A hidden results container that becomes visible after search
- A current weather section
- A dynamically populated daily forecast section

## JavaScript Overview
### index.mjs (Main Script)

- Listens for form submission
- Prevents page reload
- Calls `getWeather(location)`
- Updates current weather values
- Dynamically creates a row of forecast cards
- Reveals the results container once data is loaded

### apiFunctions.mjs

Handles all API-related work:
- Location lookup (latitude & longitude)
- Weather API request
- Returns structured data:
  ```js
  {
    name,
    current,
    daily
  }

## Technologies Used
- HTML 5
- CSS3
- JavaScript (ES Modules)
- Bootstrap 5.3
- Open-Meteo Weather API (open-source)

## Running Project
Open project in VS Code Server
- Right click `index.html` 
- Select Open with Live Server

## Future Improvements:
- Use `weather_code` to implement weather icons
- Add loading and error states
- Implement error handling for invalid locations

## Additional Functionality (in Progress)
- Returns what clothing user should be wearing based on the weather
- Articles of clothing that are considered for the user
    -headwear
    -inner
    -outter
    -bottoms
    -footwear
    -accessories (percipatation based)
- Implementation would be done with the use of another api that generates clothing that user should wear
