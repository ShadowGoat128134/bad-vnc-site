import RFB from './core/rfb.js';
let rfb;
let host = prompt("IP: ");
let port = prompt("Port: ");
function connectedtohost(e){
    alert("connected");
}

function connectiondropped(e){
    alert("connection died");
}

function passwordneeded(e){
    const password = prompt("Password: ")
    rfb.sendCredentials({password: password});
}
let url;
url = "wss://" + host +":" + port;
rfb = new RFB(document.getElementById('screen'), url, {credentials: {password: password}});
rfb.addEventListener("connect",  connectedtohost);
rfb.addEventListener("disconnect", connectiondropped);
rfb.addEventListener("credentialsrequired", passwordneeded);