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
                // Runs when the message content is not empty as well as sendBy and createdAt..

                if(sentBy == USERNAME){
                    // message sent by me..
                    chatPanel.innerHTML += `<div Class ="myMsg"><li style = "font-size : 12px; opacity: 60%" >${sentBy}</li> <li>${messageContent}</li> <div class="timestamp">${createdAt}</div></li></div>`
                } else {
                    // message sent by anyone else..
                    chatPanel.innerHTML += `<div Class ="yourMsg"><li style = "font-size : 12px; opacity: 60%" >${sentBy}</li><li> ${messageContent}</li> <div class="timestamp">${createdAt}</div></li></div>`
                }
            }
        
        }
    })
}, 650);