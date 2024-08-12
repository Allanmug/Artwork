document.addEventListener('DOMContentLoaded', function() {
    const chatContainer = document.querySelector('.chat-container');
    
    // Function to scroll to the bottom of the chat
    function scrollToBottom() {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    
    // Scroll to the bottom on load
    scrollToBottom();

    // Send Message Button Functionality
    document.getElementById('sendMessageBtn').addEventListener('click', function() {
        const messageInput = document.getElementById('messageInput');
        const messageText = messageInput.value.trim();
        
        if (messageText) {
            const newMessage = document.createElement('div');
            newMessage.classList.add('message');
            newMessage.setAttribute('data-user', 'user2');
            
            newMessage.innerHTML = `
                <div class="message-content">
                    <p>${messageText}</p>
                </div>
                <div class="message-info">
                    <span class="username">You</span>
                    <span class="timestamp">${new Date().toLocaleTimeString().slice(0, 5)}</span>
                </div>
            `;
            
            chatContainer.appendChild(newMessage);
            messageInput.value = '';
            scrollToBottom();
        }
    });
});
