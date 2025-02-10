/*
pari/dispari: completare il live iniziato in classe con Leonardo e risolvere il bug lasciato. L'utente vince solo con pari e se sceglie dispari?  Tips: é necessario l'operatore logico AND usato nella condizione? forse sarebbe meglio separare le due condizioni e verificare prima se il risultato é pari e salvare da qualche parte questa informazione ma occhio all'ambito di visibilitá delle variabili. */

function choose_winner() {
    const user_choice = document.getElementById("user-choice").value;
    console.log(user_choice);

    const user_number = parseInt(document.getElementById("user-number").value);
    console.log(user_number);

    const machine_number = Math.floor(Math.random() * 9 + 1);
    console.log(machine_number);

    const oddOrEven = (user_number + machine_number) % 2; //value 1 if odd (true)
    console.log(oddOrEven);

    if (user_choice == "odd" || user_choice == "even") {

        if (user_number >= 1 && user_number <= 9) {

            if (oddOrEven && user_choice == "odd") {
                document.getElementById("final-winner").innerHTML = (`You won! the number was odd`);
            } else if (oddOrEven && user_choice == "even") {
                document.getElementById("final-winner").innerHTML = (`You lost! the number was odd`);
            } else if (oddOrEven != 1 && user_choice == "odd") {
                document.getElementById("final-winner").innerHTML = (`You lost! the number was even`);
            } else if (oddOrEven != 1 && user_choice == "even") {
                document.getElementById("final-winner").innerHTML = (`You won! the number was even`);
            } else {
                document.getElementById("final-winner").innerHTML = (`Something wrong happened!`);
            }

        } else {
            document.getElementById("final-winner").innerHTML = (`Hey no cheating! the number must be between 1 and 9`);
        }

    } else {
        document.getElementById("final-winner").innerHTML = (`Please check the spelling!`);
    }
} 
