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
    var text = document.getElementById('text_input').value;
    // clear textbox
    document.getElementById("text_input").value = "";
    // convert to lowercase
    text = text.toLowerCase();
    if (text.includes("cute") || text.includes("baby"))
    {
        document.getElementById('yoda_img').src='img/cute-std.jpg'
        // get random quote
        var n = Math.floor(Math.random() * std_quotes.length); 
        str1 = "m".repeat(n+8);
        str2 = std_quotes[n];
        str = str2.concat(" h", str1);
        document.getElementById('yoda_text').textContent=str
    }
    else if (text.includes("force"))
    {
        if (text.includes("dark"))
        {
            // get random quote
            var n = Math.floor(Math.random() * dark_quotes.length); 
            str1 = "m".repeat(n+8);
            str2 = dark_quotes[n];
            str = str2.concat(" h", str1);
            document.getElementById('yoda_text').textContent=str;  
            
            // get random dark pic
            var k = Math.floor(Math.random()* 2); 
            if (k)
            {
                pic = "img/cute-dark.jpg";
            }
            else
            {
                pic = "img/regular-dark.jpg";
            }
            document.getElementById('yoda_img').src=pic;           
        }
        else
        {
            // get random quote
            var n = Math.floor(Math.random() * force_quotes.length); 
            str1 = "m".repeat(n+8);
            str2 = force_quotes[n];
            str = str2.concat(" h", str1);
            document.getElementById('yoda_text').textContent=str;  

            // get random dark pic
            var k = Math.floor(Math.random()* 2); 
            if (k)
            {
                pic = "img/cute-force.jpg";
            }
            else
            {
                pic = "img/regular-force.jpg";
            }
            document.getElementById('yoda_img').src=pic              
        }
    }

    input.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          document.getElementById("btn").click();
        }
      });
}
