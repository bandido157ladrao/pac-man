const maze = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
let ghosts = [
    { x: 50, y: 50, size: 20, speed: 3, dx: 3, dy: 0 },
    // Outros fantasmas
];

function drawGhost(ghost) {
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(ghost.x, ghost.y, ghost.size, 0, Math.PI * 2);
    ctx.fill();
}

function moveGhost(ghost) {
    ghost.x += ghost.dx;
    ghost.y += ghost.dy;
    // Adicione lógica para mudar direção ao bater nas paredes do labirinto
}
let score = 0;
let lives = 3;

function drawScore() {
    ctx.fillStyle = 'white';
    ctx.font = '16px Arial';
    ctx.fillText('Score: ' + score, 8, 20);
}

function drawLives() {
    ctx.fillStyle = 'white';
    ctx.font = '16px Arial';
    ctx.fillText('Lives: ' + lives, canvas.width - 65, 20);
}
let pellets = [
    { x: 30, y: 30, eaten: false },
    // Outros pellets
];

function drawPellet(pellet) {
    if (!pellet.eaten) {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(pellet.x, pellet.y, 5, 0, Math.PI * 2);
        ctx.fill();
    }
}

function checkPelletCollision() {
    pellets.forEach(pellet => {
        if (!pellet.eaten && Math.hypot(pacMan.x - pellet.x, pacMan.y - pellet.y) < pacMan.size) {
            pellet.eaten = true;
            score += 10;
        }
    });
}
const chompSound = document.getElementById('chomp');

function playChompSound() {
    chompSound.play();
}

function checkPelletCollision() {
    pellets.forEach(pellet => {
        if (!pellet.eaten && Math.hypot(pacMan.x - pellet.x, pacMan.y - pellet.y) < pacMan.size) {
            pellet.eaten = true;
            score += 10;
            playChompSound();
        }
    });
}
