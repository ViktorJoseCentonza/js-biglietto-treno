/*
pari/dispari: completare il live iniziato in classe con Leonardo e risolvere il bug lasciato. L'utente vince solo con pari e se sceglie dispari?  Tips: é necessario l'operatore logico AND usato nella condizione? forse sarebbe meglio separare le due condizioni e verificare prima se il risultato é pari e salvare da qualche parte questa informazione ma occhio all'ambito di visibilitá delle variabili. */

function choose_winner() {
    const user_choice = document.getElementById("user-choice").value;
    console.log(user_choice);

    const user_number = parseInt(document.getElementById("user-number").value);
    console.log(user_number);

    const machine_number = Math.floor(Math.random() * 9 + 1);
    console.log(machine_number);
    document.getElementById("final-winner").innerHTML = (`You won!`);
}