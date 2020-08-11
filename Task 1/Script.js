const btn = document.querySelector("button");
const svg1 = document.querySelector(".btn_1");
const svg2 = document.querySelector(".btn_2");

btn.addEventListener('click', () => {
	if (svg1.style.display === "none") {
		svg1.style.display = "";
		svg2.style.display = "none";
	} else {
		svg1.style.display = "none";
		svg2.style.display = "";
	}
});

// Задание выполнено верно, но не оптимально. Создавать 2 разных кнопки, чтобы поменять иконку при нажатии - не лучшее решение :) 
// Если у вас будет приложение с более сложной логикой, может возникнуть путаница с этими 2-мя кнопками, придётся дублировать обработчики событий и т.д. Лучше в одну кнопку положить 2 div'а с svg и показывать их поочередно (если спрятан первый, показывать второй и наоборот). Проверить это можно, посмотрев на свойство style.display у элемента. Исправила ваш код на более оптимальный.