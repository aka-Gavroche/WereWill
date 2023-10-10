const chatButton = document.querySelector('.chat-button');
const chat = document.querySelector('.chat');
const chatCloseButton = document.querySelector('.chat__close-button')

if (chatButton) {
    chatButton.addEventListener("click", function() {
        chat.classList.toggle('chat_active');
    })
}

if(chatCloseButton) {
    chatCloseButton.addEventListener("click", function() {
        chat.classList.remove('chat_active');
    })
}