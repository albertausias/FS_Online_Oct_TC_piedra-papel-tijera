const piedra = document.querySelector('.boton-jugada')
const papel = document.querySelectorAll('.boton-jugada')[1]
const tijera = document.querySelectorAll('.boton-jugada')[2]

// const objetos = ['piedra', 'papel', 'tijera']

// const botones = document.querySelectorAll('.boton-jugada');
// botones.forEach(boton => {
//     boton.addEventListener('click', () => {
//         const jugador = boton;
//         const PC = Math.floor(Math.random()*3); // 0, 1, 2
//     })
// })


piedra.addEventListener('click', function () {
    const PC = Math.floor(Math.random() * 3);
    const jugador = 1;

    const mensaje = document.createElement('p');
    resultados.appendChild(mensaje);

    if (jugador < PC) {
        mensaje.textContent('PC gana')
    } else if (jugador > PC) {
        mensaje.textContent('Has ganado');
    } else {
        mensaje.textContent('Empate');
    } return {
        resultados
    }
});