const wsUri = "wss://echo.websocket.org/";
//Ищем кнопки
const btnOpen = document.querySelector('.j-btn-open');
const btnSend = document.querySelector('.j-btn-send');

//задаем вебсокет
let websocket;

// Открываем соединение, сообщение не выводим, открытое соединеие видно в Network
btnOpen.addEventListener('click', () => {
    websocket = new WebSocket(wsUri);

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

//обьявляем функцию для вывода сообщений

function writeToScreen(message) {
    let pre = document.getElementById("vvod");
    pre.innerHTML = message;
    document.getElementById('output').innerHTML = message;
}


btnSend.addEventListener('click', () => {
    const message = pre;
    writeToScreen(message);
    websocket.send(message);
});