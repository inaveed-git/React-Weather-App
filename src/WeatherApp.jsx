import { useState } from "react";
import SearchBox from "./SearchBox";
import WeatherInfo from "./WeatherInfo";
import './WeatherApp.css'; // Import the new CSS file

function WeatherApp() {
    let [weather, setWeather] = useState({
        name: "New York",
        feels_like: 24.42,
        humidity: 30,
        icon: "01d",
        sunrise: "12:15:22 AM",
        sunset: "2:22:58 PM",
        temp: 25.07,
        temp_max: 25.07,
        temp_min: 25.07,
        weather: "broken clouds"
    });

    let updateInfo = (result) => {
        setWeather(result);
    };

    return (
        <div className="app-container">
            <div className="search-weather-container">
                <SearchBox updateInfo={updateInfo} />
                <WeatherInfo info={weather} />
            </div>
        </div>
    );
}

export default WeatherApp;
