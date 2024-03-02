let USERNAME;
if (localStorage.getItem('userName')) {} else {
  USERNAME = prompt('Whats your name');
  localStorage.setItem('userName', USERNAME);
}

let ipAddress = "https://d032-113-203-198-47.ngrok-free.app"
function handleSend() {
  let iv = document.querySelector('textarea').value
  let postData = { message: iv, sentBy: USERNAME, createdAt: new Date().toLocaleTimeString() }

  fetch(ipAddress + '/send-message', {
    method: 'POST', // skip
    headers: {
      'Content-Type': 'application/json' // skip
    },
    body: JSON.stringify(postData) // skip [data ja...]
  })
}

function handleLoad() {
  fetch(ipAddress + '/chat-history', {
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
fetch(ipAddress + '/get-users', {
  method: 'GET', // skip
  headers: {
    'Content-Type': 'application/json' // skip
  },
})
  .then(response => response.json()) // skip
  .then(data => {
    let shownUsers = 0; 
    let onlineUsers = 0;
    for (let index = 0; index < data.length; index++) {
      if (data[index].isOnline) {
        // Increase the value every time theres an online user!
        onlineUsers++;
      }
    }
    
    let info = document.querySelector('#name')
    for (let index = 0; index < data.length; index++) {
      const userName = data[index].name;
      const isUserOnline = data[index].isOnline;

      // user names must not exceed 5
      if (shownUsers < 5 && isUserOnline == true) {
        if (index == onlineUsers + 1) {
          info.innerHTML += `${userName} and more..`;
        } else {
          info.innerHTML += `${userName}, `;
        }
        shownUsers++;
      }
    }
    console.log(data);
  })



document.addEventListener('keydown', (event) => {
  if (event.key == 'Enter') {
    handleSend()
    document.querySelector('textarea').value = ''
  }
});

function handleRemove() {
  fetch(ipAddress + '/remove-history')
}