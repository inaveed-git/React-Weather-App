/* eslint-disable react/prop-types */

import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import Alert from "@mui/material/Alert";

function SearchBox({ updateInfo }) {
    const [city, setSearch] = useState("");
    const [error, setError] = useState("");

    const API_KEY = "95364f871dfdb7c2a4e579cfbf0d5b21";

    const checkWeather = async () => {
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        try {
            const fetchResponse = await fetch(API_URL);
            if (!fetchResponse.ok) {
                throw new Error("City not found");
            }
            const response = await fetchResponse.json();
            const showResult = {
                name: response.name,
                feels_like: response.main.feels_like,
                humidity: response.main.humidity,
                temp: response.main.temp,
                temp_max: response.main.temp_max,
                temp_min: response.main.temp_min,
                weather: response.weather[0].description,
                icon: response.weather[0].icon,
                sunrise: convertUnixTime(response.sys.sunrise),
                sunset: convertUnixTime(response.sys.sunset),
            };

            // eslint-disable-next-line no-inner-declarations
            function convertUnixTime(unixTime) {
                const date = new Date(unixTime * 1000);
                let hours = date.getUTCHours();
                const minutes = date.getUTCMinutes();
                const ampm = hours >= 12 ? "PM" : "AM";
                hours = hours % 12 || 12;
                return `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${ampm}`;
            }

            return showResult;
        } catch (err) {
            setError(err.message);
        }
    };

    const handleDataChange = (e) => {
        setSearch(e.target.value);
    };

    const submitChange = async (e) => {
        e.preventDefault();
        setError("");
        const newInfo = await checkWeather();
        if (newInfo) {
            updateInfo(newInfo);
            setSearch("");
        }
    };

    return (
        <div className="main">
            <form className="searchBox" onSubmit={submitChange}>
                <TextField
                    id="outlined-basic"
                    className="searchinput"
                    label="City"
                    variant="outlined"
                    value={city}
                    onChange={handleDataChange}
                    sx={{ m: 2 }}
                    required
                />
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
            </form>
        </div>
    );
}

export default SearchBox;
