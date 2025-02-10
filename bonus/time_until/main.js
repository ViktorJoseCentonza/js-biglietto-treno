/*
quanto manca:  Stabilire l'ora attuale e attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora.  Oltre a Math ci sono anche altre funzionalitá di javascript (built-in) che possaimo usare senza installazioni come ad esempio le funzioni dell'oggetto Date. */

function time_until_next_hour() {
    const current_time = new Date().toLocaleTimeString();
    console.log(current_time);

    const next_hour = new Date(Math.ceil(Date.now() / 3600000) * 3600000).toLocaleTimeString();

    const remaining_time_mins = 60 - (new Date().getMinutes());
    const remaining_time_secs = 60 - (new Date().getSeconds());



    document.getElementById("current-time").innerHTML = (current_time);
    document.getElementById("next-hour").innerHTML = (next_hour);
    document.getElementById("remaining-time").innerHTML = (`${remaining_time_mins}:${remaining_time_secs}`);
}

setInterval(time_until_next_hour, 1000);
