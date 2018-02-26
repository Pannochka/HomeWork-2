
var login;
var message;
login = 'Вася';
login == 'Вася' ? message = 'Привет': 
		login == 'Директор' ? message = 'Здравствуйте' : 
				login == '' ? message = 'Нет логина' : message = '';

document.write(message);

