//create card element
export function createWeatherCard(date, degrees, condition) {

    let wkCard = document.createElement("div");
    wkCard.classList.add("newdiv");
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