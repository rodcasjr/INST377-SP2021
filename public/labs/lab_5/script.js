function mapInit() {
  const mymap = L.map('mapid').setView([38.9897, -76.5614], 13);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoicm9kY2FzanIiLCJhIjoiY2ttNTBlNGI2MDlyYzJvczN6dWJ6NWxzMCJ9.MdUiDSdtwkrUSRPp1MpqxQ'
  }).addTo(mymap);
  console.log('mymap', mymap);
  return mymap;
}

// async function dataHandler(mapObjectFromFunction) {
async function dataHandler(mapObjectFromFunction) {
  console.log('window loaded');
  const form = document.querySelector('.userform'); // target form specifically
  const search = document.querySelector('#zip');
  const request = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
  const arrayName = await request.json();
  const targetList = document.querySelector('.target-list');

  function findMatches(zipToMatch) {
    return arrayName.filter((restaurants) => restaurants.zip.includes(zipToMatch));
    
  }

  function displayMatches(event) {
    console.log(event.target.value);
    const matchArray = findMatches(event.target.value, zip);
    const html = matchArray.map((restaurants) => {
      const regex = new RegExp(event.target.value, 'gi');
      const restoName = restaurants.name.replace(regex, `<span class="hl">${event.target.value}</span>`);
      return `
                <li>
                    <span class= "title">${restoName}</span>
                    <span class= "address">${restaurants.address_line_1}</span>
                    <span class= "city">${restaurants.city}</span>
                </li>
                `;
    }).join('');
    suggestions.innerHTML = html;
  }

  const searchInput = document.querySelector('.input');
  const suggestions = document.querySelector('.suggestions');

  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', (event) => {
    displayMatches(event);
  });
}

//   // and target mapObjectFromFunction to attach markers


async function windowActions() {
  const map = mapInit();
  await dataHandler(map);
}

window.onload = dataHandler;