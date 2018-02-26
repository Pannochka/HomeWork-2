var login = prompt("Введите логин","");

if ( login == null ) {
	alert("Вход отменён");
}
else if (login != "Админ") {
	alert("Я вас не знаю");
}
else {
	var password = prompt("Введите пароль","");
	if ( password == null ) {
		alert("Вход отменён");
	} 
	else if (password != "Чёрный Властелин") {
		alert("Пароль неверен");
	}
	else {
		alert("Добро пожаловать!");
	}
}
