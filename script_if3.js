var orders = ["Cтоять!", "Приготовиться!", "Иди!"];

var signal = "красный";

if ( signal == "красный" ) {
	document.write(orders[0] + "<br>");
}
else if ( signal == "желтый" ) {
	document.write(orders[1] + "<br>");
}
else {
	document.write(orders[2] + "<br>");
}

