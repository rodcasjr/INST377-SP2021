function mapInit() {
  const mymap = L.map('mapid').setView([38.99, -76.94], 12);
  
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoicm9kY2FzanIiLCJhIjoiY2ttNTBnYnlhMGExbjJ2cDVhZGF3ZjZwdSJ9.MwGckoAlirDfq0tKZcEx7Q'
  }).addTo(mymap);

  const circle = L.circle([51.5, -0.09], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
  }).addTo(mymap);

  console.log('mymap', mymap);
  return mymap;
}

// async function dataHandler(mapObjectFromFunction) {
async function dataHandler(mapFromLeaflet) {
  console.log('window loaded');
  const form = document.querySelector('.userform'); // target form specifically
  const search = document.querySelector('#zip');
  const request = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
  const arrayName = await request.json();
  const searchInput = document.querySelector('.input');
  const suggestions = document.querySelector('.suggestions');
  let matchArray = [];

  function findMatches(zipToMatch) {
    return arrayName.filter((restaurants) => restaurants.zip.includes(zipToMatch) && restaurants.geocoded_column_1);
  }

  function displayMatches(event) {
    console.log(event.target.value);
    matchArray = findMatches(event.target.value, zip);
    // const filterArray = matchArray.filter((record) => record.zip.includes(search.value) && record.geocoded_column_1);
    const html = matchArray.map((restaurants) => {
      const regex = new RegExp(event.target.value, 'gi');
      const restoName = restaurants.name.replace(regex, `<span class="hl">${event.target.value}</span>`);
      return `
                <li>
                    <span class= "title2">${restoName}</span>
                    <span class= "address">${restaurants.address_line_1}</span>
                    <span class= "city">${restaurants.city}</span>
                </li>
                `;
    }).join('');
    suggestions.innerHTML = html;
  }

  function popMap() {
    matchArray.forEach((item) => {
      const longLat = item.geocoded_column_1.coordinates;
      console.log('markerLongLat', longLat[0], longLat[1]);
      const marker = L.marker([longLat[1], longLat[0]]).addTo(mapFromLeaflet);
    });
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log('hi');
    popMap(event);
  })
  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', (event) => {
    displayMatches(event);
  });
}

//   // and target mapObjectFromFunction to attach markers

async function windowActions() {
  const mymap = mapInit();
  await dataHandler(mymap);
}

window.onload = windowActions;
