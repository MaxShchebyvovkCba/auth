const messageContainer = document.querySelector('.messages');
const sendButton = document.querySelector('.send');
const messageTextBox = document.querySelector('.input');

//lp connection

// const lpm = require("lp-messaging-sdk");

// const connection = lpm.createConnection({
//     appId: 'quick_start', // TODO: please change to something unique to your application
//     accountId: '12345678',
//     userType: lpm.UserType.CONSUMER
// });

// // log any internal errors (auth errors, etc)
// connection.on('error', err => {
//     console.error(err);
// });

// connect & open conversation
//await connection.open();

// optionally set the consumer's name information
//await connection.setUserProfile({firstName: 'firstName', lastName: 'lastName', nickName: 'nickName'});

// create conversation
//const conversation = await connection.createConversation();

// setup a message notification listener
// conversation.on('message', message => {
//     console.log(JSON.stringify(message.body));
// });

// send a message
//await conversation.sendMessage('test');

// close the main dialog
//await conversation.close();

// close the connection
//await connection.close();

///



console.log(messageContainer);

const sendMessage = function(){
    const messageText = messageTextBox.value; 
    messageContainer.insertAdjacentHTML('beforeend',`<div class="message">${messageText}</div>`);
    messageTextBox.value='';
};

//send button event listener
sendButton.addEventListener('click',sendMessage);
messageTextBox.addEventListener('keypress',function(e){
    if(e.key==='Enter')
        sendMessage();


});
//generate tocken
const payload = { 
    "sub" : "123",
    "given_name" : "ivan",
    "family_name" : "Doe",
    "iss" : "FQDN",
    "iat" : Date.now() / 1000,
    "exp": (Date.now() + 7200) / 1000
 }

 const jwt = require('jsonwebtoken');