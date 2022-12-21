let APIKEY = 'd7ca8fa659de616e6e402bdfe795f4c6'

//fonction d'appel de l'api
function apiCall (city) {

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}&units=metric`

fetch(url)
.then(resp => resp.json()
.then(data => {
    document.querySelector('#main__card__city').innerHTML = data.name;
    document.querySelector('#main__card__degrees').innerHTML= data.main.temp + ' <i class="wi wi-celsius"></i> ';
    document.querySelector('#main__card__condition').innerHTML = data.weather[0].description;
    document.querySelector('#main__card__date').innerHTML = data.dt;

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
apiCall('Brussels')