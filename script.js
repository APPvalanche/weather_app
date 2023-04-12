let weather = {
    "apiKey": "8a7ccf21788953d33359588d8f5e75a3",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            +"&units=metric&appid=" 
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => console.log(data));
    },
    displayWeather: function(data) {
        
    }
};