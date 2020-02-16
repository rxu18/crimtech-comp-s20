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

// returns a random int in half-open interval [a, b)
const randomInt = (a, b) => {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return -1;
    }
    var range = b - a;
    return Math.floor(Math.random() * range) + a;
}

function respond() {
    var img = document.getElementById("yoda_image");
    var text = document.getElementById("chat").value;
    var response = document.getElementById("response");
    console.log(chat);

    // build new image path and response based on input
    var newImgPath = "img/";
    var newResponse = "";
    var isBabyYoda = (text.includes("cute") || text.includes("baby"));
    newImgPath += isBabyYoda ? names[0] : names[1];
    newImgPath += "-";
    if (text.includes(moods[0])) {
        newImgPath += moods[0]
        newResponse += dark_quotes[randomInt(0, dark_quotes.length)];
    } else if (text.includes(moods[1])) {
        newImgPath += moods[1]
        newResponse += force_quotes[randomInt(0, force_quotes.length)];
    } else {
        newImgPath += moods[2];
        newResponse += std_quotes[randomInt(0, std_quotes.length)];
    }
    newImgPath += ".jpg";

    // load new image and text
    img.src = newImgPath;
    response.innerText = isBabyYoda ? "" : newResponse + " h" + "m".repeat(randomInt(5, 10));
    document.getElementById("form").reset();
    return false;       // prevent page refresh
}
