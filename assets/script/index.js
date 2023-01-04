import {selectDate} from './modules/date.js';

let ville = document.querySelector("#main__card__city");
let temperature = document.querySelector("#main__card__degrees");
let condition = document.querySelector("#main__card__condition");
let button = document.querySelector("#header__btn");
let icon = document.querySelector("#main__card__icon");


//create card element
function createWeatherCard(date, degrees, condition) {

  let wkCard = document.createElement("div");
  let wkDegrees = document.createElement("h3");
  let wkDate = document.createElement("h4");
  let wkCondi = document.createElement("h5");

  wkDate.innerText = date;
  wkDegrees.innerText = `${degrees} °C`;
  wkCondi.innerText = condition;

  wkCard.appendChild(wkDate);
  wkCard.appendChild(wkDegrees);
  wkCard.appendChild(wkCondi);

  return wkCard;
}

/*const applyIcon = (weather, position) => {
    if (weather == "Clouds") {
    position.src = "./assets/icon/cloudy.svg";
  } else if (weather == "Rain") {
    position.src = "./assets/icon/cloud-rain.svg";
  } else if (weather == "Clear") {
    position.src = "./assets/icon/cloud-sun.svg";
  } else if (weather == "Snow") {
    position.src = "./assets/icon/cloud-snow.svg";
  } else if (weather == "Extreme") {
    position.src = "./assets/icon/cloud-lightning-rain.svg";
  } else position.src = "./assets/icon/brightness-high.svg";
}*/

//fonction d'appel de l'api
let APIKEY = "d7ca8fa659de616e6e402bdfe795f4c6";
function apiCall(city) {
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${APIKEY}&units=metric`;

  fetch(url)
    .then((resp) => resp.json())
    .then((json) => {
      localStorage.setItem("data", JSON.stringify(json));
      console.log(json);

      /* ancienne méthode pour les ICON
      const icon = json.list[0].weather[0].main;
      const position = document.getElementById("main__card__icon");
      applyIcon(icon, position);*/
  
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

/*
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

    */


