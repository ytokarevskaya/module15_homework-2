const wsUri = "wss://echo.websocket.org/";
//Ищем кнопки
const output = document.getElementById("output");
const btnOpen = document.querySelector('.j-btn-open');
const btnSend = document.querySelector('.j-btn-send');

//задаем вебсокет
let websocket;

function writeToScreen(message) {
    let pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
}

btnOpen.addEventListener('click', () => {
    websocket = new WebSocket(wsUri);
    websocket.onopen = function (evt) {
        writeToScreen("CONNECTED");
    };
    websocket.onclose = function (evt) {
        writeToScreen("DISCONNECTED");
    };
    websocket.onmessage = function (evt) {
        writeToScreen(
            '<span style="color: blue;">RESPONSE: ' + evt.data + '</span>'
        );
    };
    websocket.onerror = function (evt) {
        writeToScreen(
            '<span style="color: red;">ERROR:</span> ' + evt.data
        );
    };
});

btnSend.addEventListener('click', () => {
    const message = 'Test message';
    writeToScreen("SENT: " + message);
    websocket.send(message);
});