'use strict';

const zoekstring = document.querySelector('.zoekstring');
const zoekbtn = document.querySelector('.zoek__btn');

const middelCoords = [52.100832, 5.339165];

const map = L.map('map', { closePopupOnClick: false }).setView(
  middelCoords,
  10
);
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

zoekbtn.addEventListener('click', function (e) {
  e.preventDefault();

  const zoekStr = zoekstring.value;
  zoekstring.value = '';

  clubsNL.forEach(e => {
    const vindNaam = e.naam;

    if (vindNaam.toLowerCase().includes(zoekStr.toLowerCase())) {
      const zoekCoords = e.clubCoords;

      map.setView(zoekCoords, 12, {
        animate: true,
        pan: {
          duration: 2,
        },
      });
    }
  });
});

renderMap(clubsNL);
