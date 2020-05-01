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


var input = document.getElementById("myQuotes");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});

function respond() {
    var cutePhotos = new Array("img/cute-dark.jpg","img/cute-force.jpg","img/cute-std.jpg");
    var m = "m"
    
    // for cute photos
    if (document.getElementById("myQuotes").value.includes("cute") || document.getElementById("myQuotes").value.includes("baby")) 
    {
        if (document.getElementById("myQuotes").value.includes("dark")) 
        {
            if (document.getElementById("myQuotes").value.includes("force"))
            {
                document.getElementById("myPic").src = "img/cute-force.jpg";
                document.getElementById("ranQuote").textContent = "Yes, h"+m.repeat(Math.floor(Math.random() * 20));
            }
            else
            {
                document.getElementById("myPic").src = "img/cute-dark.jpg";
                document.getElementById("ranQuote").textContent = "Yes, h"+m.repeat(Math.floor(Math.random() * 20));
            }
            
        }
        else 
        {
            var cutequote = Math.floor(Math.random() * cutePhotos.length);
            document.getElementById("myPic").src = cutePhotos[cutequote];
            document.getElementById("ranQuote").textContent = "Yes, h"+m.repeat(Math.floor(Math.random() * 20));
        }
    }
    // for dark/force photos
    else  
    {
        if (document.getElementById("myQuotes").value.includes("force")) 
        {
            if (document.getElementById("myQuotes").value.includes("dark"))
            {
                document.getElementById("myPic").src = "img/regular-dark.jpg";
                var darkquote = Math.floor(Math.random() * dark_quotes.length);
                document.getElementById("ranQuote").textContent = dark_quotes[darkquote]
            }
            else
            {
                document.getElementById("myPic").src = "img/regular-force.jpg";
                var forcequote = Math.floor(Math.random() * force_quotes.length);
                document.getElementById("ranQuote").textContent = force_quotes[forcequote]
            }
        }
    }
    document.getElementById("myQuotes").value = "";
} 