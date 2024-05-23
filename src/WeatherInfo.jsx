/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './WeatherInfo.css';

function WeatherInfo({ info }) {
    return (
        <div className="main-weather-box">
            <Card sx={{ maxWidth: 400, width: '90%', bgcolor: '#fafafa', borderRadius: 2, boxShadow: 3 }} className="weatherCard">
                <CardMedia
                    sx={{ height: 152, backgroundColor: '#e0f7fa' }}
                    image={`https://openweathermap.org/img/wn/${info.icon}@2x.png`}
                    title={info.weather}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <div className="weather-details">
                            <p>Temperature: {info.temp}°C</p>
                            <p>Max Temperature: {info.temp_max}°C</p>
                            <p>Min Temperature: {info.temp_min}°C</p>
                            <p>Feels Like: {info.feels_like}°C</p>
                            <p>Humidity: {info.humidity}%</p>
                            <p>Weather: {info.weather}</p>
                            <p>Sunrise: {info.sunrise}</p>
                            <p>Sunset: {info.sunset}</p>
                        </div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default WeatherInfo;
