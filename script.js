function handleSend() {
    let iv = document.querySelector('input').value
    let postData = { message: iv }
    let chatPanel = document.querySelector('#chat-panel')
    chatPanel.innerHTML += `<li>Hamza: ${iv}</li>`

    fetch('https://3f66-113-203-198-29.ngrok-free.app/api', {
      method: 'POST', // skip
      headers: {
        'Content-Type': 'application/json' // skip
      },
      body: JSON.stringify(postData) // skip [data ja...]
    })
    .then(response => response.json()) // skip
    .then(data => {
      let chatPanel = document.querySelector('#chat-panel')
      chatPanel.innerHTML += `<li>Darab: ${data.reply}</li>`
    })
}
function handleLoad() {
  

  fetch('https://3f66-113-203-198-29.ngrok-free.app/chat-history', {
    method: 'GET', // skip
    headers: {
      'Content-Type': 'application/json' // skip
    },
  })
  .then(response => response.json()) // skip
  .then(data => {
    let body = document.querySelector('#chat-panel')
    for (let index = 0; index < data.length; index++) {
      body.innerHTML += `<li>${data[index].name} : ${data[index].message}  <div class="timestamp" >${data[index].createdAt} </div></li>`
      // console.log(data)
      
    }
  })
}
fetch('https://3f66-113-203-198-29.ngrok-free.app/get-users', {
    method: 'GET', // skip
    headers: {
      'Content-Type': 'application/json' // skip
    },
  })
  .then(response => response.json()) // skip
  .then(data => {
    console.log(data)
    
  })