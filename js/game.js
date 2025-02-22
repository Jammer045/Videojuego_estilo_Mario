// Crear la aplicación Pixi
const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb
});
document.body.appendChild(app.view);

// Cargar la imagen del personaje principal
PIXI.Loader.shared.add('mainCharacter', '../images/pj_main.png').load(setup);

function setup() {
    // Crear el sprite del personaje principal
    const mainCharacter = new PIXI.Sprite(PIXI.Loader.shared.resources.mainCharacter.texture);
    
    // Configurar el personaje principal
    mainCharacter.anchor.set(0.5);
    mainCharacter.x = app.screen.width / 2;
    mainCharacter.y = app.screen.height / 2;
    
    // Añadir el personaje principal a la escena
    app.stage.addChild(mainCharacter);
    
    // Hacer que el personaje sea interactivo
    mainCharacter.interactive = true;
    mainCharacter.buttonMode = true;
    
    // Añadir evento de clic al personaje
    mainCharacter.on('pointerdown', onClickCharacter);
    
    // Configurar el loop del juego
    app.ticker.add(gameLoop);
}

function onClickCharacter() {
    console.log('¡Has hecho clic en el personaje principal!');
    // Aquí puedes añadir más lógica para cuando se haga clic en el personaje
}

function gameLoop(delta) {
    // Aquí puedes añadir la lógica que se ejecutará en cada frame
    // Por ejemplo, mover el personaje, comprobar colisiones, etc.
}