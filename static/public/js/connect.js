'use strict';
//@ts-check

const initializeServer = (ip='127.0.0.1', port=8080) => {
  const connection = new RFB(`${ip}:${port}`);

}

/**
 * @function
 * @param {String} ip
 * @param {Number} port
 */
const connectToServer = (ip='127.0.0.1', port=8080) => {
  alert(`Connecting to server at ${ip}:${port}`);
  
  initializeServer();

  /**import RFB from './core/rfb.js';
        let rfb;
        let host;
        let port;
  function getIP(){
            host = prompt("IP: ");
  }
  function getPort(){
            port = prompt("Port: ");
  }
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
  rfb.addEventListener("credentialsrequired", passwordneeded);*/
}
