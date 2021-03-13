// function mapInit() {
//   // follow the Leaflet Getting Started tutorial here
//   return map;
// }
// pk.eyJ1Ijoicm9kY2FzanIiLCJhIjoiY2ttNTBnYnlhMGExbjJ2cDVhZGF3ZjZwdSJ9.MwGckoAlirDfq0tKZcEx7Q

// async function dataHandler(mapObjectFromFunction) {
async function windowActions() { // async must be tied to a function
  console.log('window loaded');
  const form = document.querySelector('.userform'); // target form specifically
  const search = document.querySelector('#zip');
  const request = await fetch('/api');
  const arrayResto = await request.json();

  form.addEventListener('submit', async (event) => { // type ahead tracking
    event.preventDefault();
    console.log('submit fired');
    const display = arrayResto.filter((record) => console.log(record.zip));
    // const display = arrayResto.filter((record) => record.city.toUpperCase() === search.value.toUpperCase());

    console.log(display);
    console.table(display);
  });
  search.addEventListener('input', (event) => {
    console.log('input', event.target.value);
  });

  // function findMatches(wordToMatch, zip) {
  //   return names.filter((restaurants) => {
  //     const regex = new RegExp(wordToMatch, 'gi');
  //     return restaurants.name.match(regex);
  //   });
  // }

  function displayMatches() {
    search.addEventListener('input', (event) => {
      console.log('input', event.target.value);
    });
    console.log(event.target.value);
    const matchArray = displayMatches(event.target.value, zip);
    const html = matchArray.map((restaurants) => {
      const regex = new RegExp(event.target.value, 'gi');
      const restoName = restaurants.name.replace(regex, `<span class="hl">${tevent.target.value}</span>`);
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
  const searchInput = document.querySelector('.userform');
  const suggestions = document.querySelector('.suggestions');

  // searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', (event) => { displayMatches(event.target); });
}

//   // and target mapObjectFromFunction to attach markers
// }

// async function windowActions() {
//   const map = mapInit();
//   await dataHandler(map);
// }

window.onload = windowActions;