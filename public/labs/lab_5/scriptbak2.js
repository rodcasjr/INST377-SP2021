// function mapInit() {
//   // follow the Leaflet Getting Started tutorial here
//   return map;
// }
// pk.eyJ1Ijoicm9kY2FzanIiLCJhIjoiY2ttNTBnYnlhMGExbjJ2cDVhZGF3ZjZwdSJ9.MwGckoAlirDfq0tKZcEx7Q

// async function dataHandler(mapObjectFromFunction) {
async function windowActions() { 
  console.log('window loaded');
  const form = document.querySelector('.userform'); // target form specifically
  const search = document.querySelector('#zip');
  const request = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');

  const arrayName = await request.json();

  //   fetch(endpoint).then((blob) => console.log(blob));
  //   const prom = fetch(endpoint)
  //     .then((blob) => blob.json())
  //     .then((data) => names.push(...data));

  function findMatches(wordToMatch, zip) {
    return names.filter((restaurants) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return restaurants.name.match(regex);
    });
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
                    <span class= "category">${restaurants.category}</span>
                </li>
                `;
    }).join('');
    suggestions.innerHTML = html;
  }

  const searchInput = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions');

  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', (event) => {
    displayMatches(event);
  });
}


//   // and target mapObjectFromFunction to attach markers
// }

// async function windowActions() {
//   const map = mapInit();
//   await dataHandler(map);
// }

window.onload = windowActions;