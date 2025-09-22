let state = "intro";
let seedX, seedY;
let seedSpeed = 6;

let polySynth;
let musicStarted = false;
let chordIndex = 0;
let melodyIndex = 0;

let chords = [
  ["C4", "E4", "G4"], 
  ["F4", "A4", "C5"], 
  ["G4", "B4", "D5"], 
  ["A3", "C4", "E4"], 
];

let melody = ["E4", "G4", "A4", "G4", "E4", "D4", "C4", "D4"];


let seedFallingImg, seedSplashImg;

let imgElement;
let selectedQuote;

let splashTimer = 0;

let imageLinks = [
  "assets/seed for the soul-02.png",
  "assets/seed for the soul-03.png",
  "assets/seed for the soul-04.png",
  "assets/seed for the soul-05.png",
  "assets/seed for the soul-06.png",
  "assets/seed for the soul-07.png",
  "assets/seed for the soul-08.png",
  "assets/seed for the soul-09.png",
  "assets/seed for the soul-10.png",
  "assets/seed for the soul-11.png",
  "assets/seed for the soul-12.png",
  "assets/seed for the soul-13.png",
  "assets/seed for the soul-14.png",
  "assets/seed for the soul-15.png",
  "assets/seed for the soul-16.png",
  "assets/seed for the soul-17.png",
  "assets/seed for the soul-18.png",
  "assets/seed for the soul-19.png",
  "assets/seed for the soul-20.png",
  "assets/seed for the soul-21.png",
  "assets/seed for the soul-22.png",
  "assets/seed for the soul-23.png",
  "assets/seed for the soul-24.png",
  "assets/seed for the soul-25.png",
  "assets/seed for the soul-26.png",
  "assets/seed for the soul-27.png",
  "assets/seed for the soul-28.png",
  "assets/seed for the soul-29.png",
  "assets/seed for the soul-30.png",
  "assets/seed for the soul-31.png",
  "assets/seed for the soul-32.png",
  "assets/seed for the soul-33.png",
  "assets/seed for the soul-34.png",
  "assets/seed for the soul-35.png",
  "assets/seed for the soul-36.png",
  "assets/seed for the soul-37.png",
  "assets/seed for the soul-38.png",
  "assets/seed for the soul-39.png",
  "assets/seed for the soul-40.png",
  "assets/seed for the soul-41.png",
  "assets/seed for the soul-42.png",
  "assets/seed for the soul-43.png",
  "assets/seed for the soul-44.png",
  "assets/seed for the soul-45.png",
  "assets/seed for the soul-46.png",
  "assets/seed for the soul-47.png",
  "assets/seed for the soul-48.png",
  "assets/seed for the soul-49.png",
  "assets/seed for the soul-50.png",
  "assets/seed for the soul-51.png",
  "assets/seed for the soul-52.png",
  "assets/seed for the soul-53.png",
  "assets/seed for the soul-54.png",
  "assets/seed for the soul-55.png",
  "assets/seed for the soul-56.png",
  "assets/seed for the soul-57.png",
  "assets/seed for the soul-58.png",
  "assets/seed for the soul-59.png",
  "assets/seed for the soul-60.png",
  "assets/seed for the soul-61.png",
  "assets/seed for the soul-62.png",
  "assets/seed for the soul-63.png",
  "assets/seed for the soul-64.png",
  "assets/seed for the soul-65.png",
  "assets/seed for the soul-66.png",
  "assets/seed for the soul-67.png",
  "assets/seed for the soul-68.png",
  "assets/seed for the soul-69.png",
  "assets/seed for the soul-70.png",
  "assets/seed for the soul-71.png",
  "assets/seed for the soul-72.png",
  "assets/seed for the soul-73.png",
  "assets/seed for the soul-74.png",
  "assets/seed for the soul-75.png",
  "assets/seed for the soul-76.png",
  "assets/seed for the soul-77.png",
  "assets/seed for the soul-78.png",
  "assets/seed for the soul-79.png",
  "assets/seed for the soul-80.png",
  "assets/seed for the soul-81.png",
]
]


let quotes = [
  "Don’t forget, you’re sunlight with WiFi.",
  "If plants can grow through concrete, you can grow through Monday.",
  "You’re not behind, you’re just in your growing season.",
  "Roots take time, so do you.",
  "Even cactus need water sometimes, don’t forget to hydrate.",
  "You’re not lost, you’re just repotting.",
  "Your roots are deeper than your doubts.",
  "Even droughts end.",
  "Storms don’t last forever, but they do water the plants.",
  "Trust the process - trees take decades.",
  "If nobody claps for you, imagine the leaves rustling.",
  "You’re allowed to outgrow your pot.",
  "Not every day is bloom day, sometimes it’s root day.",
  "If life gives you dirt, make it soil.",
  "Let yourself rest, even the sun sets.",
  "Even a seed in the dark knows it’s meant to grow.",
  "Weeds? More like survival icons.",
  "Flowers don’t look at each other and say “ew,” they just vibe.",
  "You bloom harder than any flower on Pinterest.",
  "You’re rare like a four-leaf clover.",
  "You’re literally aesthetic plant TikTok in human form.",
  "You’re rarer than a blooming cactus.",
  "You’re literally cottagecore chic without even trying.",
  "Drink water. You’re not a cactus, bro.",
  "Stare at a leaf for 5 minutes. Free therapy.",
  "Talk to your plants. They won’t ghost you.",
  "Go outside, the WiFi of nature is free.",
  "If lost, just stand like a tree - NPC energy.",
  "Plant something. If it dies, call it a metaphor.",
  "Whisper your secrets to grass. It won’t snitch.",
  "Try photosynthesizing. If it doesn’t work, eat salad.",
  "Hug a tree. Free serotonin included.",
  "Put your problems in the compost. Watch them rot.",
  "Lay in the grass. Now you’re the picnic aesthetic.",
  "Talk to trees. They’ve heard worse.",
  "Name your plant “Karen” and overshare to it.",
  "Lay on the floor. Call it “indoor grounding.”",
  "Watch ants. Free Netflix.",
  "Eat salad, become one with the greens.",
  "Touch bark. Free exfoliation.",
  "Pretend to photosynthesize in sunlight, people will leave you alone.",
  "Stare at roots, remember you’re grounded too.",
  "Call yourself a forest. Dramatic but true.",
  "Build a leaf pile, jump in. Boom - therapy.",
  "Let rain hit your face, call it nature’s skincare.",
  "Leaves fall. You can too. Then get up.",
  "Water your brain. It’s wilting.",
  "You’re basically a tree with WiFi, act like it.",
  "If you’re falling apart, call it autumn aesthetic.",
  "Touch grass before grass touches you.",
  "If you’re spiraling, call it “vine energy.”",
  "Be like cactus: look scary, vibe cozy.",
  "You’re not dead inside, you’re just wintering.",
  "Plant chaos, harvest memes.",
  "If overthinking, call it “mental gardening.”",
  "Dead leaves? Compost them, not your dreams.",
  "Cry in the shower - free plant watering cosplay.",
  "Even weeds annoy people and still thrive.",
  "Pretend you’re aesthetic forest-core. Works every time.",
  "If you’re tired, call it “leaf drop season.”",
  "Stomp on your problems like crunchy leaves.",
  "Pretend your depression is just photosynthesis gone wrong.",
  "Bloom awkwardly, it’s still blooming.",
  "If life’s messy, call it jungle-core.",
  "You’re not stuck - you’re rooted.",
  "Bloom so hard they think you’re photoshopped.",
  "Water yourself, not your ex’s ego.",
  "Stop comparing yourself, even weeds find a way.",
  "Be-leaf in yourself, it’s tree-mendous.",
  "Be feral but in a cottagecore way.",
  "Even cacti have flowers, so what’s your excuse?",
  "You’re a whole ecosystem, not just one leaf.",
  "Rooting for you, literally.",
  "Stay hydrated or photosynthesize trying.",
  "You’re basically the main character in a Studio Ghibli garden scene.",
  "Your mental health plant needs repotting, babe.",
  "Feral flower energy >>> boss babe grindset.",
  "Bloom now, apologize never.",
  "Your vibe screams “plant that eats bugs but politely.”",
  "You’re the plot twist in someone’s botanical garden.",
  "Your energy is illegal in three different ecosystems.",
  "Root down, glow up.",
  "The forest thinks you’re iconic.",
  "Keep growing weird, normal plants are boring.",
  "You’re not lost, you’re just exploring new soil.",
  "You’re basically the chaos element in Mother Nature’s group chat.",
  "You’re the moss on a rock that tourists take pictures of.",
  "You radiate “tree that refuses to fall in storms” vibes.",
  "Your chaos is biodegradable, sustainable queen.",
  "You’re literally photosynthesizing main character energy.",
  "The bugs talk about you like you’re famous.",
  "Be your own sunlight, babe.",
];


function preload() {
  seedImg = loadImage("https://i.postimg.cc/VNcXp2DH/elements-02.png");
  splashImg = loadImage("https://i.postimg.cc/9ftyh1kX/elements-03.png");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasHolder");

  seedX = width / 2;
  seedY = -200;

  noLoop();

  polySynth = new p5.PolySynth();

  document.body.addEventListener("mouseenter", () => {
    if (!musicStarted) {
      musicStarted = true;
      playLoop();
    }
  });
}

function draw() {
  background(255);

  if (state === "falling") {
    imageMode(CENTER);
    image(seedImg, seedX, seedY); 

    seedY += seedSpeed;

    if (seedY >= height - 200) {
      seedY = height - 200;
      state = "splash";
      splashTimer = millis();
    }
  }

  else if (state === "splash") {
    imageMode(CENTER);
    image(splashImg, seedX, height - 200); 

    if (millis() - splashTimer > 2000) {
      state = "showResult";


      let randomLink = random(imageLinks);
      if (imgElement) imgElement.remove();
      imgElement = createImg(randomLink, "result");
      imgElement.size(900, 650); 
      imgElement.position(width / 2 - 450, height - 650 - 80);
      imgElement.style("z-index", "5");

      selectedQuote = random(quotes);
    }
  }

  else if (state === "showResult") {
    if (selectedQuote) {
      textFont("RelayFun");    
      textAlign(CENTER, TOP);  
      textSize(36);
      fill(0);

      let boxWidth = width * 0.8;  
      let x = width / 2;          
      let y = height - 488 - 80 - 190; 

      text(selectedQuote, x - boxWidth / 2, y, boxWidth, 400);
    }
  }

}

document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("intro").style.display = "none";
  state = "falling";
  seedY = -200;
  if (imgElement) imgElement.remove();
  loop();

  if (!musicStarted) {
  userStartAudio();   
  musicStarted = true;
  playLoop();
}

});


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function playLoop() {
  if (!musicStarted) return;

  let chord = chords[chordIndex];
  chord.forEach(n => polySynth.play(n, 0.15, 0, 1.5));

  let note = melody[melodyIndex];
  polySynth.play(note, 0.3, 0.2, 0.6);

  chordIndex = (chordIndex + 1) % chords.length;
  melodyIndex = (melodyIndex + 1) % melody.length;

  setTimeout(playLoop, 1000);
}
