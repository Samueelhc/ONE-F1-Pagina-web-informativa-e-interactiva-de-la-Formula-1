// Función para filtrar las escuderías según el término de búsqueda ingresado
function filterEscuderias() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase(); // Obtener el término de búsqueda
    const escuderiaElements = document.querySelectorAll('.escuderia'); // Seleccionar todas las escuderías

    escuderiaElements.forEach(escuderia => {
        const nombre = escuderia.querySelector('p strong').textContent.toLowerCase(); // Obtener el nombre de la escudería
        escuderia.style.display = nombre.includes(searchTerm) ? 'block' : 'none'; // Mostrar u ocultar según el término
    });
}

// Event listener para filtrar mientras se escribe
document.getElementById('searchInput').addEventListener('input', filterEscuderias);

// Datos estáticos de las escuderías
const escuderias = [


    {
        nombre: "Mercedes",
        descripcion: "Mercedes es una de las escuderías más exitosas en la historia de la Fórmula 1, con múltiples campeonatos de constructores y pilotos.",
        nacionalidad: "Alemana",
        imagen: "img/fotosPyE/mercedes/Mercedes-AMG-Petronas-F1-Team-Logo.png",
        pilotos: [
            {
                nombre: "Andrea Kimi Antonelli",
                nacionalidad: "Británico.",
                imagen: "img/fotosPyE/mercedes/andrekimiantonelli.png",
                fechaN: "25 de agosto de 2006",
                podios: "0",
                campeonatos: "0"
            },
            {
                nombre: "George Russell",
                nacionalidad: "Británico.",
                imagen: "img/fotosPyE/mercedes/geargerussell.png",
                fechaN: "15 de febrero de 1998",
                podios: "10",
                campeonatos: "0"
            }
        ]
    },


    {
        nombre: "Red Bull Racing",
        descripcion: "Red Bull es conocida por su enfoque innovador y agresivo en la Fórmula 1, ganando varios campeonatos con pilotos como Sebastian Vettel y Max Verstappen.",
        nacionalidad: "Austriaca",
        imagen: "img/fotosPyE/redbull/red_bull_racing-logo-brandlogos.net_.png",
        pilotos: [
            {
                nombre: "Max Verstappen",
                nacionalidad: "Neerlandés.",
                imagen: "img/fotosPyE/redbull/maxverstappen.png",
                fechaN: "30 de septiembre de 1997",
                podios: "113",
                campeonatos: "3 (2021, 2022, 2023)."

            },
            {
                nombre: "Liam Lawson",
                nacionalidad: "Neozelandés.",
                imagen: "img/fotosPyE/redbull/liamlawson.png",
                fechaN: "11 de enero de 2002",
                podios: "0",
                campeonatos: "0"
            }
        ]
    },


    {
        nombre: "Ferrari",
        descripcion: "Ferrari es la escudería más icónica de la Fórmula 1, con una larga historia de victorias y pasión por el automovilismo.",
        nacionalidad: "Italiana",
        imagen: "img/fotosPyE/ferrari/Ferrari-Logo.png",
        pilotos: [
            {
                nombre: "Charles Leclerc",
                nacionalidad: "Monegasco.",
                imagen: "img/fotosPyE/ferrari/charlesleclerc.png",
                fechaN: "16 de octubre de 1997",
                podios: "30",
                campeonatos: "0"

            },
            {
                nombre: "Lewis Hamilton",
                nacionalidad: "Británico.",
                imagen: "img/fotosPyE/ferrari/lewishamilton.png",
                fechaN: "7 de enero de 1985",
                podios: "202",
                campeonatos: "7 (2008, 2014, 2015, 2017, 2018, 2019, 2020)."

            }
        ]
    },


    {
        nombre: "Alpine",
        descripcion: "Alpine es la escudería francesa que compite en la Fórmula 1, representando a la marca Renault en su facción deportiva.",
        nacionalidad: "Francesa",
        imagen: "img/fotosPyE/alpine/alpine-f1-logo-0.png",
        pilotos: [
            {
                nombre: "Jack Doohan",
                nacionalidad: "Australiano.",
                imagen: "img/fotosPyE/alpine/jackdoohan.png",
                fechaN: "20 de febrero de 2003",
                podios: "0",
                campeonatos: "0"
            },
            {
                nombre: "Pierry Gasly",
                nacionalidad: "Francés.",
                imagen: "img/fotosPyE/alpine/pierregasly.png",
                fechaN: "7 de febrero de 1996",
                podios: "5",
                campeonatos: "0"
            }
        ]
    },


    {
        nombre: "Aston Martin",
        descripcion: "Aston Martin regresó a la Fórmula 1 en 2021, combinando lujo y alto rendimiento en la pista.",
        nacionalidad: "Británica",
        imagen: "img/fotosPyE/astonmartin/Aston-Martin-Logo.png",
        pilotos: [
            {
                nombre: "Fernando Alonso",
                nacionalidad: "Español.",
                imagen: "img/fotosPyE/astonmartin/fernandoalonso.png",
                fechaN: "29 de julio de 1981",
                podios: "106",
                campeonatos: "2 (2005, 2006)."


            },
            {
                nombre: "Lances Stroll",
                imagen: "img/fotosPyE/astonmartin/lancestroll.png",
                nacionalidad: "Canadiense.",
                fechaN: "29 de octubre de 1998",
                podios: "3",
                campeonatos: "0"

            }
        ]
    },


    {
        nombre: "Haas F1 Team",
        descripcion: "Haas es la escudería estadounidense que compite en la Fórmula 1 desde 2016, con un enfoque en la eficiencia y la tecnología.",
        nacionalidad: "Estadounidense",
        imagen: "img/fotosPyE/haas/Logo_Haas_F1.png",
        pilotos: [
            {
                nombre: "Oliver bearman",
                nacionalidad: "Británico.",
                imagen: "img/fotosPyE/haas/oliverbearman.png",
                fechaN: "8 de mayo de 2005",
                podios: "0",
                campeonatos: "0"

            },
            {
                nombre: "Esteban Ocon",
                nacionalidad: "Francés.",
                imagen: "img/fotosPyE/haas/estebanocon.png",
                fechaN: "17 de septiembre de 1996",
                podios: "4",
                campeonatos: "0"
            }
        ]
    },


    {
        nombre: "kick sauber",
        descripcion: "Sauber es una escudería suiza con una larga historia en la Fórmula 1, actualmente compitiendo bajo el nombre de Alfa Romeo.",
        nacionalidad: "Suiza",
        imagen: "img/fotosPyE/kicksauber/Stake_F1_Team_Kick_Sauber_logo.png",
        pilotos: [
            {
                nombre: "Gabriel Bortoleto",
                nacionalidad: "Brasileño.",
                imagen: "img/fotosPyE/kicksauber/bortoleto.png",
                fechaN: "14 de octubre de 2004",
                podios: "0",
                campeonatos: "0"
            },
            {
                nombre: "Nico Hulkenberg",
                nacionalidad: "Alemán.",
                imagen: "img/fotosPyE/kicksauber/nicohulkenberg.png",
                fechaN: "19 de agosto de 1987",
                podios: "0",
                campeonatos: "0"
            }
        ]
    },


    {
        nombre: "McLaren",
        descripcion: "McLaren es una de las escuderías más legendarias de la Fórmula 1, con múltiples campeonatos y una rica historia.",
        nacionalidad: "Británica",
        imagen: "img/fotosPyE/mclaren/mclaren-logo-vector.png",
        pilotos: [
            {
                nombre: "Lando Norris",
                nacionalidad: "Británico.",
                imagen: "img/fotosPyE/mclaren/landonorris.png",
                fechaN: "13 de noviembre de 1999",
                podios: "27",
                campeonatos: "0"

            },
            {
                nombre: "Oscar Piastri",
                nacionalidad: "Australiano.",
                imagen: "img/fotosPyE/mclaren/oscarpiastri.png",
                fechaN: "6 de abril de 2001",
                podios: "10",
                campeonatos: "0"

            }
        ]
    },


    {
        nombre: "Williams",
        descripcion: "Williams es una escudería británica con un legado impresionante en la Fórmula 1, aunque en los últimos años ha luchado por mantenerse competitiva.",
        nacionalidad: "Británica",
        imagen: "img/fotosPyE/williams/Logo_Williams_F1.png",
        pilotos: [
            {
                nombre: "Alexander Albon",
                nacionalidad: "Tailandés.",
                imagen: "img/fotosPyE/williams/alexanderalbon.png",
                fechaN: "23 de marzo de 1996",
                podios: "2",
                campeonatos: "0"
            },
            {
                nombre: "Carlos Sainz",
                nacionalidad: "Español.",
                imagen: "img/fotosPyE/williams/carlossainz.png",
                fechaN: "1 de septiembre de 1994",
                podios: "27",
                campeonatos: "0"
            }
        ]
    },


    {
        nombre: "Racing bulls",
        descripcion: "RB F1 Team, anteriormente conocido como AlphaTauri, es el equipo secundario de Red Bull, enfocado en desarrollar jóvenes talentos.",
        nacionalidad: "Italiana",
        imagen: "img/fotosPyE/racingbulls/racing bulls.png",
        pilotos: [
            {
                nombre: "Yuki Tsunoda",
                nacionalidad: "Japonés.",
                imagen: "img/fotosPyE/racingbulls/yukitsunoda.png",
                fechaN: "11 de mayo de 2000",
                podios: "0",
                campeonatos: "0"
            },
            {
                nombre: "Isack Hadjar",
                nacionalidad: "Francés.",
                imagen: "img/fotosPyE/racingbulls/isackhadjar.png",
                fechaN: "28 de septiembre de 2004",
                podios: "0",
                campeonatos: "0"
            }
        ]
    }


];

// Función para cargar las escuderías en la página
function cargarEscuderias() {
    const escuderiasGrid = document.getElementById("escuderias-grid"); // Contenedor del grid
    escuderiasGrid.innerHTML = ""; // Limpiar el contenido previo

    escuderias.forEach(escuderia => {
        const escuderiaDiv = document.createElement("div"); // Crear un div para cada escudería
        escuderiaDiv.className = "escuderia"; // Asignar clase
        escuderiaDiv.innerHTML = `
            <img src="${escuderia.imagen}" alt="${escuderia.nombre}" class="escuderia-imagen">
            <p><strong>${escuderia.nombre}</strong></p>
        `;
        escuderiaDiv.addEventListener("click", () => mostrarDetalleEscuderia(escuderia)); // Evento para mostrar detalles
        escuderiasGrid.appendChild(escuderiaDiv); // Añadir al grid
    });

    // Mostrar el grid de escuderías
    escuderiasGrid.style.display = "grid";
}






// Función para mostrar los detalles de la escudería seleccionada
function mostrarDetalleEscuderia(escuderia) {
    // Eliminar botones anteriores para evitar duplicados
    const botonesAnteriores = document.querySelectorAll('.escuderia-buttons');
    botonesAnteriores.forEach(boton => boton.remove());

    const escuderiaDetalle = document.getElementById("escuderia-detalle");
    const escuderiaNombre = document.getElementById("escuderia-nombre");
    const escuderiaDescripcion = document.getElementById("escuderia-descripcion");
    const escuderiaNacionalidad = document.getElementById("escuderia-nacionalidad");
    const pilotosEscuderia = document.getElementById("pilotos-escuderia");

    // Actualizar información de la escudería
    escuderiaNombre.textContent = escuderia.nombre;
    escuderiaDescripcion.textContent = escuderia.descripcion;
    escuderiaNacionalidad.textContent = `Nacionalidad: ${escuderia.nacionalidad}`;

    // Limpiar y cargar pilotos
    pilotosEscuderia.innerHTML = "";
    escuderia.pilotos.forEach(piloto => {
        const pilotoDiv = document.createElement("div");
        pilotoDiv.className = "piloto";
        pilotoDiv.innerHTML = `
            <div class="piloto-nombre">${piloto.nombre}</div>
            <img src="${piloto.imagen}" alt="${piloto.nombre}" class="piloto-imagen">
            <div class="piloto-info">
                <p><strong>Equipo:</strong> ${escuderia.nombre}</p>
                <p><strong>Nacionalidad:</strong> ${piloto.nacionalidad}</p>
                <p><strong>Fecha de Nacimiento:</strong> ${piloto.fechaN}</p>
                <p><strong>Podios:</strong> ${piloto.podios}</p>
                <p><strong>Campeonatos:</strong> ${piloto.campeonatos}</p>
            </div>
        `;
        pilotosEscuderia.appendChild(pilotoDiv);
    });

    // Crear nuevos botones
    const botonesEscuderia = document.createElement("div");
    botonesEscuderia.className = "escuderia-buttons";
    botonesEscuderia.innerHTML = `
        <a href="https://www.formula1.com/en/teams/${escuderia.nombre.replace(/\s+/g, '-').toLowerCase()}.html" 
           target="_blank" class="info-btn">Página Oficial</a>
        <a href="https://f1store.formula1.com/${escuderia.nombre.replace(/\s+/g, '-').toLowerCase()}" 
           target="_blank" class="shop-btn">Tienda Oficial</a>
    `;

    // Agregar botones DEBAJO de los pilotos
    const contenedorDetalles = document.querySelector('.escuderia-info-container');
    contenedorDetalles.appendChild(botonesEscuderia);

    // Mostrar sección de detalles
    escuderiaDetalle.style.display = "block";
    escuderiaDetalle.scrollIntoView({ behavior: "smooth" });
}








// Modificar el evento de clic del enlace "Escuderías"
document.getElementById("escuderias-link").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el enlace recargue la página

    // Ocultar el detalle de la escudería antes de cargar el grid
    const escuderiaDetalle = document.getElementById("escuderia-detalle");
    escuderiaDetalle.style.display = "none";

    // Mostrar el contenedor del grid de escuderías
    const escuderiasGrid = document.getElementById("escuderias-grid");
    escuderiasGrid.style.display = "grid";

    // Cargar las escuderías
    cargarEscuderias();
});

// Cargar las escuderías al iniciar la página si estamos en ESCUDERIAS.html
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.endsWith("ESCUDERIAS.html")) {
        cargarEscuderias();
    }
});











