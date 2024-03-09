let chatPanel = document.querySelector('#chat-panel');
setInterval(() => {
    fetch(ipAddress + '/get-messages').then(lock => lock.json()).then((message) => {
        chatPanel.innerHTML = "";
        for (let index = 0; index < message.length; index++) {
            const element = message[index];
            const messageContent = element.message;
            const sentBy = element.sentBy;
            const createdAt = element.createdAt;
            if (messageContent != undefined && sentBy != undefined && createdAt != undefined) {
                chatPanel.innerHTML += `<li>${sentBy}: ${messageContent}</li> <div class="timestamp">${createdAt}</div></li>`
            }
        }
    })
}, 250);