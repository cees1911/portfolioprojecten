'use strict';

// navigator.geolocation.getCurrentPosition(
//   function (position) {
//     const { latitude } = position.coords;
//     const { longitude } = position.coords;
//     console.log(position);
//   },
//   function () {
//     alert('locatie kon niet worden gelezen pas browser aan');
//   }

//     const beginCoords = [latitude, longitude]);

const middelCoords = [52.100774, 5.646068];

const renderMap = function (clubs) {
  const map = L.map('map', { closePopupOnClick: false }).setView(
    middelCoords,
    10
  );

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

renderMap(clubsNL);
