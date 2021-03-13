async function windowActions() {
  const request = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');

  const arrayName = await request.json();

//   fetch(endpoint).then((blob) => console.log(blob));
//   const prom = fetch(endpoint)
//     .then((blob) => blob.json())
//     .then((data) => names.push(...data));

  function findMatches(wordToMatch, names) {
    return names.filter((restaurants) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return restaurants.name.match(regex);
    });
  }

  function displayMatches(event) {
    console.log(event.target.value);
    const matchArray = findMatches(event.target.value, names);
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
  searchInput.addEventListener('keyup', (event) => {  displayMatches(event)
  });
}
window.onload = windowActions;