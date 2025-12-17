async function getWeather(event) {
    event.preventDefault();

    let latitude = parseFloat(document.getElementById("latitude").value);
    let longitude = parseFloat(document.getElementById("longitude").value);
    let weatherResult = document.getElementById("weatherResult");

    let url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=fahrenheit`;

    let response = await fetch(url);
    let data = await response.json();

    weatherResult.textContent = `The current temperature is ${data.current_weather.temperature} °F`;
    weatherResult.style.display = "block";
}