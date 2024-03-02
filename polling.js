let ipAddress = "https://d032-113-203-198-47.ngrok-free.app"

setInterval(() => {
    fetch(ipAddress + '/get-messages').then(lock => lock.json()).then(() => {
        console.log('messages -> ', messages);
    })
}, 1000);