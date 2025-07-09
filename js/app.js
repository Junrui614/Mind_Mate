// js/app.js - MindMate basic chatbot logic

document.addEventListener('DOMContentLoaded', () => {
    const chatWindow = document.getElementById('chat-window');
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');

    function appendMessage(sender, text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = sender;
        msgDiv.textContent = text;
        chatWindow.appendChild(msgDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userText = userInput.value.trim();
        if (!userText) return;
        appendMessage('user', userText);
        userInput.value = '';
        setTimeout(() => {
            appendMessage('bot', 'I hear you. I’m here to support you.');
        }, 700);
    });
});
