(async function main() {
  const form = document.forms['form'];
  form.onsubmit = handleSubmit;

  await initialize();

})();


var map = L.map('map').setView([37.38605, -122.08385], 13);

var marker;
const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(map);


async function handleSubmit(event) {
  event.preventDefault();
  const ipAddress = form.ip.value;

  const res = await ipify(ipAddress);
  refreshUI(res);
}

async function initialize() {
  const res = await ipify('8.8.8.8');

  const { lat, lng } = res.location;
  const icon = L.icon({ iconUrl: './images/icon-location.svg' });
  marker = L.marker([lat, lng], { icon }).addTo(map);
  
  refreshUI(res);
}

function refreshUI({ location, isp, ip }) {
  const { timezone, lat, lng, region, country, postalCode } = location;
  positionMarker(lat, lng);

  $('#ip').innerText = ip;
  $('#isp').innerText = isp;
  $('#timezone').innerText = `UTC ${timezone}`;
  $('#location').innerText = `${region}, ${country} ${postalCode}`;
}

async function ipify(ipAddress) {
  const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_6L6NdauxsZ2DOZhAoqSEP4i9Uar19&ipAddress=${ipAddress}`);
  return await res.json();
}

function positionMarker(lat, lng) {
  marker.setLatLng([lat, lng]);
  map.setView([lat, lng]);
}

const $ = (selector) => document.querySelector(selector);
