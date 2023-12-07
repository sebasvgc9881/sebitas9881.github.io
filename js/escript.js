document.addEventListener("DOMContentLoaded", function() {
    // Conversaciones de prueba
    appendMessage('user', 'Hola, ¿cómo estás?', 'images/carnet.jpg');
});

function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var message = messageInput.value.trim();

    if (message !== '') {
        appendMessage('user', message, 'images/persona1.jpg');
        messageInput.value = '';

        // Simular respuesta del chatbot (puedes personalizar esta lógica)
        setTimeout(function() {
            appendMessage('bot', '¡Hola! Debemos conversar sobre detalles...', 'images/carnet.jpg');
        }, 500);
    }
}

function appendMessage(sender, message, profilePic) {
    var chatContainer = document.getElementById('chat');
    var messageElement = document.createElement('div');
    messageElement.className = sender;

    if (profilePic) {
        var profilePicElement = document.createElement('img');
        profilePicElement.className = 'profile-pic';
        profilePicElement.src = profilePic;
        messageElement.appendChild(profilePicElement);
    }

    var messageText = document.createElement('p');
    messageText.textContent = message;
    messageElement.appendChild(messageText);

    chatContainer.appendChild(messageElement);

    // Desplazarse hacia abajo para mostrar el último mensaje
    chatContainer.scrollTop = chatContainer.scrollHeight;
}
