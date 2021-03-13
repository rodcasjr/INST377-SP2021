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
  const request = await fetch('/api');
  const arrayName = await request.json();


  // searchInput.addEventListener('change', displayMatches);
  // searchInput.addEventListener('keyup', (event) => {
  //   displayMatches(event);
  // });
}


//   // and target mapObjectFromFunction to attach markers
// }

// async function windowActions() {
//   const map = mapInit();
//   await dataHandler(map);
// }

window.onload = windowActions;