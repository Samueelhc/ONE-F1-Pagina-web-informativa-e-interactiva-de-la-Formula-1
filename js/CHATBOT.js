// Clave de la API para el servicio de generación de lenguaje
const apiKey = "AIzaSyDuxjiADYUK3LW6fdmdccRQxQfOgKSwdHc";

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Referencias a elementos del DOM
    const chatbotButton = document.getElementById("chatbot-button");
    const chatbox = document.getElementById("chatbox");
    const sendMessage = document.getElementById("send-message");
    const newChatButton = document.getElementById("new-chat");
    const chatboxMessages = document.getElementById("chatbox-messages");
    const chatboxInput = document.getElementById("chatbox-input");

    // Historial de conversación
    let conversationHistory = [];

    // Función para iniciar un nuevo chat
    function startNewChat() {
        // Limpiar mensajes del chat
        chatboxMessages.innerHTML = "";
        sessionStorage.removeItem("chatHistory");

        // Configurar el prompt inicial del chatbot
        conversationHistory = [{
            role: "user",
            parts: [{ 
                text: `Eres un experto en Fórmula 1. Responde en español manteniendo el contexto de la conversación. Responde UNICAMENTE si el input o el contexto de la conversacion es de la F1
                      Si la pregunta no es de F1, responde: 'Disculpame, solo puedo hablar de F1 🏁'.
                      Mantén respuestas concisas (máximo 1 párrafos).`
            }]
        }, {
            role: "model",
            parts: [{ text: "¡Hola! Soy EscuderIA, tu experto en Fórmula 1. ¿Sobre qué aspecto del mundo de los motores quieres hablar hoy? 🏎️" }]
        }];
        
        // Añadir mensaje inicial del bot
        addMessage(conversationHistory[1].parts[0].text, "bot");
        sessionStorage.setItem("firstOpen", "false");
    }

    // Cargar historial de chat si existe, o iniciar un nuevo chat
    if (sessionStorage.getItem("chatHistory")) {
        chatboxMessages.innerHTML = sessionStorage.getItem("chatHistory");
        conversationHistory = JSON.parse(sessionStorage.getItem("conversationHistory") || "[]");
    } else {
        startNewChat();
    }

    // Alternar visibilidad del chat al hacer clic en el botón
    chatbotButton.addEventListener("click", () => {
        chatbox.classList.toggle("hidden");
        chatboxInput.focus();
    });

    // Función para añadir mensajes al chat
    function addMessage(text, sender) {
        // Crear un nuevo elemento de mensaje
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender === "user" ? "user-message" : "bot-message");
        messageDiv.innerHTML = `<strong>${sender === "user" ? "Tú" : "Bot"}:</strong> ${text}`;
        chatboxMessages.appendChild(messageDiv);
        chatboxMessages.scrollTop = chatboxMessages.scrollHeight; // Desplazar al final del chat

        // Añadir mensaje al historial de conversación
        conversationHistory.push({
            role: sender === "user" ? "user" : "model",
            parts: [{ text: text }]
        });

        // Limitar el historial a un máximo de 20 mensajes
        if (conversationHistory.length > 20) {
            conversationHistory = [
                ...conversationHistory.slice(0, 2),  // Conservar el prompt inicial
                ...conversationHistory.slice(-18)   // Últimos 9 intercambios
            ];
        }

        // Guardar historial en sessionStorage
        sessionStorage.setItem("chatHistory", chatboxMessages.innerHTML);
        sessionStorage.setItem("conversationHistory", JSON.stringify(conversationHistory));
    }

    // Función para manejar el envío de mensajes
    async function sendMessageHandler() {
        const userMessage = chatboxInput.value.trim(); // Obtener el mensaje del usuario
        if (!userMessage) return; // No enviar si el mensaje está vacío

        addMessage(userMessage, "user"); // Añadir mensaje del usuario al chat
        chatboxInput.value = ""; // Limpiar el campo de entrada

        try {
            // Enviar solicitud a la API de generación de lenguaje
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: conversationHistory
                })
            });

            // Procesar la respuesta de la API
            const data = await response.json();
            const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text 
                           || "¡Ups! No tengo información sobre eso en este momento";
            
            addMessage(botReply, "bot"); // Añadir respuesta del bot al chat
        } catch (error) {
            // Manejar errores de conexión
            addMessage("Error de conexión con el servicio. Intenta nuevamente.", "bot");
        }
    }

    // Event Listeners para enviar mensajes
    sendMessage.addEventListener("click", sendMessageHandler);
    chatboxInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") { // Enviar mensaje al presionar Enter
            event.preventDefault();
            sendMessageHandler();
        }
    });

    // Listener para iniciar un nuevo chat
    newChatButton.addEventListener("click", startNewChat);
});

