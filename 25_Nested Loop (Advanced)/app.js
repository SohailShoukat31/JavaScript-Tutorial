var arr = ["Salman Khan", "Arbaz khan", "Sohail khan"];
var arr2 = ["Saleem khan", "Asad"];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr2.length; j++) {
    document.write(arr[i] + " " + arr2[j] + "<br>");
  }
  // document.write(arr[i] +" " +arr2 +" " +"<br>")
}

var fruits = ["Apple", "Mango", "Orange"];
var fruits2 = ["Fruits"];
for (var i = 0; i < fruits.length; i++) {
  for (var j = 0; j < fruits2.length; j++) {
    document.write(fruits[i] + " " + fruits2[j] + "</br>");
  }
  // document.write(fruits[i])
}

for (var i = 1; i <= 100; i = i + 10) {
  for (var j = i; j < i + 10; j++) {
    document.write(j + " ");
  }
  document.write("<br>");
  // document.write(i + "<br>")
}
