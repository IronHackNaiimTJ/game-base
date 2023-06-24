const game = new Game("main-canvas");
window.addEventListener("keydown", (event) => game.onKeyDown(event));
window.addEventListener("keyup", (event) => game.onKeyUp(event));

// document.getElementById('btn-start') => onclick ()
game.start(); // en un futuro se podria llamar como boton
