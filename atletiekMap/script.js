'use strict';

// kies een land
const NL = document.getElementById('NL');
const BE = document.getElementById('BE');
const kiesbtn = document.querySelector('.kies__btn');
const header = document.querySelector('.header__tekst');

// zoeken van een club
const zoekstring = document.querySelector('.zoekstring');
const zoekbtn = document.querySelector('.zoek__btn');

// render club info
const clubInfo = document.querySelector('.container__clubinfo');
const clubNaam = document.querySelector('.clubnaam');
const clubStraat = document.querySelector('.clubstraat');
const clubPlaats = document.querySelector('.clubplaats');
const clubWeb = document.querySelector('.clubweb');

// global variable
let landKeuze = clubsNL;

const map = L.map('map', {
  center: [52.100832, 5.339165],
  zoom: 10,
});

// render van de kaart
const renderMap = function (clubs) {
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  clubs.forEach(function (e) {
    L.marker(e.clubCoords)
      .addTo(map)
      .bindPopup(
        L.popup({
          autoClose: false,
          closeOnClick: false,
        })
      )
      .setPopupContent(e.naam)
      .openPopup();
  });
};

// zoeken van club op kaart
zoekbtn.addEventListener('click', function (e) {
  e.preventDefault();

  const zoekStr = zoekstring.value;
  zoekstring.value = '';

  landKeuze.forEach(e => {
    const vindNaam = e.naam;

    if (vindNaam.toLowerCase().includes(zoekStr.toLowerCase())) {
      map.setView(e.clubCoords, 12, {
        animate: true,
        pan: {
          duration: 2,
        },
      });
      clubInfo.classList.remove('hidden');
      clubNaam.textContent = vindNaam;
      clubStraat.textContent = e.straat;
      clubPlaats.textContent = `${e.pc}  -  ${e.plaats}`;
      clubWeb.textContent = e.web;
    }
  });
});

// kies een land
kiesbtn.addEventListener('click', function () {
  clubInfo.classList.add('hidden');
  if (NL.checked == true) {
    landKeuze = clubsNL;
    NL.setAttribute('checked', '');
    BE.removeAttribute('checked', '');
    header.textContent = 'Atletiekbanen in Nederland';
  } else {
    landKeuze = clubsBE;
    NL.removeAttribute('checked', '');
    BE.setAttribute('checked', '');
    header.textContent = 'Atletiekbanen in Belgie';
  }
  renderMap(landKeuze);
});

// eerste render
renderMap(BE == 'checked' ? clubsBE : clubsNL);
