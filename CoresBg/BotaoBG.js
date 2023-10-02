const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

const coresDeFundo = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

function preload() {
    // Carregue recursos, se necessário
}

function create() {
    // Defina o fundo inicial como branco
    this.cameras.main.setBackgroundColor('#ffffff');

    // Crie um botão no meio da tela
    const button = this.add.rectangle(400, 300, 200, 50, 0x000000);
    button.setInteractive(); // Torna o botão interativo

    // Adicione um evento de clique ao botão
    button.on('pointerup', function () {
        // Sorteie uma cor aleatória da lista de cores
        const corAleatoria = Phaser.Utils.Array.GetRandom(coresDeFundo);
        console.log('Botão Clicado!')
        // Defina a cor sorteada como o novo fundo da tela
        this.cameras.main.setBackgroundColor(corAleatoria);
        }, this); 
        // Certifique-se de passar 'this' para manter o contexto correto
}
