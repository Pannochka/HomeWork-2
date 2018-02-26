var age = prompt("Сколько вам лет?","");

if ( age == null ){
    alert("Отмена входа");
}
else if (age <= 20 && age >= 0 ) {
    alert("Вы еще молоды, у Вас все впереди!");
}
else if ( age > 20 ) {
	alert("Вы уже взрослый человек!");
}
else {
	alert("Что-то пошло не так!");
}
