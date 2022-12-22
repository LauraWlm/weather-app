// select date 
var d = new Date();
var n = d.toLocaleDateString();
document.getElementById("main__card__date").innerHTML = n;


//fonction d'appel de l'api
let APIKEY = 'd7ca8fa659de616e6e402bdfe795f4c6'
function apiCall (city) {
let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${APIKEY}&units=metric`

fetch(url)
    .then(resp => resp.json()
    .then(data => {

// ICON
const i = data.list[0].weather[0].description;
    if (i == 'broken clouds') {
        document.getElementById('main__card__icon').src = './assets/icon/wi-cloudy.svg';
    }
    else if (i == 'moderate rain','light rain') {
        document.getElementById('main__card__icon').src = './assets/icon/wi-rain.svg';
    }
    else if (i == 'clear sky', 'scattered clouds') {
        document.getElementById('main__card__icon').src = './assets/icon/wi-cloud.svg';
    } 
    else 
        document.getElementById('main__card__icon').src = './assets/icon/wi-sunset.svg';

// Autres éléments de la card
    document.querySelector('#main__card__city').innerHTML = data.city.name;
    document.querySelector('#main__card__degrees').innerHTML= data.list[0].main.temp + ' °C';
    document.querySelector('#main__card__condition').innerHTML = data.list[0].weather[0].description;
    //console.log(data);
    })
    )
    .catch((err)=> console.log('Erreur : ' + err));

}

// submit du formulaire = écouteur d'evenement
    document.querySelector('form').addEventListener('submit', function (e){
    e.preventDefault();
    let selectCity = document.querySelector('#inputLoca').value;

    apiCall(selectCity);
});

//Appel par défaut au chargement de la page
    apiCall('Brussels');


// display background 

function getImage (city) {
    let apiKey = 'aSWcN1Sy-zHvqUur-djC6LbeowT1v8mKVGYorM96Apg'
    let unsplash = `https://api.unsplash.com/search/photos?query=${city}&APPID=${apiKey}` 
    
    fetch(unsplash)
    .then(photo => photo.json()
    .then(photo => {
        document.querySelector('body').innerHTML = photo.urls.full;
        console.log(photo_list)
    })
    )
    .catch((err)=> console.log('Erreur : ' + err));
}
    getImage();