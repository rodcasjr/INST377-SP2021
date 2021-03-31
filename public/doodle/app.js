document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid'); // add .grid from CSS
  const doodler = document.createElement('div'); // add .doodler from CSS
  let doodlerLeftSpace = 50; // set doodler space from left edge
  let startPoint = 150;
  let doodlerBottomSpace = startPoint; // set doodler space from bottom edge
  const isGameOver = false; // set Gamer Over
  const platformCount = 5; // set the number of platforms in game
  const platforms = []; // set array to hold platforms in game
  let upTimerId;
  let downTimerId;
  let leftTimerId;
  let rightTimerId;
  let isJumping = true;
  let isGoingLeft = false;
  let isGoingRight = false;
  let score = 0
  

  function createDoodler() { // function that creates doodler
    grid.appendChild(doodler); /* js function that adds doodler to image area definded in CSS */
    doodler.classList.add('doodler');
    doodlerLeftSpace = platforms[0].left;
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
      const platGap = 600 / platformCount;
      const newPlatBottom = 100 + i * platGap; // increment gap space
      const newPlatform = new Platform(newPlatBottom);
      platforms.push(newPlatform); // push platforms into array
      console.log(platforms);
    }
  }
  function movePlatforms() { // 20 mins mark. platforms move by down by 4
    if (doodlerBottomSpace > 200) {
      platforms.forEach((platform) => {
        platform.bottom -= 4;
        const {visual} = platform;
        visual.style.bottom = `${platform.bottom}px`;

        if (platform.bottom < 10) {
          let firstPlatform = platforms[0].visual;
          firstPlatform.classList.remove('platform');
          platforms.shift();
          score++;
          console.log(platforms);
          let newPlatform = new Platform(600);
          platforms.push(newPlatform);
        }
      });
    }
  }
  function jump() {
    clearInterval(downTimerId); // clear timer //
    isJumping = true;
    upTimerId = setInterval(() => {
      doodlerBottomSpace += 20; // add space to bottom of doodler//
      doodler.style.bottom = `${doodlerBottomSpace}px`;
      if (doodlerBottomSpace > (startPoint + 200)) {
        fall();
        isJumping = false;
      }
    }, 30);
  }

  function fall() {
    clearInterval(upTimerId);
    isJumping = true;
    downTimerId = setInterval(() => {
      doodlerBottomSpace -= 5;
      doodler.style.bottom = `${doodlerBottomSpace}px`;
      if (doodlerBottomSpace <= 0) {
        gameOver();
      }
      platforms.forEach((platform) => {
        if (
          (doodlerBottomSpace >= platform.bottom)
          && (doodlerBottomSpace <= platform.bottom + 15)
          && ((doodlerLeftSpace + 60) >= platform.left)
          && (doodlerLeftSpace <= (platform.left + 85))
          && !isJumping
        ) {
          console.log('landed');
          startPoint = doodlerBottomSpace;
          jump();
        }
      });
    }, 30);
  }

  function gameOver() {
    console.log('game over');
    isGamerOver = true;
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }
    grid.innerHTML = score
    clearInterval(upTimerId);
    clearInterval(downTimerId);
    clearInterval(leftTimerId);
    clearInterval(rightTimerId);
  }

  function control(e) {
    if (e.key === 'ArrowLeft') {
      moveLeft();
    } else if (e.key === 'ArrowRight') {
      moveRight();
    } else if (e.key === 'ArrowUp') {
      moveStraight();
    }
  }

  function moveLeft() {
    if (isGoingRight) {
      clearInterval(rightTimerId);
      isGoingRight = false;
    }
    isGoingLeft = true;
    leftTimerId = setInterval(() => {
      if (doodlerLeftSpace >= 0) {
        doodlerLeftSpace -= 5;
        doodler.style.left = `${doodlerLeftSpace}px`;
      } else moveRight();
    }, 20);
  }

  function moveRight() {
    if (isGoingLeft) {
      clearInterval(leftTimerId);
      isGoingLeft = false;
    }
    isGoingRight = true;
    rightTimerId = setInterval(() => {
      if (doodlerLeftSpace <= 340) {
        doodlerLeftSpace += 5;
        doodler.style.left = `${doodlerLeftSpace}px`;
      } else moveLeft();
    }, 20);
  }
  function moveStraight() {
    isGoingRight = false;
    isGoingLeft = false;
    clearInterval(rightTimerId);
    clearInterval(leftTimerId);
  }
  function start() {
    if (!isGameOver) {
      createPlatforms();
      createDoodler();
      setInterval(movePlatforms, 30);
      jump();
      document.addEventListener('keyup', control);
    }
  }

  start(); // attach to a button
});