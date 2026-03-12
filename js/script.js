//################################ FUNCION PARA LA PESTAÑA DE CALENDARIO  ################################

// Lista de carreras con información detallada (nombre, fecha, circuito, país, coordenadas y enlace a la imagen)
const races = [

    { name: "GP Australia", date: "14-16 marzo", circuit: "Albert Park", country: "Australia", x: 0.85, y: 0.78, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_771/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Australia_Circuit" },

    { name: "GP China", date: "21-23 marzo", circuit: "Shanghai", country: "China", x: 0.78, y: 0.39, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/China_Circuit" },

    { name: "GP Japon", date: "4-6 abril", circuit: "Suzuka", country: "Japon", x: 0.87, y: 0.37, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Japan_Circuit" },

    { name: "GP Bahrain", date: "11-13 abril", circuit: "Bahrain Internationalr", country: "Bahrain", x: 0.61, y: 0.43, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit" },

    { name: "GP Arabia Saudita", date: "18-20 abril", circuit: "Jeddah Corniche", country: "Arabia Saudita", x: 0.61, y: 0.49, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Saudi_Arabia_Circuit" },

    { name: "GP Miami", date: "2-4 mayo", circuit: "Miami International", country: "Estados unidos", x: 0.245, y: 0.4, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Miami_Circuit" },

    { name: "GP Emilia Romagna", date: "16-18 mayo", circuit: "Internacional Enzo y Dino Ferrari", country: "Italia", x: 0.52, y: 0.31, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Emilia_Romagna_Circuit" },

    { name: "GP Monaco", date: "23-25 mayo", circuit: "Circuito de Monaco", country: "Monaco", x: 0.5, y: 0.31, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monaco_Circuit" },

    { name: "GP España", date: "30-1 junio", circuit: "Catalunya", country: "España", x: 0.47, y: 0.35, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Spain_Circuit" },

    { name: "GP Canada", date: "13-15 junio", circuit: "Gilles Villeneuve", country: "Canada", x: 0.18, y: 0.2, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Canada_Circuit" },

    { name: "GP Austria", date: "27-29 junio", circuit: "Red Bull Ring", country: "Austria", x: 0.5359, y: 0.3, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Austria_Circuit" },

    { name: "GP Gran Bretaña", date: "4-6 julio", circuit: "Silverstone", country: "Gran Bretaña", x: 0.47, y: 0.24, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit" },

    { name: "GP Belgica", date: "25-27 julio", circuit: "Spa-Francorchamps", country: "Belgica", x: 0.488, y: 0.27, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Belgium_Circuit" },

    { name: "GP Hungria", date: "1-3 agosto", circuit: "Hungaroring", country: "Hungria", x: 0.55, y: 0.3, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Hungary_Circuit" },

    { name: "GP Paises Bajos", date: "29-31 agosto", circuit: "Zandvoort", country: "Paises Bajos", x: 0.51, y: 0.27, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Netherlands_Circuit" },

    { name: "GP Italia", date: "5-7 septiembre", circuit: "Monza", country: "Italia", x: 0.53, y: 0.35, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Italy_Circuit" },

    { name: "GP Azerbaijan", date: "19-21 septiembre", circuit: "Baku City Circuit", country: "Azerbaijan", x: 0.6, y: 0.37, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Baku_Circuit" },

    { name: "GP Singapur", date: "3-5 octubre", circuit: "Marina Bay", country: "Singapur", x: 0.78, y: 0.62, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Singapore_Circuit" },

    { name: "GP Estados Unidos", date: "17-19 octubre", circuit: "Las Américas", country: "Estados Unidos", x: 0.19, y: 0.38, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/USA_Circuit" },

    { name: "GP Ciudad de Mexico", date: "24-26 octubre", circuit: "Hermanos Rodríguez", country: "Mexico", x: 0.19, y: 0.45, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Mexico_Circuit" },

    { name: "GP Sao Pablo", date: "7-9 noviembre", circuit: "Jose Carlos Pace", country: "Brasil", x: 0.35, y: 0.67, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Brazil_Circuit" },

    { name: "GP Las Vegas", date: "21-22 noviembre", circuit: "Las Vegas", country: "Estados Unidos", x: 0.15, y: 0.35, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Las_Vegas_Circuit" },

    { name: "GP Qatar", date: "28-30 noviembre", circuit: "Lusail International", country: "Qatar", x: 0.63, y: 0.44, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Qatar_Circuit" },

    { name: "GP Abu Dhabi", date: "5-7 diciembre", circuit: "Yas Marina", country: "GP Abu Dhabi", x: 0.645, y: 0.475, image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Abu_Dhabi_Circuit" },

];

// Función para alternar entre mostrar el mapa y la cuadrícula de carreras
function toggleMap() {
    const mapContainer = document.getElementById("map-container"); // Contenedor del mapa
    const raceGrid = document.querySelector(".race-grid"); // Contenedor de la cuadrícula de carreras

    // Alternar entre mostrar y ocultar el mapa y la cuadrícula
    if (mapContainer.style.display === "none" || mapContainer.style.display === "") {
        mapContainer.style.display = "block"; // Mostrar el mapa
        raceGrid.style.display = "none"; // Ocultar la cuadrícula
    } else {
        mapContainer.style.display = "none"; // Ocultar el mapa
        raceGrid.style.display = "grid"; // Mostrar la cuadrícula
    }
}

// Función para crear puntos en el mapa basados en las coordenadas de las carreras
function createMapPoints() {
    const mapPoints = document.getElementById("map-points"); // Contenedor de los puntos en el mapa
    const mapContainer = document.getElementById("world-map"); // Contenedor del mapa mundial
    mapPoints.innerHTML = ""; // Limpiar puntos existentes

    // Crear un punto para cada carrera
    races.forEach((race, index) => {
        let point = document.createElement("div"); // Crear un elemento div para el punto
        point.classList.add("map-point"); // Añadir clase CSS para estilo
        point.style.left = `${race.x * 100}%`; // Posicionar horizontalmente en porcentaje
        point.style.top = `${race.y * 100}%`; // Posicionar verticalmente en porcentaje
        point.setAttribute("data-index", index); // Guardar el índice de la carrera en un atributo
        point.addEventListener("click", showPopup); // Añadir evento para mostrar información al hacer clic
        mapPoints.appendChild(point); // Añadir el punto al contenedor
    });
}

// Función para mostrar un popup con información de la carrera seleccionada
function showPopup(event) {
    const index = event.target.getAttribute("data-index"); // Obtener el índice de la carrera
    const race = races[index]; // Obtener los datos de la carrera correspondiente

    // Actualizar el contenido del popup con la información de la carrera
    document.getElementById("popup-title").textContent = race.name;
    document.getElementById("popup-info").innerHTML = `<strong>Fecha:</strong> ${race.date}<br><strong>Circuito:</strong> ${race.circuit}<br><strong>País:</strong> ${race.country}`;
    document.getElementById("popup-image").src = race.image;

    // Mostrar el popup
    document.getElementById("popup").style.display = "block";
}

// Función para cerrar el popup
function closePopup() {
    document.getElementById("popup").style.display = "none"; // Ocultar el popup
}

// Inicializar los puntos en el mapa cuando la página cargue
document.addEventListener("DOMContentLoaded", createMapPoints);



//################################ FUNCION PARA LA PESTAÑA DE CARROS  ################################

// Función para mostrar información de los carros
function mostrarCarros() {
    // Ocultar la información adicional si está visible
    const infoExtra = document.getElementById('info-extra');
    infoExtra.style.display = 'none'; // Oculta la información adicional

    // Mostrar el botón "¿Deseas obtener más información?"
    const masInfoBtn = document.getElementById('mas-info-btn');
    masInfoBtn.style.display = 'block'; // Muestra el botón

    // Mostrar la información de los carros
    const carrosInfo = document.getElementById('carros-info');
    carrosInfo.style.display = 'grid'; // Muestra el contenedor
    carrosInfo.innerHTML = ''; // Limpia el contenido anterior

    // Datos simulados de los coches de todas las escuderías
    const carrosData = [
        {
            "escuderia": "Mercedes-AMG Petronas",
            "modelo": "W15",
            "motor": "Mercedes-AMG F1 M15",
            "neumaticos": "Pirelli",
            "peso": "798 kg",
            "velocidadMaxima": "340 km/h",
            "imagen": "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto,c_fill,q_auto,w_1320,t_16by9Centre,g_faces,ar_16:9/trackside-images/2025/Formula_1_Testing_in_Bahrain___Day_3/2202491157"
        },
        {
            "escuderia": "Red Bull Racing",
            "modelo": "RB20",
            "motor": "Honda RBPT",
            "neumaticos": "Pirelli",
            "peso": "795 kg",
            "velocidadMaxima": "345 km/h",
            "imagen": "https://cdn-5.motorsport.com/images/mgl/0ZR74KN0/s1200/max-verstappen-red-bull-racing.webp"
        },
        {
            "escuderia": "Ferrari",
            "modelo": "SF-24",
            "motor": "Ferrari 067/12",
            "neumaticos": "Pirelli",
            "peso": "800 kg",
            "velocidadMaxima": "342 km/h",
            "imagen": "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto,c_fill,q_auto,w_1320,t_16by9North,g_faces,ar_16:9/trackside-images/2025/Formula_1_Testing_in_Bahrain___Day_3/2202490999"
        },
        {
            "escuderia": "Aston Martin",
            "modelo": "AMR24",
            "motor": "Mercedes-AMG F1 M15",
            "neumaticos": "Pirelli",
            "peso": "796 kg",
            "velocidadMaxima": "337 km/h",
            "imagen": "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto,c_fill,q_auto,w_1320,t_16by9North,g_faces,ar_16:9/trackside-images/2025/Formula_1_Testing_in_Bahrain___Day_3/2202454622"
        },
        {
            "escuderia": "Alpine",
            "modelo": "A524",
            "motor": "Renault E-Tech 24",
            "neumaticos": "Pirelli",
            "peso": "799 kg",
            "velocidadMaxima": "335 km/h",
            "imagen": "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto,c_fill,q_auto,w_1320,t_16by9Centre,g_faces,ar_16:9/trackside-images/2025/Formula_1_Testing_in_Bahrain___Day_2/2202231035"
        },
        {
            "escuderia": "Haas",
            "modelo": "VF-24",
            "motor": "Ferrari 067/12",
            "neumaticos": "Pirelli",
            "peso": "795 kg",
            "velocidadMaxima": "334 km/h",
            "imagen": "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto,c_fill,q_auto,w_1320,t_16by9North,g_faces,ar_16:9/trackside-images/2025/Formula_1_Testing_in_Bahrain___Day_3/2202532059"
        },
        {
            "escuderia": "Kick Sauber",
            "modelo": "C44",
            "motor": "Ferrari 067/12",
            "neumaticos": "Pirelli",
            "peso": "798 kg",
            "velocidadMaxima": "336 km/h",
            "imagen": "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto,c_fill,q_auto,w_1320,t_16by9North,g_faces,ar_16:9/trackside-images/2025/Formula_1_Testing_in_Bahrain___Day_2/2202231034"
        },
        {
            "escuderia": "McLaren",
            "modelo": "MCL62",
            "motor": "Mercedes-AMG F1 M15",
            "neumaticos": "Pirelli",
            "peso": "797 kg",
            "velocidadMaxima": "338 km/h",
            "imagen": "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto,c_fill,q_auto,w_1320,t_16by9Centre,g_faces,ar_16:9/trackside-images/2025/Formula_1_Testing_in_Bahrain___Day_3/2202439875"
        },
        {
            "escuderia": "Racing Bulls",
            "modelo": "RB20",
            "motor": "Honda RBPT",
            "neumaticos": "Pirelli",
            "peso": "794 kg",
            "velocidadMaxima": "333 km/h",
            "imagen": "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto,c_fill,q_auto,w_1320,t_16by9Centre,g_faces,ar_16:9/trackside-images/2024/F1_Grand_Prix_of_Abu_Dhabi/2188867766"
        },
        {
            "escuderia": "Williams",
            "modelo": "FW46",
            "motor": "Mercedes-AMG F1 M15",
            "neumaticos": "Pirelli",
            "peso": "797 kg",
            "velocidadMaxima": "332 km/h",
            "imagen": "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto,c_fill,q_auto,w_1320,t_16by9North,g_faces,ar_16:9/trackside-images/2025/Formula_1_Testing_in_Bahrain___Day_2/2202292233"
        }
    ];

    // Mostrar la información de cada coche
    carrosData.forEach(carro => {
        const carroDiv = document.createElement('div');
        carroDiv.className = 'carro-info';

        // Crear la imagen de la escudería
        const imagenCarro = document.createElement('img');
        imagenCarro.src = carro.imagen;
        imagenCarro.alt = `Logo de ${carro.escuderia}`;
        imagenCarro.className = 'carro-imagen';

        // Crear el contenido de la información del coche (oculto inicialmente)
        const contenido = document.createElement('div');
        contenido.className = 'carro-contenido';
        contenido.innerHTML = `
            <h2>${carro.escuderia}</h2>
            <p><strong>Modelo:</strong> ${carro.modelo}</p>
            <p><strong>Motor:</strong> ${carro.motor}</p>
            <p><strong>Neumáticos:</strong> ${carro.neumaticos}</p>
            <p><strong>Peso:</strong> ${carro.peso}</p>
            <p><strong>Velocidad Máxima:</strong> ${carro.velocidadMaxima}</p>
            <hr>
        `;

        // Añadir la imagen y el contenido al div del coche
        carroDiv.appendChild(imagenCarro);
        carroDiv.appendChild(contenido);

        // Añadir el div del coche al contenedor principal
        carrosInfo.appendChild(carroDiv);
    });
}

// Actualizar el evento del enlace "Carros" para mostrar la información al hacer clic
document.getElementById('carros-link').addEventListener('click', function (event) {
    event.preventDefault(); // Evitar recargar la página
    mostrarCarros(); // Llamar a la función para mostrar los carros
});

// Mostrar información de los carros al cargar la página si el enlace "Carros" está activo
document.addEventListener('DOMContentLoaded', () => {
    const carrosLink = document.getElementById('carros-link');
    if (carrosLink.classList.contains('active')) {
        mostrarCarros();
    }
});

// Botón para mostrar más información sobre los carros
document.getElementById('mas-info-btn').addEventListener('click', function () {
    const carrosInfo = document.getElementById('carros-info');
    const infoExtra = document.getElementById('info-extra');
    const masInfoBtn = document.getElementById('mas-info-btn');

    carrosInfo.style.display = 'none'; // Oculta la información de los carros
    infoExtra.style.display = 'block'; // Muestra la información adicional
    masInfoBtn.style.display = 'none'; // Oculta el botón "¿Deseas obtener más información?"
});

// Botón para volver a la vista de carros
document.getElementById('volver-carros-btn').addEventListener('click', function () {
    const carrosInfo = document.getElementById('carros-info');
    const infoExtra = document.getElementById('info-extra');
    const masInfoBtn = document.getElementById('mas-info-btn');

    carrosInfo.style.display = 'grid'; // Muestra la información de los carros
    infoExtra.style.display = 'none'; // Oculta la información adicional
    masInfoBtn.style.display = 'block'; // Muestra el botón "¿Deseas obtener más información?"
});

// Lógica para mostrar información al hacer clic en los puntos de interés
document.querySelectorAll('.punto').forEach(punto => {
    punto.addEventListener('click', function (event) {
        event.stopPropagation(); // Evita que el clic se propague al contenedor de la imagen
        const info = this.getAttribute('data-info'); // Obtiene la información del atributo data-info
        const miniTarjetasContainer = document.getElementById('mini-tarjetas-container');

        // Verificar si ya existe una tarjeta para este punto
        const tarjetaExistente = miniTarjetasContainer.querySelector(`.mini-tarjeta[data-info="${info}"]`);
        if (tarjetaExistente) {
            tarjetaExistente.remove(); // Elimina la tarjeta existente si ya está abierta
        }

        // Crear la mini tarjeta
        const miniTarjeta = document.createElement('div');
        miniTarjeta.className = 'mini-tarjeta';
        miniTarjeta.setAttribute('data-info', info); // Asignar un atributo para identificar la tarjeta

        // Obtener las coordenadas relativas al contenedor de la imagen
        const contenedorImagen = document.querySelector('.carro-imagen-container');
        const rect = contenedorImagen.getBoundingClientRect();
        const x = event.clientX - rect.left; // Coordenada X relativa al contenedor
        const y = event.clientY - rect.top; // Coordenada Y relativa al contenedor

        // Posicionar la tarjeta al lado del punto
        miniTarjeta.style.top = `${y}px`;
        miniTarjeta.style.left = `${x}px`;

        // Crear el botón de cerrar
        const cerrarBtn = document.createElement('button');
        cerrarBtn.className = 'cerrar-btn';
        cerrarBtn.innerHTML = '×';
        cerrarBtn.addEventListener('click', function () {
            miniTarjeta.remove(); // Elimina la mini tarjeta al hacer clic en el botón de cerrar
        });

        // Crear el título de la mini tarjeta
        const titulo = document.createElement('h2');
        titulo.textContent = info; // El título será el valor de data-info (por ejemplo, "Frenos", "Motor", etc.)

        // Crear la imagen y el texto de la mini tarjeta
        const imagen = document.createElement('img');
        const texto = document.createElement('p');

        // Asignar la imagen y el texto según la información
        switch (info) {
            case 'Motor':
                imagen.src = 'img/fotosPyE/partescochef1/motorf1.png';
                texto.textContent = 'Es un V6 híbrido turbo, con más de 1000 caballos de fuerza. Los motores de Fórmula 1 son los más avanzados en el mundo del automovilismo, con una eficiencia térmica superior al 50% y un sonido característico.';
                break;
            case 'Neumáticos':
                imagen.src = 'img/fotosPyE/partescochef1/ruedasf1.png';
                texto.textContent = 'Pirelli es el proveedor exclusivo de neumáticos para la Fórmula 1 desde 2011, compuestos de varios neumáticos, desde los más blandos (más agarre pero menos durabilidad) hasta los más duros (menos agarre pero más durables). Los compuestos disponibles varían según el circuito.';
                break;
            case 'Velocidad':
                imagen.src = 'img/fotosPyE/partescochef1/velocidadf1.png';
                texto.textContent = 'Los carros de Fórmula 1 pueden alcanzar velocidades superiores a los 350 km/h en circuitos con largas rectas, como Monza o Baku. Y puede acelerar de 0 a 100 km/h en aproximadamente 2.6 segundos, gracias a la potencia del motor y la aerodinámica.';
                break;
            case 'Peso':
                imagen.src = 'img/fotosPyE/partescochef1/pesof1.png';
                texto.textContent = 'El peso mínimo de un coche de Fórmula 1, incluido el piloto, es de 798 kg. Los equipos trabajan para reducir el peso al mínimo posible y luego añaden lastre para ajustarse al límite, lo que permite optimizar la distribución del peso.';
                break;
            case 'Freno':
                imagen.src = 'img/fotosPyE/partescochef1/frenosf1.png';
                texto.textContent = 'Los carros de Fórmula 1 utilizan frenos de carbono, que son muy eficientes para disminuir la velocidad en poco tiempo. Los frenos pueden alcanzar temperaturas superiores a los 1000°C en frenadas fuertes, lo que requiere un sistema de refrigeración eficiente.';
                break;
            case 'Curiosidades':
                imagen.src = 'img/fotosPyE/partescochef1/curiosidadf1.png';
                texto.textContent = '¿Sabía usted que? El coste de desarrollar y mantener un carro de Fórmula 1 puede superar los 100 millones de dólares por temporada, tambien es interesante saber que cada coche está hecho a medida, con piezas de fibra de carbono fabricadas en moldes específicos, la producción de un solo chasis puede llevar cientos de horas, sin embargo, la vida útil de un chasis puede durar varias carreras, pero los componentes como los neumáticos, los frenos y las partes del motor se cambian con frecuencia.';
                break;
        }

        // Añadir el título, la imagen, el texto y el botón de cerrar a la mini tarjeta
        miniTarjeta.appendChild(cerrarBtn);
        miniTarjeta.appendChild(titulo);
        miniTarjeta.appendChild(imagen);
        miniTarjeta.appendChild(texto);

        // Añadir la mini tarjeta al contenedor
        miniTarjetasContainer.appendChild(miniTarjeta);

        // Dentro de la función que crea la mini tarjeta
        miniTarjeta.style.zIndex = '999'; // Asegúrate de que esté por debajo de la barra de navegación

        // Mostrar la mini tarjeta
        miniTarjeta.style.display = 'block';
    });
});


