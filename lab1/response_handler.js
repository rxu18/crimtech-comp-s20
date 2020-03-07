// Declaring variables that you may want to use.
let names = ['cute', 'regular'];
let moods = ['dark', 'force', 'std'];

let dark_quotes = ["Once you start down the dark path, forever will it dominate your destiny, consume you it will.",
"In a dark place we find ourselves, and a little more knowledge lights our way.",
"Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
"Always two there are, no more, no less. A master and an apprentice.",
"In the end, cowards are those who follow the dark side."];
let force_quotes = ["Luminous beings are we, not this crude matter.",
"A Jedi uses the Force for knowledge and defense, never for attack.",
"Clear your mind must be, if you are to find the villains behind this plot.",
"The force. Life creates it, makes it grow. Its energy surrounds us and binds us.",
"My ally is the Force, and a powerful ally it is."];
let std_quotes = ["Patience you must have, my young padawan.",
"When nine hundred years old you reach, look as good you will not.",
"No! Try not! Do or do not, there is no try.",
"Judge me by my size, do you?",
"Difficult to see. Always in motion is the future."
];

function respond() {
    // Your Code Here
	var img = document.getElementById("yoda-img");
	var msg = document.getElementById("msgbox");
	//console.log(msg.value);
	//img.src = "img/cute-dark.jpg";
	// process image
	var imgloc = "img/";
	if (msg.value.indexOf("cute") != -1 || msg.value.indexOf("baby")) {
		imgloc += "cute-";
	} else {
		imgloc += "regular-";
	}
	if (msg.value.indexOf("force") != -1 && msg.value.indexOf("dark") != -1) {
		imgloc += "dark";
	} else if (msg.value.indexOf("force") != -1) {
		imgloc += "force";
	} else {
		imgloc += "std";
	}
	imgloc += ".jpg";
	img.src = imgloc;

	// output random quote
 	var quote = document.getElementById("yoda-quote");
	if (msg.value.indexOf("cute") != -1 || msg.value.indexOf("baby") != -1) {
		quote.innerHTML = "h" + "m".repeat(Math.floor((Math.random()*28)+3)) + "...";
	} else if (msg.value.indexOf("dark") != -1) {
		quote.innerHTML = dark_quotes[Math.floor((Math.random()*dark_quotes.length))];
	} else if (msg.value.indexOf("force") != -1) {
		quote.innerHTML = force_quotes[Math.floor((Math.random()*dark_quotes.length))];
	} else {
		quote.innerHTML = std_quotes[Math.floor((Math.random()*dark_quotes.length))];
	}

	msg.value = "";
    // console.log("Hello World!");
}

