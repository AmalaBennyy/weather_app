
const inputName = document.getElementById('inputname');
const result = document.getElementById('result');

const refreshButton = document.getElementById("refreshButton");

        refreshButton.addEventListener("click", function () {
            // Reload the current page
            location.reload();
        });


        let backgroundImages = {
            
            ' rain': 'images/rain.jpg',
            'very heavy rain': 'images/rain.jpg',
            'light rain':'images/rain.jpg',
            'heavy intensity rain':'images/rain.jpg',
            'moderate rain':'images/rain.jpg',
            'Thunderstorm': 'thunderstorm.jpg',
            'snow': 'images/snow.jpg',
            'overcast clouds': ' images/cloudy.jpg',
            'clear sky': 'images/clearSky.jpg',
            'mist': 'images/mist.jpg',
            'scattered clouds': 'images/sc.jpg',
            'smoke':'images/smoke.jpg',
            'haze':'images/haze.jpg',
            'broken clouds':'images/sc.jpg',
            'few clouds':'images/few.jpg',
            
        };

const search = async () => {
    
    const cityName = inputName.value;
    console.log(cityName);

    if (cityName) {
        
        const apiKey = '211df42a84aa2c4b1628dae04be22b32';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            console.log(data);

           

            const humidity = data.main.humidity;
            const pressure = data.main.pressure;
            const country = data.sys.country;
            const windSpeed = data.wind.speed;
            const temperature = data.main.temp - 273.15;
            const temperatureCelsius = temperature.toFixed(1);
            const feelsLike = data.main.feels_like - 273.15;
            const feelsLikeCelsius = feelsLike.toFixed(1);
          
            const currentWeather = data.weather[0].description;
            if (currentWeather in backgroundImages) {
                const imageUrl = backgroundImages[currentWeather];
                document.querySelector('.weather').style.backgroundImage = `url(${imageUrl})`;
            }

            // Get the current date and time
            const currentDate = new Date().toLocaleString();

            

            document.querySelector(".city").innerHTML= "CITY: " +data.name
            document.querySelector(".country").innerHTML="COUNTRY: " +country
            document.querySelector(".humidity").innerHTML="HUMIDITY:" +humidity
            document.querySelector(".pressure").innerHTML="PRESSURE:" +pressure
            document.querySelector(".wind").innerHTML="WIND: " +windSpeed+"km/h"
            document.querySelector(".temp").innerHTML="TEMPERATURE: " +temperatureCelsius+"°C"
            document.querySelector(".feels").innerHTML="Feels like: " +feelsLikeCelsius+"°C"
            document.querySelector(".current").innerHTML="Weather: " +currentWeather
            document.querySelector(".date").innerHTML="Date&Time: " +currentDate
           

        } catch (error) {
            console.error('An error occurred:', error);
        }
    }
};




       