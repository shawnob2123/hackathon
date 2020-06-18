// Geocoding API
//Url request
// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY

document.addEventListener('DOMContentLoaded', function () {



  document.getElementById('button').addEventListener('click', successCallback)

  
function successCallback() {
  const city = 'Providence';
  const state = 'RI'; // Abbreviated
  const addressNumber = '225';
  const addressName = 'Dyer';
  const addressType = 'Ave';
  const lat = '-71.4180506';
  const lon = '41.830224300000005';
  // const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}
  // &location_type=ROOFTOP&result_type=street_address&key=${googleApiKey}`;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressNumber}+${addressName}+${addressType},${city},+${state}&key=${googleApiKey}`;

  //xhr object
const xhr = new XMLHttpRequest();

xhr.open('GET', url, true );

xhr.onload = function () {
  if (this.status === 200 && this.readyState === 4) {
    const parsedResponseText = JSON.parse(this.responseText)

    html = `<br>Here is a view of ${city} in ${state} at the location of ${addressNumber} ${addressName} ${addressType} `;
    document.getElementById('city').innerHTML = html

    console.log(parsedResponseText);
  }
  else if (this.status === 400) {
    console.log('404 Error... Try again');
  }
}
xhr.send()
}
