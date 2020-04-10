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



document.getElementById("myText").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("myBut").click();
    }
});

function respond() {
    var cutePics = new Array("img/cute-dark.jpg","img/cute-force.jpg","img/cute-std.jpg");
    var forcePics = new Array("img/cute-force.jpg","img/regular-force.jpg")
    var darkForcePics = new Array("img/cute-dark.jpg", "img/regular-dark.jpg")
    var regularPics = new Array("img/regular-dark.jpg", "img/regular-std.jpg", "img/regular-force.jpg")
    var allPics = new Array("img/cute-dark.jpg", "img/cute-std.jpg", "img/cute-force.jpg", "img/regular-dark.jpg", "img/regular-std.jpg", "img/regular-force.jpg")
    var m = "m"
  
    if (document.getElementById("myText").value.includes("cute") || document.getElementById("myText").value.includes("baby")) 
    {
        if (document.getElementById("myText").value.includes("force")) 
        {
            if (document.getElementById("myText").value.includes("dark"))
            {
                document.getElementById("myImage").src = "img/cute-dark.jpg";
                document.getElementById("description").textContent = "h"+m.repeat(Math.floor(Math.random() * 5));
            }
            else
            {
                document.getElementById("myImage").src = "img/cute-force.jpg";
                document.getElementById("description").textContent = "h"+m.repeat(Math.floor(Math.random() * 5));
            }
            
        }
        else 
        {
            var randomCute = Math.floor(Math.random() * cutePics.length);
            document.getElementById("myImage").src = cutePics[randomCute];
            document.getElementById("description").textContent = "h"+m.repeat(Math.floor(Math.random() * 5));
        }
    }
    else  
    {
        if (document.getElementById("myText").value.includes("force")) 
        {
            if (document.getElementById("myText").value.includes("dark"))
            {
                document.getElementById("myImage").src = "img/regular-dark.jpg";
                var randomDark = Math.floor(Math.random() * dark_quotes.length);
                document.getElementById("description").textContent = dark_quotes[randomDark]
            }
            else
            {
                document.getElementById("myImage").src = "img/regular-force.jpg";
                var randomForce = Math.floor(Math.random() * force_quotes.length);
                document.getElementById("description").textContent = force_quotes[randomForce]
            }
        }
        else
        {
            var randomPic = Math.floor(Math.random() * regularPics.length);
            document.getElementById("myImage").src = regularPics[randomPic];
            var randomQuote = Math.floor(Math.random() * 3);
            if (randomQuote == 0)
            {
                var randomForce = Math.floor(Math.random() * force_quotes.length);
                document.getElementById("description").textContent = force_quotes[randomForce]
            }
            else if (randomQuote == 1)
            {
                var randomDark = Math.floor(Math.random() * dark_quotes.length);
                document.getElementById("description").textContent = dark_quotes[randomDark]
            }
            else if (randomQuote == 2)
            {
                var randomStandard = Math.floor(Math.random() * std_quotes.length);
                document.getElementById("description").textContent = std_quotes[randomStandard]
            }
        }
    }


    
    
    //    document.getElementById("description").textContent = force_quotes[0];
    //    if (document.getElementById("myText").value ==  "dark") {
    //        document.getElementById("myImage").setAttribute("src", "img/regular-dark.jpg");
    //        document.getElementById("description").textContent = force_quotes[0];
    //    }
    //  }
    //if yoda adult then quote from std_quotes, dark, or force
    //if baby yode then hmmmm with random number of ms
    console.log(document.getElementById("myText").value);
    document.getElementById("myText").value = "";
} 