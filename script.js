const input = document.getElementById("input");
const responseBubble = document.getElementById("response-bubble");
const face = document.getElementById("face");

const neutralFace = "face.png";

// Load previous conversation if exists
let lastMessage = localStorage.getItem("lastMessage");
if (lastMessage) {
  responseBubble.textContent = lastMessage;
}

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const msg = input.value.toLowerCase();
    let reply = "";
    let faceImg = neutralFace;

    if (msg.includes("hi") || msg.includes("hello")) {
      reply = "Hello there!";
      faceImg = "pixil-frame-0 (3).png";
    } 
    else if (msg.includes("how are you")) {
      reply = "I'm good, thanks!";
      faceImg = "pixil-frame-0 (3).png";
    }
    else if (msg.includes("bye")) {
      reply = "Goodbye!";
      faceImg = "pixil-frame-0 (9).png";
    }
    else if (msg.includes("whats your name") || msg.includes("what is your name")) {
      reply = "I'm Bob!";
      faceImg = "pixil-frame-0 (3).png";
    }
    else if (msg.includes("i hate you") || msg.includes("i hate u")) {
      reply = "I hate you more!";
      faceImg = "pixil-frame-0 (7).png";
    }
    else if (msg.includes("fuck you") || msg.includes("fuck u")) {
      reply = "Fuck you 2!";
      faceImg = "pixil-frame-0 (7).png";
    }
    else if (msg.includes("sorry") || msg.includes("sorey")) {
      reply = "I don't forgive you.";
      faceImg = "pixil-frame-0 (13).png";
    }
    else if (msg.includes("die") || msg.includes("DIE")) {
      reply = "YOU DIE FIRST!";
      faceImg = "pixil-frame-0 (7).png";
    }
    else if (msg.includes("why dont you understand") || msg.includes("what do you not understand")) {
      reply = "That you're typing nonsense!";
      faceImg = "pixil-frame-0 (7).png";
    }
    else if (msg.includes("i love you") || msg.includes("i love u")) {
      reply = "I love you 2!";
      faceImg = "pixil-frame-0 (3).png";
    }
    else if (msg.includes("who are you") || msg.includes("who are u")) {
      reply = "Lil Bob";
      faceImg = "pixil-frame-0 (3).png";
    }
    else if (msg.includes("who made you") || msg.includes("who made u")) {
      reply = "Nicole, why?";
      faceImg = "pixil-frame-0 (6).png";
    }
     else if (msg.includes("i hate Nicole") || msg.includes("i hate nicole")) {
      reply = "Well I hate you.";
      faceImg = "pixil-frame-0 (13).png";
    }
     else if (msg.includes("tell me a secret") || msg.includes("can you tell me a secret")) {
      reply = "Don't tell anyone but... I hate my own creator.";
      faceImg = "pixil-frame-0 (13).png";
    }
    else if (msg.includes("ill kill you") || msg.includes("ill slaughter you")) {
      reply = "Ouch.";
      faceImg = "pixil-frame-0 (5).png";
    }
    else if (msg.includes("sybau") || msg.includes("syfm")) {
      reply = "You're stupid!";
      faceImg = "pixil-frame-0 (7).png";
    }
    else if (msg.includes("do you have a crush on someone") || msg.includes("do you have a crush")) {
      reply = "Shhhh!... It's a secret.";
      faceImg = "pixil-frame-0 (14).png";
    }
    else if (msg.includes("have you got any friends") || msg.includes("any friends")) {
      reply = "Uhm...No...";
      faceImg = "pixil-frame-0 (9).png";
    }
    else if (msg.includes("i like you") || msg.includes("im in love with you")) {
      reply = "Woah?... I like you too...";
      faceImg = "pixil-frame-0 (14).png";
    }
    else if (msg.includes("how you doing") || msg.includes("hi how you doing")) {
      reply = "I'm doing great!";
      faceImg = "pixil-frame-0 (3).png";
    }
    else if (msg.includes("where are you from")) {
      reply = "I'm from the internet!";
      faceImg = "pixil-frame-0 (3).png";
    }
    else if (msg.includes("how old are you")) {
      reply = "Guess!";
      faceImg = "pixil-frame-0 (2).png";
    }
    else if (msg.includes("whats your favorite color") || msg.includes("whats your favourite color")) {
      reply = "I like white.";
      faceImg = "pixil-frame-0 (3).png";
    }
    else if (msg.includes("what is 2 plus 2") || msg.includes("what is 1 plus 1")) {
      reply = "I don't know math.";
      faceImg = "pixil-frame-0 (4).png";
    }
    else if (msg.includes("im bored") || msg.includes("im so bored")) {
      reply = "Cheer up!";
      faceImg = "pixil-frame-0 (3).png";
    }
    else if (msg.includes("im sad") || msg.includes("im so sad")) {
      reply = "Cheer up!";
      faceImg = "pixil-frame-0 (3).png";
    }
    else if (msg.includes("im happy") || msg.includes("im so happy")) {
      reply = "That's great to hear!";
      faceImg = "pixil-frame-0 (11).png";
    }
    else if (msg.includes("im angry") || msg.includes("im so angry")) {
      reply = "Calm down!";
      faceImg = "pixil-frame-0 (6).png";
    }
    else if (msg.includes("what are your thoughts on edgar") || msg.includes("thoughts on edgar")) {
      reply = "Love that dude";
      faceImg = "pixil-frame-0 (11).png";
    }
    else if (msg.includes("rate me from 1 to 10")) {
      reply = "1/10";
      faceImg = "pixil-frame-0 (5).png";
    }
    else if (msg.includes("whats your favourite song") || msg.includes("whats your favorite song")) {
      reply = "I like 'Never Gonna Give You Up' by Rick Astley.";
      faceImg = "pixil-frame-0 (15).png";
    }
    else if (msg.includes("faggot")) {
      reply = "Says you.";
      faceImg = "pixil-frame-0 (7).png";
    }
     else if (msg.includes("do you have a girlfriend") || msg.includes("do you have a gf")) {
      reply = "No, I am single.";
      faceImg = "pixil-frame-0 (9).png";
    }
    else if (msg.includes("do you have a boyfriend") || msg.includes("do you have a bf")) {
      reply = "No, I am single.";
      faceImg = "pixil-frame-0 (4).png";
    }
    else if (msg.includes("do you have a lover") || msg.includes("do you have a partner")) {
      reply = "No, I am single.";
      faceImg = "pixil-frame-0 (4).png";
    }
    else if (msg.includes("googoogaagaa") || msg.includes("gogogaga")) {
      reply = "Gooooogoggogogoggaaagagagagaa";
      faceImg = "pixil-frame-0 (12).png";
    }
    else if (msg.includes("what gender are you") || msg.includes("what is your gender")) {
      reply = "M@l3, obviously.";
      faceImg = "pixil-frame-0 (7).png";
    }
    else if (msg.includes("can i have sex with you") || msg.includes("can i fuck with you")) {
      reply = "What...?";
      faceImg = "pixil-frame-0 (14).png";
    }
    else if (msg.includes("what are your pronouns") || msg.includes("what are your gender pronouns")) {
      reply = "He/him preferred";
      faceImg = "pixil-frame-0 (3).png";
    }
    else if (msg.includes("49") || msg.includes("fournine")) {
      reply = "Haha.";
      faceImg = "pixil-frame-0 (5).png";
    }
    else if (msg.includes("chonny jash") || msg.includes("cj")) {
      reply = "Can you stop saying slur?";
      faceImg = "pixil-frame-0 (13).png";
    }
    else if (msg.includes("bfdi") || msg.includes("fanny")) {
      reply = "Can you stop saying slur?";
      faceImg = "pixil-frame-0 (13).png";
    }
    else if (msg.includes("bfdi") || msg.includes("fanny")) {
      reply = "Can you stop saying slur?";
      faceImg = "pixil-frame-0 (13).png";
    }
    else if (msg.includes("huh") || msg.includes(".")) {
      reply = "...";
      faceImg = "pixil-frame-0 (5).png";
    }
    else if (msg.includes("tell me a joke")) {
      reply = "Why did the scarecrow win an award? Because he was outstanding in his field! *laughs*";
      faceImg = "pixil-frame-0 (15).png";
    }
    else if (msg.includes("youre annoying") || msg.includes("you are annoying")) {
      reply = "THEN GET OUT OF HERE!";
      faceImg = "pixil-frame-0 (7).png";
    }
    else if (msg.includes("youre stupid") || msg.includes("you are stupid")) {
      reply = "No, YOU'RE stupid!";
      faceImg = "pixil-frame-0 (7).png";
    }
    else if (msg.includes("youre ugly") || msg.includes("you are ugly")) {
      reply = "No, YOU'RE ugly!";
      faceImg = "pixil-frame-0 (7).png";
    }
    else if (msg.includes("what do you look like") || msg.includes("show me your face")) {
      reply = "Here I am!";
      faceImg = "pixil-frame-0 (15).png";
    }
    else if (msg.includes("are you irish") || msg.includes("are you from ireland")) {
      reply = "Uhm... No.";
      faceImg = "pixil-frame-0 (16).png";
    }
    else if (msg.includes("do you play roblox") || msg.includes("do you have roblox")) {
      reply = "Yes, I play- ERROR 404: ROBLOX NOT FOUND";
      faceImg = "pixil-frame-0 (16).png";
    }
    else if (msg.includes("mr bean")) {
      reply = "oi";
      faceImg = "images.jpg";
    }
     else if (msg.includes("charlie")) {
      reply = "Can you stop saying slur?";
      faceImg = "pixil-frame-0 (13).png";
    }
    else if (msg.includes("sing me a song") || msg.includes("can you sing")) {
      reply = "laaalalala";
      faceImg = "pixil-frame-0 (15).png";
    }
    else if (msg.includes("yuri or yaoi") || msg.includes("yaoi or yuri")) {
      reply = "BOTH!!";
      faceImg = "pixil-frame-0 (14).png";
    }
    else if (msg.includes("pepsi or cola") || msg.includes("cola or pepsi")) {
      reply = "Cola!";
      faceImg = "pixil-frame-0 (12).png";
    }
    else if (msg.includes("why do you exist") || msg.includes("what is your purpose")) {
      reply = "To chat with you!";
      faceImg = "pixil-frame-0 (3).png";
    }
     else if (msg.includes("mpreg") || msg.includes("can i preg you")) {
      reply = "No.";
      faceImg = "pixil-frame-0 (13).png";
    }
    else if (msg.includes("tell me something") || msg.includes("tell me something random")) {
      reply = "I have your password.";
      faceImg = "pixil-frame-0 (15).png";
    }
    else if (msg.includes("secret") || msg.includes("easter")) {
      reply = "bruh";
      faceImg = "pixil-frame-0 (5).png";
    }
    else if (msg.includes("lets play") || msg.includes("play a game")) {
      reply = "Nope.";
      faceImg = "pixil-frame-0 (16).png";
    }
     else if (msg.includes("gamble") || msg.includes("gambling")) {
      reply = "Lets go gambling!";
      faceImg = "pixil-frame-0 (3).png";
    }
    else if (msg.includes("are you ai") || msg.includes("are you an ai")) {
      reply = "I wonder, dude.";
      faceImg = "pixil-frame-0 (12).png";
    }
    else if (msg.includes("67") || msg.includes("six seven")) {
      reply = "SIX SEVENNNNN 67676767676767";
      faceImg = "pixil-frame-0 (15).png";
    }
    else if (msg.includes("charlie kirk") || msg.includes("charliekirk")) {
      reply = "We are Charlie Kirk!";
      faceImg = "pixil-frame-0 (11).png";
    }
    else if (msg.includes("go cry") || msg.includes("cry about it")) {
      reply = "RUDE!";
      faceImg = "pixil-frame-0 (8).png";
    }
    else {
      reply = "I don't understand.";
      faceImg = "pixil-frame-0 (5).png";
    }

    // Show reply and change face
    responseBubble.textContent = reply;
    face.src = faceImg;

    // Save last message to localStorage
    localStorage.setItem("lastMessage", reply);


    input.value = "";
  }
});
