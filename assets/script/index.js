import {selectDate} from './model/date.js';
import {createWeatherCard} from './view/createForecast.js';
import {APP} from './model/app.js';
let ville = document.querySelector("#main__card__city");
let temperature = document.querySelector("#main__card__degrees");
let condition = document.querySelector("#main__card__condition");
let button = document.querySelector("#header__btn");
let icon = document.querySelector("#main__card__icon");

//fonction d'appel de l'api
let APIKEY = "d7ca8fa659de616e6e402bdfe795f4c6";
function apiCall(city) {
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${APP.APIKEY.openWeatherKey}&units=metric`;

  fetch(url)
    .then((resp) => resp.json())
    .then((json) => {
      localStorage.setItem("data", JSON.stringify(json));
      console.log(json);

      //  éléments de la card
      ville.innerHTML = json.city.name;
      temperature.innerHTML = json.list[0].main.temp + " °C";
      condition.innerHTML = json.list[0].weather[0].main;
      icon.src = `http://openweathermap.org/img/wn/${json.list[0].weather[0].icon}@2x.png`;
    

      //Appel Date
      let getDate = selectDate();
      document.getElementById("main__card__date").innerHTML = getDate;

      //add 5 days
      let arrDay = [8, 16, 24, 32, 39];
      for (let elem of arrDay) {
        let date = json.list[elem].dt_txt.split(" ")[0];
        let degrees = json.list[elem].main.temp;
        let condition = json.list[elem].weather[0].main;    
      
        let wkCard = createWeatherCard(date, degrees, condition);
       
        main.appendChild(wkCard);
      }
    })

    .catch((err) => console.log("Erreur : " + err));
}

// submit du formulaire = écouteur d'evenement-
button.addEventListener("click", function (e) {
  e.preventDefault();
  let selectCity = document.querySelector("#inputLoca").value;
  apiCall(selectCity);
});

//Appel par défaut au chargement de la page-
apiCall("Brussels");

