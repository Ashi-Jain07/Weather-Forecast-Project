//Extract the element 
const search_box = document.querySelector(".search-box");
const search_btn = document.querySelector(".search-btn");
const temperature = document.querySelector(".temperature");
const city_name = document.querySelector(".city");
const current_location_btn = document.querySelector(".current-locaton-btn");
const icon = document.querySelector(".temp-icon");
const img_para = document.querySelector(".img-para");
const wind = document.querySelector(".wind-div");
const humidity = document.querySelector(".humidity-div");
const visibility = document.querySelector(".visibility-div");
const pressure = document.querySelector(".pressure-div");
const inside_second_div = document.querySelector(".inside-second-div");
const recentCitiesContainer = document.getElementById('recent_cities_container');
const recentCitiesDropdown = document.getElementById('recent_cities');

//Create async-await function to show default weather data of city bhopal
async function fetch_default_data() {
    try{
        const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?&appid=90c51f7abd19cb02e569c385f85ac9ef&units=metric&q=bhopal");
        const result = await response.json();
        console.log(result);
       
        const uniqueforecastdays = [];
         
        //Use filter method to filter out only 5 day data from 5-days and 3-hours
        const fiveDaysData = result.list.filter(forecast => {
            const forecastDate = new Date(forecast.dt_txt).getDate();
            if(!uniqueforecastdays.includes(forecastDate))
            return uniqueforecastdays.push(forecastDate);
        })
        console.log(fiveDaysData);
        
        //Show the data on div
        temperature.innerHTML = Math.trunc(fiveDaysData[0].main.temp) + "°C";
        city_name.innerHTML = result.city.name;
        wind.innerHTML = fiveDaysData[0].wind.speed + "mi/h";
        humidity.innerHTML = fiveDaysData[0].main.humidity + "%";
        visibility.innerHTML = fiveDaysData[0].visibility + "mi";
        pressure.innerHTML = fiveDaysData[0].main.pressure + "hPa";

        //Apply else-if condition to show icon and background according to weather
        if(fiveDaysData[0].weather[0].main == "Clouds") {
            icon.src = "weather-icons/cloud-icon.png";
            img_para.innerHTML = "Cloudy";
            inside_second_div.style.backgroundImage = 'url("weather-icons/cloudy-background.jpg")';
            inside_second_div.style.backgroundSize = '100% 256px';
            inside_second_div.style.backgroundPosition = 'center';
        }
        else if(fiveDaysData[0].weather[0].main == "Clear") {
            icon.src = "weather-icons/clear-icon.png";
            img_para.innerHTML = "Clear";
            inside_second_div.style.backgroundImage = 'url("weather-icons/clear-background.jpg")';
            inside_second_div.style.backgroundSize = '100% 256px';
            inside_second_div.style.backgroundPosition = 'center';
        }
        else if(fiveDaysData[0].weather[0].main == "Rain") {
            icon.src = "weather-icons/rain-icon.png";
            img_para.innerHTML = "Rainy";
            img_para.style.color = "white"
            inside_second_div.style.backgroundImage = 'url("weather-icons/rain-background.jpg")';
            inside_second_div.style.backgroundSize = 'cover';
            inside_second_div.style.backgroundPosition = 'center';
            temperature.style.color = "white";
            city_name.style.color = "white";
            wind.style.color = "white";
            humidity.style.color = "white";
            visibility.style.color = "white";
            pressure.style.color = "white";
        }
        else if(fiveDaysData[0].weather[0].main == "Snow") {
            icon.src = "weather-icons/snow-icon.png";
            img_para.innerHTML = "Snow";
            inside_second_div.style.backgroundImage = 'url("weather-icons/snow-background.jpg")';
            inside_second_div.style.backgroundSize = 'cover';
            inside_second_div.style.backgroundPosition = 'center';
        }
        else if(fiveDaysData[0].weather[0].main == "Haze") {
            icon.src = "weather-icons/partly-cloudy-icon.png";
            img_para.innerHTML = "Partly Cloudy";
            inside_second_div.style.backgroundImage = 'url("weather-icons/partly-cloudy-background.jpg")';
            inside_second_div.style.backgroundSize = 'cover';
            inside_second_div.style.backgroundPosition = 'center';
        }

        //Display next 5 days data
        document.querySelector(".temp1").innerHTML = "Temp:" + Math.trunc(fiveDaysData[1].main.temp) +"°C";
        document.querySelector(".wind1").innerHTML = "Wind:" + fiveDaysData[1].wind.speed + "mi/h";
        document.querySelector(".humidity1").innerHTML = "Humidity:" + fiveDaysData[1].main.humidity + "%";

        if(fiveDaysData[1].weather[0].main == "Clouds") {
            document.querySelector(".next-1-img").src = "weather-icons/cloud-icon.png";
        }
        else if(fiveDaysData[1].weather[0].main == "Clear") {
            document.querySelector(".next-1-img").src = "weather-icons/clear-icon.png";
        }
        else if(fiveDaysData[1].weather[0].main == "Rain") {
            document.querySelector(".next-1-img").src = "weather-icons/rain-icon.png";
        }
        else if(fiveDaysData[1].weather[0].main == "Snow") {
            document.querySelector(".next-1-img").src = "weather-icons/snow-icon.png";
        }
        else if(fiveDaysData[1].weather[0].main == "Haze") {
            document.querySelector(".next-1-img").src = "weather-icons/partly-cloudy-icon.png";
        }

        document.querySelector(".date2").innerHTML = fiveDaysData[2].dt_txt.split(" ")[0];
        document.querySelector(".temp2").innerHTML = "Temp:" + Math.trunc(fiveDaysData[2].main.temp) +"°C";
        document.querySelector(".wind2").innerHTML = "Wind:" + fiveDaysData[2].wind.speed + "mi/h";
        document.querySelector(".humidity2").innerHTML = "Humidity:" + fiveDaysData[2].main.humidity + "%";
        if(fiveDaysData[2].weather[0].main == "Clouds") {
            document.querySelector(".next-2-img").src = "weather-icons/cloud-icon.png";
        }
        else if(fiveDaysData[2].weather[0].main == "Clear") {
            document.querySelector(".next-2-img").src = "weather-icons/clear-icon.png";
        }
        else if(fiveDaysData[2].weather[0].main == "Rain") {
            document.querySelector(".next-2-img").src = "weather-icons/rain-icon.png";
        }
        else if(fiveDaysData[2].weather[0].main == "Snow") {
            document.querySelector(".next-2-img").src = "weather-icons/snow-icon.png";
        }
        else if(fiveDaysData[2].weather[0].main == "Haze") {
            document.querySelector(".next-2-img").src = "weather-icons/partly-cloudy-icon.png";
        }
    
        document.querySelector(".date3").innerHTML = fiveDaysData[3].dt_txt.split(" ")[0];
        document.querySelector(".temp3").innerHTML = "Temp:" + Math.trunc(fiveDaysData[3].main.temp) +"°C";
        document.querySelector(".wind3").innerHTML = "Wind:" + fiveDaysData[3].wind.speed + "mi/h";
        document.querySelector(".humidity3").innerHTML = "Humidity:" + fiveDaysData[3].main.humidity + "%";
        if(fiveDaysData[3].weather[0].main == "Clouds") {
            document.querySelector(".next-3-img").src = "weather-icons/cloud-icon.png";
        }
        else if(fiveDaysData[3].weather[0].main == "Clear") {
            document.querySelector(".next-3-img").src = "weather-icons/clear-icon.png";
        }
        else if(fiveDaysData[3].weather[0].main == "Rain") {
            document.querySelector(".next-3-img").src = "weather-icons/rain-icon.png";
        }
        else if(fiveDaysData[3].weather[0].main == "Snow") {
            document.querySelector(".next-3-img").src = "weather-icons/snow-icon.png";
        }
        else if(fiveDaysData[3].weather[0].main == "Haze") {
            document.querySelector(".next-3-img").src = "weather-icons/partly-cloudy-icon.png";
        }
     
        document.querySelector(".date4").innerHTML = fiveDaysData[4].dt_txt.split(" ")[0];
        document.querySelector(".temp4").innerHTML = "Temp:" + Math.trunc(fiveDaysData[4].main.temp) +"°C";
        document.querySelector(".wind4").innerHTML = "Wind:" + fiveDaysData[4].wind.speed + "mi/h";
        document.querySelector(".humidity4").innerHTML = "Humidity:" + fiveDaysData[4].main.humidity + "%";
        if(fiveDaysData[4].weather[0].main == "Clouds") {
            document.querySelector(".next-4-img").src = "weather-icons/cloud-icon.png";
        }
        else if(fiveDaysData[4].weather[0].main == "Clear") {
            document.querySelector(".next-4-img").src = "weather-icons/clear-icon.png";
        }
        else if(fiveDaysData[4].weather[0].main == "Rain") {
            document.querySelector(".next-4-img").src = "weather-icons/rain-icon.png";
        }
        else if(fiveDaysData[4].weather[0].main == "Snow") {
         document.querySelector(".next-4-img").src = "weather-icons/snow-icon.png";
        }
        else if(fiveDaysData[4].weather[0].main == "Haze") {
            document.querySelector(".next-4-img").src = "weather-icons/partly-cloudy-icon.png";
        }

        document.querySelector(".date5").innerHTML = fiveDaysData[5].dt_txt.split(" ")[0];
        document.querySelector(".temp5").innerHTML = "Temp:" + Math.trunc(fiveDaysData[5].main.temp) +"°C";
        document.querySelector(".wind5").innerHTML = "Wind:" + fiveDaysData[5].wind.speed + "mi/h";
        document.querySelector(".humidity5").innerHTML = "Humidity:" + fiveDaysData[5].main.humidity + "%";
        if(fiveDaysData[5].weather[0].main == "Clouds") {
            document.querySelector(".next-5-img").src = "weather-icons/cloud-icon.png";
        }
        else if(fiveDaysData[5].weather[0].main == "Clear") {
            document.querySelector(".next-5-img").src = "weather-icons/clear-icon.png";
        }
        else if(fiveDaysData[5].weather[0].main == "Rain") {
            document.querySelector(".next-5-img").src = "weather-icons/rain-icon.png";
        }
        else if(fiveDaysData[5].weather[0].main == "Snow") {
            document.querySelector(".next-5-img").src = "weather-icons/snow-icon.png";
        }
        else if(fiveDaysData[5].weather[0].main == "Haze") {
            document.querySelector(".next-5-img").src = "weather-icons/partly-cloudy-icon.png";
        }
    } 
    //Handling error
    catch(Error) {     
        alert("Failed to fetch Data" + Error);
    }
}

fetch_default_data();

//Create a async-wait function to show input(given by user) city data
async function fetchApi(city) {
    if (!city) {
        alert("Please enter a city name.");
        return;
    }
    try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?&appid=90c51f7abd19cb02e569c385f85ac9ef&units=metric&q=" + city);
        if (!response.ok) {
            throw new Error("Invalid city name");
        }
        const result = await response.json();
        console.log(result);

        const uniqueforecastdays = [];
        
        //Use filter method to filter out only 5 day data from 5-days and 3-hours
        const fiveDaysData = result.list.filter(forecast => {
            const forecastDate = new Date(forecast.dt_txt).getDate();
            if(!uniqueforecastdays.includes(forecastDate))
            return uniqueforecastdays.push(forecastDate);
        })
        console.log(fiveDaysData);
       
        //Show data in div
        temperature.innerHTML =Math.trunc(fiveDaysData[0].main.temp) + "°C";
        city_name.innerHTML = result.city.name;
        wind.innerHTML = fiveDaysData[0].wind.speed + "mi/h";
        humidity.innerHTML = fiveDaysData[0].main.humidity + "%";
        visibility.innerHTML = fiveDaysData[0].visibility + "mi";
        pressure.innerHTML = fiveDaysData[0].main.pressure + "hPa";

        //Applying else-if condition to change icons and weather according to weather
        if(fiveDaysData[0].weather[0].main == "Clouds") {
            icon.src = "weather-icons/cloud-icon.png";
            img_para.innerHTML = "Cloudy";
            img_para.style.color = "black";
            inside_second_div.style.backgroundImage = 'url("weather-icons/cloudy-background.jpg")';
            inside_second_div.style.backgroundSize = '100% 256px';
            inside_second_div.style.backgroundPosition = 'center';
            temperature.style.color = "black";
            city_name.style.color = "black";
            wind.style.color = "black";
            humidity.style.color = "black";
            visibility.style.color = "black";
            pressure.style.color = "black";

        }
        else if(fiveDaysData[0].weather[0].main == "Clear") {
            icon.src = "weather-icons/clear-icon.png";
            img_para.innerHTML = "Clear";
            img_para.style.color = "black";
            inside_second_div.style.backgroundImage = 'url("weather-icons/clear-background.jpg")';
            inside_second_div.style.backgroundSize = '100% 256px';
            inside_second_div.style.backgroundPosition = 'center';
            temperature.style.color = "black";
            city_name.style.color = "black";
            wind.style.color = "black";
            humidity.style.color = "black";
            visibility.style.color = "black";
            pressure.style.color = "black";

        }
        else if(fiveDaysData[0].weather[0].main == "Rain") {
            icon.src = "weather-icons/rain-icon.png";
            img_para.innerHTML = "Rainy";
            img_para.style.color = "white";
            inside_second_div.style.backgroundImage = 'url("weather-icons/rain-background.jpg")';
            inside_second_div.style.backgroundSize = 'cover';
            inside_second_div.style.backgroundPosition = 'center';
            temperature.style.color = "white";
            city_name.style.color = "white";
            wind.style.color = "white";
            humidity.style.color = "white";
            visibility.style.color = "white";
            pressure.style.color = "white";

        }
        else if(fiveDaysData[0].weather[0].main == "Snow") {
            icon.src = "weather-icons/snow-icon.png";
            img_para.innerHTML = "Snow";
            img_para.style.color = "black";
            inside_second_div.style.backgroundImage = 'url("weather-icons/snow-background.jpg")';
            inside_second_div.style.backgroundSize = 'cover';
            inside_second_div.style.backgroundPosition = 'center';
            temperature.style.color = "black";
            city_name.style.color = "black";
            wind.style.color = "black";
            humidity.style.color = "black";
            visibility.style.color = "black";
            pressure.style.color = "black";

        }
        else if(fiveDaysData[0].weather[0].main == "Haze") {
            icon.src = "weather-icons/partly-cloudy-icon.png";
            img_para.innerHTML = "Partly Cloudy";
            img_para.style.color = "black";
            inside_second_div.style.backgroundImage = 'url("weather-icons/partly-cloudy-background.jpg")';
            inside_second_div.style.backgroundSize = 'cover';
            inside_second_div.style.backgroundPosition = 'center';
            temperature.style.color = "black";
            city_name.style.color = "black";
            wind.style.color = "black";
            humidity.style.color = "black";
            visibility.style.color = "black";
            pressure.style.color = "black";

        }

        //Display next five days data
        document.querySelector(".temp1").innerHTML = "Temp:" + Math.trunc(fiveDaysData[1].main.temp) +"°C";
        document.querySelector(".wind1").innerHTML = "Wind:" + fiveDaysData[1].wind.speed + "mi/h";
        document.querySelector(".humidity1").innerHTML = "Humidity:" + fiveDaysData[1].main.humidity + "%";

        if(fiveDaysData[1].weather[0].main == "Clouds") {
            document.querySelector(".next-1-img").src = "weather-icons/cloud-icon.png";
        }
        else if(fiveDaysData[1].weather[0].main == "Clear") {
            document.querySelector(".next-1-img").src = "weather-icons/clear-icon.png";
        }
        else if(fiveDaysData[1].weather[0].main == "Rain") {
            document.querySelector(".next-1-img").src = "weather-icons/rain-icon.png";
        }
        else if(fiveDaysData[1].weather[0].main == "Snow") {
            document.querySelector(".next-1-img").src = "weather-icons/snow-icon.png";
        }
        else if(fiveDaysData[1].weather[0].main == "Haze") {
            document.querySelector(".next-1-img").src = "weather-icons/partly-cloudy-icon.png";
        }

        document.querySelector(".date2").innerHTML = fiveDaysData[2].dt_txt.split(" ")[0];
        document.querySelector(".temp2").innerHTML = "Temp:" + Math.trunc(fiveDaysData[2].main.temp) +"°C";
        document.querySelector(".wind2").innerHTML = "Wind:" + fiveDaysData[2].wind.speed + "mi/h";
        document.querySelector(".humidity2").innerHTML = "Humidity:" + fiveDaysData[2].main.humidity + "%";
        if(fiveDaysData[2].weather[0].main == "Clouds") {
            document.querySelector(".next-2-img").src = "weather-icons/cloud-icon.png";
        }
        else if(fiveDaysData[2].weather[0].main == "Clear") {
            document.querySelector(".next-2-img").src = "weather-icons/clear-icon.png";
        }
        else if(fiveDaysData[2].weather[0].main == "Rain") {
            document.querySelector(".next-2-img").src = "weather-icons/rain-icon.png";
        }
        else if(fiveDaysData[2].weather[0].main == "Snow") {
            document.querySelector(".next-2-img").src = "weather-icons/snow-icon.png";
        }
        else if(fiveDaysData[2].weather[0].main == "Haze") {
            document.querySelector(".next-2-img").src = "weather-icons/partly-cloudy-icon.png";
        }
    
        document.querySelector(".date3").innerHTML = fiveDaysData[3].dt_txt.split(" ")[0];
        document.querySelector(".temp3").innerHTML = "Temp:" + Math.trunc(fiveDaysData[3].main.temp) +"°C";
        document.querySelector(".wind3").innerHTML = "Wind:" + fiveDaysData[3].wind.speed + "mi/h";
        document.querySelector(".humidity3").innerHTML = "Humidity:" + fiveDaysData[3].main.humidity + "%";
        if(fiveDaysData[3].weather[0].main == "Clouds") {
            document.querySelector(".next-3-img").src = "weather-icons/cloud-icon.png";
        }
        else if(fiveDaysData[3].weather[0].main == "Clear") {
            document.querySelector(".next-3-img").src = "weather-icons/clear-icon.png";
        }
        else if(fiveDaysData[3].weather[0].main == "Rain") {
            document.querySelector(".next-3-img").src = "weather-icons/rain-icon.png";
        }
        else if(fiveDaysData[3].weather[0].main == "Snow") {
            document.querySelector(".next-3-img").src = "weather-icons/snow-icon.png";
        }    
        else if(fiveDaysData[3].weather[0].main == "Haze") {
            document.querySelector(".next-3-img").src = "weather-icons/partly-cloudy-icon.png";
        }
     
        document.querySelector(".date4").innerHTML = fiveDaysData[4].dt_txt.split(" ")[0];
        document.querySelector(".temp4").innerHTML = "Temp:" + Math.trunc(fiveDaysData[4].main.temp) +"°C";
        document.querySelector(".wind4").innerHTML = "Wind:" + fiveDaysData[4].wind.speed + "mi/h";
        document.querySelector(".humidity4").innerHTML = "Humidity:" + fiveDaysData[4].main.humidity + "%";
        if(fiveDaysData[4].weather[0].main == "Clouds") {
            document.querySelector(".next-4-img").src = "weather-icons/cloud-icon.png";
        }
        else if(fiveDaysData[4].weather[0].main == "Clear") {
            document.querySelector(".next-4-img").src = "weather-icons/clear-icon.png";
        }
        else if(fiveDaysData[4].weather[0].main == "Rain") {
            document.querySelector(".next-4-img").src = "weather-icons/rain-icon.png";
        }
        else if(fiveDaysData[4].weather[0].main == "Snow") {
            document.querySelector(".next-4-img").src = "weather-icons/snow-icon.png";
        }
        else if(fiveDaysData[4].weather[0].main == "Haze") {
            document.querySelector(".next-4-img").src = "weather-icons/partly-cloudy-icon.png";
        }    

        document.querySelector(".date5").innerHTML = fiveDaysData[5].dt_txt.split(" ")[0];
        document.querySelector(".temp5").innerHTML = "Temp:" + Math.trunc(fiveDaysData[5].main.temp) +"°C";
        document.querySelector(".wind5").innerHTML = "Wind:" + fiveDaysData[5].wind.speed + "mi/h";
        document.querySelector(".humidity5").innerHTML = "Humidity:" + fiveDaysData[5].main.humidity + "%";
        if(fiveDaysData[5].weather[0].main == "Clouds") {
            document.querySelector(".next-5-img").src = "weather-icons/cloud-icon.png";
        }
        else if(fiveDaysData[5].weather[0].main == "Clear") {
            document.querySelector(".next-5-img").src = "weather-icons/clear-icon.png";
        }
        else if(fiveDaysData[5].weather[0].main == "Rain") {
            document.querySelector(".next-5-img").src = "weather-icons/rain-icon.png";
        }
        else if(fiveDaysData[5].weather[0].main == "Snow") {
            document.querySelector(".next-5-img").src = "weather-icons/snow-icon.png";
        }
        else if(fiveDaysData[5].weather[0].main == "Haze") {
            document.querySelector(".next-5-img").src = "weather-icons/partly-cloudy-icon.png";
        }

        // Save the city to local storage
        saveCityToLocalStorage(city);
        updateRecentCitiesDropdown();

    } 
    //Handling error
    catch (error) {
        if (error.message === "Invalid city name") {
            alert("Invalid city name. Please try again.");
        } else {
            alert("An error occurred while fetching the weather data. Please try again later.");
        }
    }
}

//Save city name to local storage
const saveCityToLocalStorage = (city) => {
    let cities = JSON.parse(localStorage.getItem('recentCities')) || [];
    if (!cities.includes(city)) {
        cities.push(city);
        localStorage.setItem('recentCities', JSON.stringify(cities));
    }
};

//Create a function to update city name
const updateRecentCitiesDropdown = () => {
    const cities = JSON.parse(localStorage.getItem('recentCities')) || [];
    recentCitiesDropdown.innerHTML = ''; // Clear previous options
    if (cities.length > 0) {
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            recentCitiesDropdown.appendChild(option);
        });
    }
};

//Addeventlistener on search button, recentCitiesDropdown div and search box
search_btn.addEventListener("click" , () => {
    fetchApi(search_box.value);
})

recentCitiesDropdown.addEventListener('change', () => {
    const selectedCity = recentCitiesDropdown.value;
    fetchApi(selectedCity);
});

search_box.addEventListener('focus', () => {
    updateRecentCitiesDropdown();
    if (recentCitiesDropdown.options.length > 0) {
        recentCitiesDropdown.style.display = 'block';
    }
});

search_box.addEventListener('blur', () => {
    setTimeout(() => {
        recentCitiesDropdown.style.display = 'none';
    }, 200); // Delay to allow click event to register
});
    
// Initialize dropdown on page load
updateRecentCitiesDropdown()

//Write a function to get current location of user
const getcity = () => {
    navigator.geolocation.getCurrentPosition(
        position => {
            console.log(position);
            const { latitude, longitude } = position.coords;
            const reverse_url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=90c51f7abd19cb02e569c385f85ac9ef&units=metric`;
            async function current_location() {
                const response = await fetch(reverse_url);
                const result = await response.json();
                console.log(result);
                const uniqueforecastdays = [];

                //Use filter method to filter out five days data
                const fiveDaysData = result.list.filter(forecast => {
                    const forecastDate = new Date(forecast.dt_txt).getDate();
                    if(!uniqueforecastdays.includes(forecastDate))
                    return uniqueforecastdays.push(forecastDate);
                })
                console.log(fiveDaysData);

                //show data on div
                temperature.innerHTML = Math.trunc(fiveDaysData[0].main.temp) + "°C";
                city_name.innerHTML = result.city.name;
                wind.innerHTML = fiveDaysData[0].wind.speed + "mi/h";
                humidity.innerHTML = fiveDaysData[0].main.humidity + "%";
                visibility.innerHTML = fiveDaysData[0].visibility + "mi";
                pressure.innerHTML = fiveDaysData[0].main.pressure + "hPa";

                //Applying elseif condition to change icon and background according to weather
                if(fiveDaysData[0].weather[0].main == "Clouds") {
                    icon.src = "weather-icons/cloud-icon.png";
                    img_para.innerHTML = "Cloudy";
                    img_para.style.color = "black";
                    inside_second_div.style.backgroundImage = 'url("weather-icons/cloudy-background.jpg")';
                    inside_second_div.style.backgroundSize = '100% 256px';
                    inside_second_div.style.backgroundPosition = 'center';
                    temperature.style.color = "black";
                    city_name.style.color = "black";
                    wind.style.color = "black";
                    humidity.style.color = "black";
                    visibility.style.color = "black";
                    pressure.style.color = "black";

                }
                else if(fiveDaysData[0].weather[0].main == "Clear") {
                    icon.src = "weather-icons/clear-icon.png";
                    img_para.innerHTML = "Clear";
                    img_para.style.color = "black";
                    inside_second_div.style.backgroundImage = 'url("weather-icons/clear-background.jpg")';
                    inside_second_div.style.backgroundSize = '100% 256px';
                    inside_second_div.style.backgroundPosition = 'center';
                    temperature.style.color = "black";
                    city_name.style.color = "black";
                    wind.style.color = "black";
                    humidity.style.color = "black";
                    visibility.style.color = "black";
                    pressure.style.color = "black";
                }
                else if(fiveDaysData[0].weather[0].main == "Rain") {
                    icon.src = "weather-icons/rain-icon.png";
                    img_para.innerHTML = "Rainy";
                    img_para.style.color = "white";
                    inside_second_div.style.backgroundImage = 'url("weather-icons/rain-background.jpg")';
                    inside_second_div.style.backgroundSize = 'cover';
                    inside_second_div.style.backgroundPosition = 'center';
                    temperature.style.color = "white";
                    city_name.style.color = "white";
                    wind.style.color = "white";
                    humidity.style.color = "white";
                    visibility.style.color = "white";
                    pressure.style.color = "white";
                }
                else if(fiveDaysData[0].weather[0].main == "Snow") {
                    icon.src = "weather-icons/snow-icon.png";
                    img_para.innerHTML = "Snow";
                    img_para.style.color = "black";
                    inside_second_div.style.backgroundImage = 'url("weather-icons/snow-background.jpg")';
                    inside_second_div.style.backgroundSize = 'cover';
                    inside_second_div.style.backgroundPosition = 'center';
                    temperature.style.color = "black";
                    city_name.style.color = "black";
                    wind.style.color = "black";
                    humidity.style.color = "black";
                    visibility.style.color = "black";
                    pressure.style.color = "black";

                }
                else if(fiveDaysData[0].weather[0].main == "Haze") {
                    icon.src = "weather-icons/partly-cloudy-icon.png";
                    img_para.innerHTML = "Partly Cloudy";
                    img_para.style.color = "black";
                    inside_second_div.style.backgroundImage = 'url("weather-icons/partly-cloudy-background.jpg")';
                    inside_second_div.style.backgroundSize = 'cover';
                    inside_second_div.style.backgroundPosition = 'center';
                    temperature.style.color = "black";
                    city_name.style.color = "black";
                    wind.style.color = "black";
                    humidity.style.color = "black";
                    visibility.style.color = "black";
                    pressure.style.color = "black";
                }

                //Display next five days data
                document.querySelector(".temp1").innerHTML = "Temp:" + Math.trunc(fiveDaysData[1].main.temp) +"°C";
                document.querySelector(".wind1").innerHTML = "Wind:" + fiveDaysData[1].wind.speed + "mi/h";
                document.querySelector(".humidity1").innerHTML = "Humidity:" + fiveDaysData[1].main.humidity + "%";

                if(fiveDaysData[1].weather[0].main == "Clouds") {
                    document.querySelector(".next-1-img").src = "weather-icons/cloud-icon.png";
                }
                else if(fiveDaysData[1].weather[0].main == "Clear") {
                    document.querySelector(".next-1-img").src = "weather-icons/clear-icon.png";
                }
                else if(fiveDaysData[1].weather[0].main == "Rain") {
                    document.querySelector(".next-1-img").src = "weather-icons/rain-icon.png";
                }
                else if(fiveDaysData[1].weather[0].main == "Snow") {
                    document.querySelector(".next-1-img").src = "weather-icons/snow-icon.png";
                }
                else if(fiveDaysData[1].weather[0].main == "Haze") {
                    document.querySelector(".next-1-img").src = "weather-icons/partly-cloudy-icon.png";
                }

                document.querySelector(".date2").innerHTML = fiveDaysData[2].dt_txt.split(" ")[0];
                document.querySelector(".temp2").innerHTML = "Temp:" + Math.trunc(fiveDaysData[2].main.temp) +"°C";
                document.querySelector(".wind2").innerHTML = "Wind:" + fiveDaysData[2].wind.speed + "mi/h";
                document.querySelector(".humidity2").innerHTML = "Humidity:" + fiveDaysData[2].main.humidity + "%";
                if(fiveDaysData[2].weather[0].main == "Clouds") {
                    document.querySelector(".next-2-img").src = "weather-icons/cloud-icon.png";
                }
                else if(fiveDaysData[2].weather[0].main == "Clear") {
                    document.querySelector(".next-2-img").src = "weather-icons/clear-icon.png";
                }
                else if(fiveDaysData[2].weather[0].main == "Rain") {
                    document.querySelector(".next-2-img").src = "weather-icons/rain-icon.png";
                }
                else if(fiveDaysData[2].weather[0].main == "Snow") {
                    document.querySelector(".next-2-img").src = "weather-icons/snow-icon.png";
                }
                else if(fiveDaysData[2].weather[0].main == "Haze") {
                    document.querySelector(".next-2-img").src = "weather-icons/partly-cloudy-icon.png";
                }
    
                document.querySelector(".date3").innerHTML = fiveDaysData[3].dt_txt.split(" ")[0];
                document.querySelector(".temp3").innerHTML = "Temp:" + Math.trunc(fiveDaysData[3].main.temp) +"°C";
                document.querySelector(".wind3").innerHTML = "Wind:" + fiveDaysData[3].wind.speed + "mi/h";
                document.querySelector(".humidity3").innerHTML = "Humidity:" + fiveDaysData[3].main.humidity + "%";
                if(fiveDaysData[3].weather[0].main == "Clouds") {
                    document.querySelector(".next-3-img").src = "weather-icons/cloud-icon.png";
                }
                else if(fiveDaysData[3].weather[0].main == "Clear") {
                    document.querySelector(".next-3-img").src = "weather-icons/clear-icon.png";
                }
                else if(fiveDaysData[3].weather[0].main == "Rain") {
                    document.querySelector(".next-3-img").src = "weather-icons/rain-icon.png";
                }
                else if(fiveDaysData[3].weather[0].main == "Snow") {
                    document.querySelector(".next-3-img").src = "weather-icons/snow-icon.png";
                }
                else if(fiveDaysData[3].weather[0].main == "Haze") {
                    document.querySelector(".next-3-img").src = "weather-icons/partly-cloudy-icon.png";
                }
     
                document.querySelector(".date4").innerHTML = fiveDaysData[4].dt_txt.split(" ")[0];
                document.querySelector(".temp4").innerHTML = "Temp:" + Math.trunc(fiveDaysData[4].main.temp) +"°C";
                document.querySelector(".wind4").innerHTML = "Wind:" + fiveDaysData[4].wind.speed + "mi/h";
                document.querySelector(".humidity4").innerHTML = "Humidity:" + fiveDaysData[4].main.humidity + "%";
                if(fiveDaysData[4].weather[0].main == "Clouds") {
                    document.querySelector(".next-4-img").src = "weather-icons/cloud-icon.png";
                }
                else if(fiveDaysData[4].weather[0].main == "Clear") {
                    document.querySelector(".next-4-img").src = "weather-icons/clear-icon.png";
                }
                else if(fiveDaysData[4].weather[0].main == "Rain") {
                    document.querySelector(".next-4-img").src = "weather-icons/rain-icon.png";
                }
                else if(fiveDaysData[4].weather[0].main == "Snow") {
                    document.querySelector(".next-4-img").src = "weather-icons/snow-icon.png";
                }
                else if(fiveDaysData[4].weather[0].main == "Haze") {
                    document.querySelector(".next-4-img").src = "weather-icons/partly-cloudy-icon.png";
                }

                document.querySelector(".date5").innerHTML = fiveDaysData[5].dt_txt.split(" ")[0];
                document.querySelector(".temp5").innerHTML = "Temp:" + Math.trunc(fiveDaysData[5].main.temp) +"°C";
                document.querySelector(".wind5").innerHTML = "Wind:" + fiveDaysData[5].wind.speed + "mi/h";
                document.querySelector(".humidity5").innerHTML = "Humidity:" + fiveDaysData[5].main.humidity + "%";
                if(fiveDaysData[5].weather[0].main == "Clouds") {
                    document.querySelector(".next-5-img").src = "weather-icons/cloud-icon.png";
                }
                else if(fiveDaysData[5].weather[0].main == "Clear") {
                    document.querySelector(".next-5-img").src = "weather-icons/clear-icon.png";
                }
                else if(fiveDaysData[5].weather[0].main == "Rain") {
                    document.querySelector(".next-5-img").src = "weather-icons/rain-icon.png";
                }
                else if(fiveDaysData[5].weather[0].main == "Snow") {
                    document.querySelector(".next-5-img").src = "weather-icons/snow-icon.png";
                }
                else if(fiveDaysData[5].weather[0].main == "Haze") {
                    document.querySelector(".next-5-img").src = "weather-icons/partly-cloudy-icon.png";
                }
            }

            current_location();

        },
        //Handling error
        Error => {
            console.log(Error);
            alert(Error);
        }
    );
}

current_location_btn.addEventListener("click", getcity);