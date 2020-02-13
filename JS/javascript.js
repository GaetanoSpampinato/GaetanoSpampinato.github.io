"use strict";

window.addEventListener("load", Initieer);

var sponsors = Sponsors;

var sponsorsArea;
var fullDescription;

function Initieer() {
  // DOM elementen ophalen
  sponsorsArea = document.querySelector("#sponsorsArea");
  fullDescription = document.querySelector("#fullDescription");

  // Events

  //Functies
  VulSponsors();
  VisibleOrNot();
}

function VulSponsors() {
  sponsorsArea.innerHTML = "";
  let openingsuren = "";

  for (let sponsor in sponsors["Brugge"]) {
    for (let i = 0; i < sponsors["Brugge"][sponsor].Openingsuren.length; i++) {
      if (i < sponsors["Brugge"][sponsor].Openingsuren.length) {
        openingsuren += `${sponsors["Brugge"][sponsor].Openingsuren[i]}<br />`;
      } else {
        openingsuren += `${sponsors["Brugge"][sponsor].Openingsuren[i]}`;
      }
    }

    let sponsorObject = document.createElement("button");
    sponsorObject.innerHTML = `
    <article class="contain">
      <div class="description">
        <h2>${sponsors["Brugge"][sponsor].Naam}</h2>
        <p>${sponsors["Brugge"][sponsor].Straat}</p>
        <p>${openingsuren}</p>
        <a class="phoneNumber" href="tel:${sponsors["Brugge"][sponsor].TelefoonData}"><b>${sponsors["Brugge"][sponsor].TelefoonText}</b></a>
      </div>
      <div class="imageContainer" style="background-image: url('./img/${sponsors["Brugge"][sponsor].Foto}');"></div>
    </article>`;

    openingsuren = "";

    sponsorObject.id = sponsors["Brugge"][sponsor].Naam;
    sponsorObject.addEventListener("click", SponsorDetails);
    sponsorsArea.append(sponsorObject);
  }
}

function SponsorDetails() {}

function VisibleOrNot() {
  if (fullDescription.innerHTML == "") {
    fullDescription.style.display = "none";
  } else {
    fullDescription.style.display = "block";
  }
}
