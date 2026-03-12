//################################ FUNCION PARA LA PESTAÑA DE NOTICIAS LLAMADA A LA API  ################################

// Función asíncrona para obtener y mostrar noticias de Fórmula 1
async function Noticias() {

    // URL de la pagina RSS de noticias de F1
    const url = 'https://www.motorsport.com/rss/f1/news/';

    try {
        // Realizar una  solicitud a la API para convertir el RSS en JSON
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`);
        const data = await response.json(); // Convertir la respuesta a JSON

        // Obtener el contenedor donde se mostrarán las noticias
        const newsList = document.getElementById('news-list');
        newsList.innerHTML = ''; // Limpiar el contenido previo

        // Verificar si hay noticias disponibles
        if (data.items && data.items.length > 0) {
            const numberOfNewsToShow = 10; // Número de noticias a mostrar
            const newsToDisplay = data.items.slice(0, numberOfNewsToShow); // Obtener las primeras noticias

            // Recorrer cada noticia y crear su representación en la página
            newsToDisplay.forEach(article => {
                const newsItem = document.createElement('div'); // Contenedor de la noticia
                newsItem.className = 'news-item'; // Clase CSS para estilos

                const link = document.createElement('a'); // Enlace que envuelve la noticia
                link.href = article.link ? article.link : '#'; // URL de la noticia
                link.target = '_blank'; // Abrir en nueva pestaña
                link.rel = 'noopener noreferrer'; // Seguridad
                link.style.textDecoration = 'none'; // Sin subrayado
                link.style.color = 'inherit'; // Heredar color del texto

                // Limpiar la descripción eliminando texto no deseado
                const description = article.description 
                    ? article.description.replace(/Keep Reading/g, '') 
                    : 'Descripción no disponible.';

                // Contenido del enlace: imagen, título y descripción
                link.innerHTML = `
                    <img src="${article.enclosure ? article.enclosure.link : 'https://via.placeholder.com/120x80'}" alt="Imagen de noticia">
                    <h3>${article.title}</h3>
                    <p>${description}</p>
                `;

                newsItem.appendChild(link); // Agregar enlace al contenedor
                newsList.appendChild(newsItem); // Agregar noticia al listado
            });
        } else {
            // Mensaje si no hay noticias disponibles
            newsList.innerHTML = '<p>No se encontraron noticias recientes.</p>';
        }
    } catch (error) {
        // Manejar errores en la carga de noticias
        console.error('Error al obtener noticias:', error);
        document.getElementById('news-list').innerHTML = '<p>Error al cargar las noticias.</p>';
    }
}

// Llamar a la función para cargar las noticias al cargar la página
Noticias();


