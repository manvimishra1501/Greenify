let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let player;
let cursors;
let checkpoints;
let score = 0;

let game = new Phaser.Game(config);

function preload() {
    this.load.image('player', 'assets/player.png');
    this.load.image('tiles', 'assets/tileset.png');
    this.load.json('questions', 'questions.json');
}

function create() {
    // Simple map background
    this.add.image(400, 300, 'tiles');

    // Player setup
    player = this.physics.add.sprite(100, 100, 'player');
    player.setCollideWorldBounds(true);

    // Checkpoints
    checkpoints = this.physics.add.group();
    let cp1 = checkpoints.create(400, 200, null).setSize(50,50).setVisible(false);
    let cp2 = checkpoints.create(700, 500, null).setSize(50,50).setVisible(false);

    // Collision detection
    this.physics.add.overlap(player, checkpoints, hitCheckpoint, null, this);

    // Keyboard input
    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    player.setVelocity(0);

    if (cursors.left.isDown) player.setVelocityX(-200);
    if (cursors.right.isDown) player.setVelocityX(200);
    if (cursors.up.isDown) player.setVelocityY(-200);
    if (cursors.down.isDown) player.setVelocityY(200);
}

// Called when player reaches checkpoint
function hitCheckpoint(player, checkpoint) {
    checkpoint.disableBody(true, true);
    // Load quiz question from JSON
    let questions = game.scene.keys['default'].cache.json.get('questions');
    let q = questions[Math.floor(Math.random()*questions.length)];
    let answer = prompt(q.question + "\nOptions:\n" + q.options.join("\n"));
    if (answer == q.options[q.answer]) {
        alert("Correct! +10 points");
        score += 10;
    } else {
        alert("Wrong! Watch lecture: " + q.lectureLink);
    }
    console.log("Score:", score);
}
