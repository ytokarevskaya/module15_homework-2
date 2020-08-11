const wsUri = "wss://echo.websocket.org/";
//Ищем кнопки
const btnOpen = document.querySelector('.j-btn-open');
const btnSend = document.querySelector('.j-btn-send');

//задаем вебсокет
let websocket;

// Открываем соединение, сообщение не выводим, открытое соединеие видно в Network
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

//обьявляем функцию для вывода сообщений

function writeToScreen(message) {
    document.getElementById('output').innerHTML += `<div>${message}</div>`;
}


btnSend.addEventListener('click', () => {
    if (websocket && websocket.readyState === 1) {
        const message = document.querySelector("input").value;
        writeToScreen(`MESSAGE: ${message}`);
        websocket.send(message);
    } else {
        writeToScreen(
            '<span style="color: red;">Соединение не установлено!</span>'
        );
    }
});

// В задании было несколько ошибок:

// 1. В обработчике клика на btnSend использовалась переменная pre, которая была объявлена в другой функции, поэтому в обработчике эта переменная была недоступна. Из-за этого возникала ошибка и код не работал.

// 2. Ошибка в функции writeToScreen:
// let pre = document.getElementById("vvod");
// pre.innerHTML = message;
// Элемент с id vvod это инпут, у инпутов нет содержимого (innerHTML), поэтому записывать туда сообщение нет смысла. Инпуты предназначены для ввода информации, а для вывода в документе есть output с классом OknoVyvoda

// 3. Это уже не ошибка, но важное замечание: после нажатия на кнопку "открыть соединение" не выводилось никакой информации о том, удалось установить соединение или нет. Если бы чатом пользовался обычный пользователь, он мог бы решить, что чат не работает, потому что после нажатия на кнопку ничего не происходит. Также было бы неплохо при попытке отправить сообщение писать предупреждение, что перед отправкой сначала нужно установить соединение.

// В коде выше всё вышеперечисленное поправила