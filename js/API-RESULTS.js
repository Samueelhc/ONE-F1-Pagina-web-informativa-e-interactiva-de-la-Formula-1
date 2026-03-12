//################################ FUNCION PARA LA PESTAÑA DE RESULTADOS  ################################

// Mapeo de nacionalidades a códigos de país para mostrar banderas
const countryMapping = {
    "British": "gb",
    "German": "de",
    "Dutch": "nl",
    "Spanish": "es",
    "French": "fr",
    "Mexican": "mx",
    "Finnish": "fi",
    "Canadian": "ca",
    "Australian": "au",
    "Japanese": "jp",
    "Monegasque": "mc",
    "Chinese": "cn"
};

// Función para limpiar la tabla y el título de la carrera
function clearTable() {
    const tableBody = document.querySelector("tbody");
    const raceName = document.getElementById("race-name");

    // Limpiar el contenido de la tabla
    tableBody.innerHTML = "";

    // Restablecer el título de la carrera
    raceName.textContent = "";
}

// Función para obtener las carreras de una temporada específica
async function fetchRaces(season) {
    // Realizar una solicitud a la API para obtener las carreras de la temporada
    const response = await fetch(`https://api.jolpi.ca/ergast/f1/${season}.json`);
    const data = await response.json();
    const races = data.MRData.RaceTable.Races;
    const raceSelect = document.getElementById("race-select");

    // Limpiar el menú de selección de carreras
    raceSelect.innerHTML = '<option value="" disabled selected>Seleccionar carrera</option>';

    // Llenar el menú con las carreras de la temporada
    races.forEach(race => {
        const option = document.createElement("option");
        option.value = race.round; // Número de ronda de la carrera
        option.textContent = `${race.raceName} - ${race.date}`; // Nombre y fecha de la carrera
        raceSelect.appendChild(option);
    });

    // Limpiar la tabla y ocultar resultados al cambiar de temporada
    clearTable();
    document.getElementById("results-table").classList.add("hidden");
}

// Función para obtener los resultados de una carrera específica
async function fetchRaceResults(season, round) {
    // Realizar una solicitud a la API para obtener los resultados de la carrera
    const response = await fetch(`https://api.jolpi.ca/ergast/f1/${season}/${round}/results.json`);
    const data = await response.json();
    const race = data.MRData.RaceTable.Races[0]; // Información de la carrera
    const results = race.Results; // Resultados de la carrera
    const tableBody = document.querySelector("tbody");
    const raceName = document.getElementById("race-name");

    // Mostrar el nombre de la carrera
    raceName.textContent = race.raceName;

    // Limpiar el contenido de la tabla
    tableBody.innerHTML = "";

    // Llenar la tabla con los resultados de la carrera
    results.forEach(result => {
        const driver = result.Driver; // Información del piloto
        const constructor = result.Constructor; // Información del constructor
        const position = result.position; // Posición final
        const laps = result.laps; // Vueltas completadas
        const time = result.Time ? result.Time.time : 'N/A'; // Tiempo final

        // Obtener el código de país para la bandera
        const countryCode = countryMapping[driver.nationality] || 'xx';
        const flagUrl = `https://flagcdn.com/w40/${countryCode}.png`;

        // Crear una fila en la tabla con los datos del resultado
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${position}</td>
            <td><img src="${flagUrl}" alt="flag" width="20"> ${driver.givenName} ${driver.familyName}</td>
            <td>${constructor.name}</td>
            <td>${laps}</td>
            <td>${time}</td>
        `;
        tableBody.appendChild(row);
    });

    // Mostrar la tabla de posiciones cuando se cargan los resultados
    document.getElementById("results-table").classList.remove("hidden");
}



// Evento para el botón "Ver más detalles"
document.getElementById('more-details-btn').addEventListener('click', () => {
    const selectedSeason = document.getElementById('season-select').value;
    const selectedRound = document.getElementById('race-select').value;

    // Abrir una nueva pestaña con los detalles de la carrera seleccionada
    if (selectedSeason && selectedRound) {
        window.open(`detalles.html?season=${selectedSeason}&round=${selectedRound}`, '_blank');
    } else {
        alert('Por favor, selecciona una temporada y una carrera.');
    }
});