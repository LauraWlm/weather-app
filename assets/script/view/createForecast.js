//create card element
export function createWeatherCard(date, degrees, condition, icons) {

    let wkCard = document.createElement("div");
    wkCard.classList.add("newdiv");
    let wkDegrees = document.createElement("h3");
    let wkDate = document.createElement("h4");
    let wkCondi = document.createElement("h5");
    let wkIcon = document.createElement("img");
  
    wkDate.innerText = date;
    wkDegrees.innerText = `${degrees} °C`;
    wkCondi.innerText = condition;
    wkIcon.src = icons

    wkCard.appendChild(wkDate);
    wkCard.appendChild(wkDegrees);
    wkCard.appendChild(wkCondi);
    wkCard.appendChild(wkIcon);

  
    return wkCard;
  }