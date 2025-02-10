/*
Descrizione
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/
/*
const user_travel_km = parseInt(prompt("Inserisci i km del tuo viaggio! (niente bugie)"));
console.log(user_travel_km);
const user_age = parseInt(prompt("Inserisci la tua età! (niente bugie)"));
console.log(user_age);
*/

function calculate_price() {
    const user_age = document.getElementById("user-age").value;
    console.log(user_age);

    const user_travel_km = document.getElementById("user-travel-km").value;
    console.log(user_travel_km);

    const voyage_price = user_travel_km * 0.21;
    console.log(voyage_price.toFixed(2) + "€");
    let final_voyage_price;

    if (user_age >= 65) {
        final_voyage_price = voyage_price * 0.60; //discount by 40%

    } else if (user_age < 18) {
        final_voyage_price = voyage_price * 0.80; //discount by 20%
    } else {
        final_voyage_price = voyage_price;
    }

    console.log(`Discounted price is: ${final_voyage_price.toFixed(2)} €`);
    //window.alert(`Discounted price is: ${final_voyage_price.toFixed(2)} €`);
    document.getElementById("final-price").innerHTML = (`Discounted price is: ${final_voyage_price.toFixed(2)} €`);
}