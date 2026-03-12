// Función para obtener los parámetros de la URL
    function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);

}

    // Función para cargar los detalles de la carrera
    async function loadRaceDetails() {

    const season = getQueryParam('season');
    const round = getQueryParam('round');

    if (!season || !round) {
        document.getElementById('race-name').textContent = 'Error: Parámetros no válidos.';
        return;
    }

    try {
        // Obtener los resultados de la carrera específica
        const response = await fetch(`http://ergast.com/api/f1/${season}/${round}/results.json`);

        if (!response.ok) {
            throw new Error('Error al cargar los datos');
        }

        const data = await response.json();
        const race = data.MRData.RaceTable.Races[0];
        const results = race.Results;

        // Obtener los resultados de todas las carreras de la temporada
        const seasonResponse = await fetch(`http://ergast.com/api/f1/${season}/results.json`);
        if (!seasonResponse.ok) {
            throw new Error('Error al cargar los datos de la temporada');
        }

        const seasonData = await seasonResponse.json();
        const allRaces = seasonData.MRData.RaceTable.Races;


        // Crear un objeto para almacenar triunfos y podios de cada piloto
        const driverStats = {};

        // Calcular triunfos y podios
        allRaces.forEach(race => {
            race.Results.forEach(result => {
                const driverId = result.Driver.driverId;
                const position = parseInt(result.position);

                if (!driverStats[driverId]) {
                    driverStats[driverId] = { wins: 0, podiums: 0 };
                }

                if (position === 1) {
                    driverStats[driverId].wins += 1;
                }
                if (position <= 3) {
                    driverStats[driverId].podiums += 1;
                }
            });
        });

        // Mostrar el nombre de la carrera
        document.getElementById('race-name').textContent = `Detalles de la Carrera - ${race.raceName}`;

        // Mostrar los resultados en la tabla
        const resultsBody = document.getElementById('results-body');

        resultsBody.innerHTML = '';

        results.forEach(result => {

            const driver = result.Driver;
            const constructor = result.Constructor;
            const position = result.position;
            const points = result.points;
            const laps = result.laps;
            const time = result.Time ? result.Time.time : 'N/A';
            const fastestLap = result.FastestLap ? result.FastestLap.Time.time : 'N/A';

            // Obtener triunfos y podios del piloto
            const driverId = driver.driverId;
            const wins = driverStats[driverId] ? driverStats[driverId].wins : 0;
            const podiums = driverStats[driverId] ? driverStats[driverId].podiums : 0;

            const row = document.createElement('tr');

                row.innerHTML = `
                <td>${position}</td>
                <td>${driver.givenName} ${driver.familyName}</td>
                <td>${constructor.name}</td>
                <td>${points}</td>
                <td>${laps}</td>
                <td>${time}</td>
                <td>${fastestLap}</td>
                <td>${wins}</td>
                <td>${podiums}</td>
            `;
            resultsBody.appendChild(row);
        });
    } catch (error) {

        console.error('Error:', error);
        document.getElementById('race-name').textContent = 'Error al cargar los detalles de la carrera.';

    }

}

    // Función para renderizar el gráfico
    function renderChart() {

        const drivers = [];
        const points = [];
        const podiums = [];
        const laps = [];
        const wins = [];
        const fastestLap = [];
        const totalTime = [];

    document.querySelectorAll("#results-body tr").forEach(row => {

        const columns = row.children;
        drivers.push(columns[1]?.textContent || "Desconocido");
        points.push(parseFloat(columns[3]?.textContent) || 0);
        laps.push(parseInt(columns[4]?.textContent) || 0);
        totalTime.push(parseFloat(columns[5]?.textContent.replace(':', '.')) || 0);
        fastestLap.push(parseFloat(columns[6]?.textContent.replace(':', '.')) || 0);
        wins.push(parseInt(columns[7]?.textContent) || 0);
        podiums.push(parseInt(columns[8]?.textContent) || 0);

    });

    if (drivers.length === 0) return;

    const ctx = document.getElementById("raceChart").getContext("2d");
    let chart;

    function updateChart(type) {
        let data, label, backgroundColor, borderColor;

        switch (type) {

            case "points":
            data = points;
            label = "Puntos";
            backgroundColor = 'rgba(0, 255, 234, 0.65)';
            borderColor = 'rgba(0, 255, 234, 0.65)';
            break;

            case "podiums":
            data = podiums;
            label = "Podios";
            backgroundColor = 'rgba(255, 115, 0, 0.65)';
            borderColor = 'rgba(255, 115, 0, 0.65)';
            break;

            case "laps":
            data = laps;
            label = "Vueltas Completadas";
            backgroundColor = 'rgba(255, 251, 20, 0.65)';
            borderColor = 'rgba(255, 251, 20, 0.65)';
            break;

            case "wins":
            data = wins;
            label = "Triunfos";
            backgroundColor = 'rgba(43, 255, 0, 0.65)';
            borderColor = 'rgba(43, 255, 0, 0.65)';
            break;

            case "fastestLap":
            data = fastestLap;
            label = "Vuelta Rápida";
            backgroundColor = 'rgba(255, 0, 0, 0.75)';
            borderColor = 'rgba(255, 0, 0, 0.75)';
            break;

            case "totalTime":
            data = totalTime;
            label = "Tiempo Total";
            backgroundColor = 'rgba(47, 0, 255, 0.65)';
            borderColor = 'rgba(47, 0, 255, 0.65)';
            break;
    }

        if (chart) {
            chart.destroy();
        }

        chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: drivers,
                datasets: [{
                    label: label,
                    data: data,
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    }

    document.getElementById("chartType").addEventListener("change", (event) => {
        updateChart(event.target.value);
    });

    updateChart("points"); // Cargar gráfico inicial con puntos
}

    // Cargar los detalles al cargar la página
    window.onload = async () => {
    await loadRaceDetails();
    renderChart();
};