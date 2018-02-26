var fruits = ["яблоко", "апельсин", "груша", "гранат"];

fruits.splice(fruits.length-2, 1, "ананас")
for (var i = 0; i < fruits.length; i++) {
	document.writeln(fruits[i]);
}
document.writeln('<br>');

var fruits = ["банан", "мандарин", "манго"];
fruits.splice(fruits.length-2, 1, "ананас")
for (var i = 0; i < fruits.length; i++) {
	document.writeln(fruits[i]);
}
document.writeln('<br>');