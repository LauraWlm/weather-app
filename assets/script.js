let h5 = document.querySelector('#main__card__condition');
let button = document.querySelector('#header__btn')

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


    
//fonction d'appel de l'api----------------------------------
let APIKEY = 'd7ca8fa659de616e6e402bdfe795f4c6'
function apiCall (city) {
let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${APIKEY}&units=metric`

fetch(url)
    .then(resp =>  resp.json())
    .then(json => {
        localStorage.setItem("data",JSON.stringify(json))
        console.log(json);
//------ICON-------------------------------------------

    const i = json.list[0].weather[0].main;
    const l = document.getElementById('main__card__icon');
         if (i == 'Clouds') {
             l.src = './assets/icon/cloudy.svg';
         }
        else if (i == 'Rain') {
            l.src = './assets/icon/cloud-rain.svg';
         }
        else if (i == 'Clear') {
            l.src = './assets/icon/cloud-sun.svg';
        } 
        else if (i == 'Snow') {
            l.src = './assets/icon/cloud-snow.svg';
        } 
         else if (i == 'Extreme') {
            l.src = './assets/icon/cloud-lightning-rain.svg';
         } 
        else 
             l.src = './assets/icon/brightness-high.svg';

    //  éléments de la card-------------------------------
    document.querySelector('#main__card__city').innerHTML = json.city.name;
    document.querySelector('#main__card__degrees').innerHTML= json.list[0].main.temp + ' °C';
    document.querySelector('#main__card__condition').innerHTML = json.list[0].weather[0].main;
    
    // select date 
    let d = new Date();
    let n = d.toLocaleDateString();
    document.getElementById("main__card__date").innerHTML = n;

    //add 5 days   
    let arrDay = [8, 16, 24, 32, 39];
    for (let elem of arrDay){ 
    let wkCard = document.createElement('div"');
    let wkDay = document.createElement('h2');
    let wkDegrees = document.createElement('h3');
    let wkDate = document.createElement('h4');
    let wkCondi = document.createElement('h5')
    
   
    wkDate.innerText=  json.list[elem].dt_txt;
    wkDay.innerText = json.list[elem].


    wkCard.appendChild(wkDate);
    wkCard.appendChild(wkDay);
    wkCard.appendChild(wkDegrees);
    wkCard.appendChild(wkCondi);
    main.appendChild(wkCard);


    }
    }

    )


.catch((err)=> console.log('Erreur : ' + err));

}



// submit du formulaire = écouteur d'evenement--------------------------------------
    button.addEventListener('click', function (e){
    e.preventDefault();   
    let selectCity = document.querySelector('#inputLoca').value;
    apiCall(selectCity);
    });

//Appel par défaut au chargement de la page------------------------------------------
    apiCall('Brussels');




//---------plus 5 jours------------------------------------------------
//const fiveDays = [data.list[0], data.list[8], data.list[16], data.list[24], data.list[32]]

  


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