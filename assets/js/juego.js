/*
2C = Two of Clubs (Tréboles)
2D = Two of Diamons (Diamantes)
2H = Two of Hearts (Corazones)
2S = Two of Spades (Espadas)
*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;

//referencias del HTML
const btnNuevo = document.querySelector('#btnNuevo');
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');

const ptosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasOrdenador = document.querySelector('#ordenador-cartas');




const crearDeck = () => {
    for (i = 2; i <= 10; i++) {
        for (tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (esp of especiales) {
        for (tipo of tipos) {
            deck.push(esp + tipo);
        }
    }

    deck = _.shuffle(deck);
};

crearDeck();
console.log(deck);
console.log('-------------')


const pedirCarta = () => {
    if (deck.length === 0) throw 'Se acabaron las cartas de la baraja';
    const carta = deck.pop();
    return carta;
}




const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor)) ?
        (valor == 'A') ? 11 : 10
        : puntos = valor * 1;
};




//turno computadora
const turnoComputadora = () => {
    do {
        const carta = pedirCarta();

        puntosComputadora += valorCarta(carta);
        ptosHTML[1].innerText = puntosComputadora;

        //añadir carta computadora
        const imgCarta = document.createElement('img');
        imgCarta.src = `./assets/cartas/${carta}.png`;
        imgCarta.classList = "carta";
        divCartasOrdenador.append(imgCarta);
    } while ( (puntosComputadora < puntosJugador) && (puntosJugador <= 21) );

    setTimeout(() => {
        if (puntosJugador > 21) {
            alert('Te has pasao pringao!!');
        }
        else if (puntosComputadora > puntosJugador) {
            alert('Perdiste... Looser!!');
        }
        else {
            alert('Que suerte tuviste chaval!!');
        }
    }, 100);
};







// eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();

    puntosJugador += valorCarta(carta);
    ptosHTML[0].innerText = puntosJugador;

    //añadir carta jugador
    const imgCarta = document.createElement('img');
    imgCarta.src = `./assets/cartas/${carta}.png`;
    imgCarta.classList = "carta";
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora();
    }
    else if (puntosJugador === 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora();
    }
});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora();
});


btnNuevo.addEventListener('click', () => {
    btnPedir.disabled = false;
    btnDetener.disabled = false;

    crearDeck();

    puntosJugador = 0;
    puntosComputadora = 0;
    ptosHTML[0].innerText = 0;
    ptosHTML[1].innerText = 0;

    divCartasJugador.innerHTML = ''
    divCartasOrdenador.innerHTML = ''
});