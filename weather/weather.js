let input = document.querySelector('input');
let key = '2554b12116510b217dd062a8eb423bea';
let btn = document.querySelector('.btn');
let output = document.querySelector('#output');

btn.addEventListener('click', displayWeather);

function displayWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}&units=metric`)
        .then((result) => {
            return result.json();
        })
        .then((result) => {
            output.innerText = `${result.name}: ${result.main.temp}°C`;
        })
        .catch((error) => {
            console.log(error);
        });
}