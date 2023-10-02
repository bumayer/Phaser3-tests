const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#295110',
    physics: {
        default: 'arcade',
        arcade: { debug: false, gravity: { y: 300 } }
    },
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image('b1', 'assets/b1.png');
    this.load.image('b2', 'assets/b2.png');
    this.load.image('b3', 'assets/b3.png');
    this.load.image('b4', 'assets/b4.png');
    this.load.image('b5', 'assets/b5.png');
    this.load.image('b6', 'assets/b6.png');
    this.load.image('b7', 'assets/b7.png');
    this.load.image('b8', 'assets/b8.png');
}

function create() {
    const balls = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8'];
    const ballGroup = this.physics.add.group();

    this.input.on('pointerdown', function (pointer) {
        var rball = Phaser.Utils.Array.GetRandom(balls);
        const ball = ballGroup.create(pointer.x, pointer.y, rball);
        ball.setBounce(1);
        ball.setCollideWorldBounds(true);
        ball.setVelocityX(Phaser.Math.Between(-100, 100));
        ball.setVelocityY(Phaser.Math.Between(-100, 100)); // Velocidade Y -300 para cima (para que pareça que está subindo antes de cair)
         // Aplica damping para fazer as bolas perderem velocidade gradualmente
         ball.setDamping(true);
         ball.setDrag(0.9); // Valor entre 0 e 1: 1 significa sem resistência, 0 significa parar imediatamente
     
    
    }, this);

    this.physics.add.collider(ballGroup, ballGroup);
    this.physics.world.setBoundsCollision(true, true);

    this.add.text(600, 50, 'Clique na tela', { fill: '#ffffff' });

    const clearButton = this.add.text(50, 50, 'Apagar Bolas', { fill: '#ffffff' })
        .setInteractive()
        .on('pointerdown', function () {
            // Remove todas as bolas
            ballGroup.clear(true, true);
        });

}
