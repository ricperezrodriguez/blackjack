/*
2C = Two of Clubs (Tréboles)
2D = Two of Diamons (Diamantes)
2H = Two of Hearts (Corazones)
2S = Two of Spades (Espadas)
*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

const crearDeck = () => {
    for(i =2; i <= 10; i++){
        for(tipo of tipos){
            deck.push(i + tipo);
        }
    }
   
    for(esp of especiales){
        for(tipo of tipos){
            deck.push(esp + tipo);
        }
    }

    deck = _.shuffle(deck);
};


crearDeck();
console.log(deck);