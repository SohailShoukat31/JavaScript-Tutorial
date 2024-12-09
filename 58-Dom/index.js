// The DOM (Document Object Model)  is a programming interface for web documents
//  It represents the structure of a web page as a tree of objects,
// where each object corresponds to a part of the page (like elements, attributes, and text).
//JavaScript can interact with the DOM to dynamically modify the content and structure of a webpage.

console.log("Hello World");
window.console.log("Hello World !");
console.log(window);
console.log(window.document);
console.dir(window);
console.log(document.head);
console.log(document.body);

//  ----------> Dom in JavaScript

// window Node
// document
// HTML
// There are two main components in HTML
// 1 Head
// Inside the there is title
// 2 body
// <div> <h1>  <p>

// We can say that way to access HTML through Js is called Dom

// These changes called Dynamic changes or Dynamic manipulation

console.log(document.body.childNodes[1]);
console.dir(document.body.childNodes[3].childNodes[5]);
// We can change also style

// such as
document.body.style.background = "blue";
document.body.childNodes[1].innerText = "Learning with Sohail Shoukat";
