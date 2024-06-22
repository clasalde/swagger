const socket = io(); 
let user; 
const chatBox = document.getElementById("chatBox");

Swal.fire({
    title: "Identify yourself", 
    input: "text",
    text: "Enter a username to begin chatting!", 
    inputValidator: (value) => {
        return !value && "You need a name to start writting!"
    }, 
    allowOutsideClick: false,
}).then( result => {
    user = result.value;
})


chatBox.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        if(chatBox.value.trim().length > 0) {
            socket.emit("message", {user: user, message: chatBox.value}); 
            chatBox.value = "";
        }
    }
})

//Listener de Mensajes: 

socket.on("message", data => {
    let log = document.getElementById("messagesLogs");
    let messages = "";

    data.forEach( message => {
        messages = messages + `${message.user} dice: ${message.message} <br>`
    })

    log.innerHTML = messages;
})