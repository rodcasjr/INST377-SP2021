document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid'); // add .grid from CSS
  const doodler = document.createElement('div'); // add .doodler from CSS
  let doodlerLeftSpace = 50; // set doodler space from left edge
  let doodlerBottomSpace = 250; // set doodler space from bottom edge
  let isGameOver = false; // set Gamer Over 
  let platformCount = 5; // set the number of platforms in game
  let platforms = []; // set array to hold platforms in game

  function createDoodler() { // function that creates doodler
    grid.appendChild(doodler); // js function that adds doodler to image area definded in CSS
    doodler.classList.add('doodler'); 
    doodler.style.left = `${doodlerLeftSpace}px`;
    doodler.style.bottom = `${doodlerBottomSpace}px`;
  }

  class Platform {
    constructor(newPlatBottom) {
      this.bottom = newPlatBottom;
      this.left = Math.random() * 315;
      this.visual = document.createElement('div');

      const {visual} = this;
      visual.classList.add('platform');
      visual.style.left = `${this.left}px`;
      visual.style.bottom = `${this.bottom}px`;
      grid.appendChild(visual);
    }
  }
  function createPlatforms() {
    for (let i = 0; i < platformCount; i++) {
      let platGap = 600 / platformCount;
      let newPlatBottom = 100 + i * platGap; // increment gap space
      let newPlatform = new Platform(newPlatBottom);
      platforms.push(newPlatform); // push platforms into array
      console.log(platforms);
    }
  }
  function movePlatforms() { // 20 mins mark. platforms move by down by 4
    if (doodlerBottomSpace > 200) {
      platforms.forEach(platform => {
        platform.bottom -= 4;
        let visual = platform.visual
        visual.style.bottom = platform.bottom + 'px';
      })
    }
    function jump() {
      upTimerId = setInterval(function () {
        doodlerBottomSpace += 20; // add space to bottom of doodler
        doodler.style.bottom = doodlerBottomSpace + 'px'
      },30)

    }
  }

  function start() {
    if (!isGameOver) {
      createDoodler();
      createPlatforms();
      movePlatforms();
      setInterval(movePlatforms, 30);
      jump();
    }
  }
  start(); // attach to a button
});