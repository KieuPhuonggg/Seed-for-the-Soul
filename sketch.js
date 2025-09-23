let state = "intro";
let seedX, seedY;
let seedSpeed = 6;

let polySynth;
let musicStarted = false;
let chordIndex = 0;
let melodyIndex = 0;

let chords = [
  ["C4", "E4", "G4"], // C
  ["F4", "A4", "C5"], // F
  ["G4", "B4", "D5"], // G
  ["A3", "C4", "E4"], // Am
];

let melody = ["E4", "G4", "A4", "G4", "E4", "D4", "C4", "D4"];

let seedFallingImg, seedSplashImg;

let imgElement;
let selectedQuote;

let splashTimer = 0;

let imageLinks = [
  "https://sf-static.upanhlaylink.com/img/image_20250921bc7ea80dbd119709b23f65bfac1bc713.jpg",
  "https://sf-static.upanhlaylink.com/img/image_202509210afe11e3b33d6106c23d8ed5b58a5bd4.jpg",
  "https://sf-static.upanhlaylink.com/img/image_202509210b62fed8d27463d78b5fb5f629486c28.jpg",
  "https://sf-static.upanhlaylink.com/img/image_2025092186375300b62ffeb77f4b20410321b17e.jpg",
  "https://sf-static.upanhlaylink.com/img/image_202509210c5e3cbbf1e6d3dc5f0d376dd2085282.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921193f8baf15dd1d20be48956a4b39e712.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921f11e74d9a480a55d1bca347b3f3802c4.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921064f16ffa4b2bd5b53d8ca3a80603623.jpg",
  "https://sf-static.upanhlaylink.com/img/image_2025092146ccb3aede426e3e511942f870cdb6ea.jpg",
  "https://sf-static.upanhlaylink.com/img/image_202509213c4607f11cdc90c0d3a88a5129458076.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921d83f3d2dc25da3b9a7712c426f6a592f.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921d4ef7e51f6e597d56b2e79efce35eb19.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921ab6e06ef61735a99fc18816ed7a9574b.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921459f4fdac61cd3e921ab98b213c1054c.jpg",
  "https://sf-static.upanhlaylink.com/img/image_2025092145bae39c695114529a2f2b0a3be22fd6.jpg",
  "https://sf-static.upanhlaylink.com/img/image_202509218223095530cdc79b9f493b2660a484ba.jpg",
  "https://sf-static.upanhlaylink.com/img/image_2025092109f46763f67965e632c7c8c8a20be981.jpg",
  "https://sf-static.upanhlaylink.com/img/image_202509210834ba41590115294b12e27aa9f3d8af.jpg",
  "https://sf-static.upanhlaylink.com/img/image_202509213b013ce6d94dbbb9fef9cb204ef36d40.jpg",
  "https://sf-static.upanhlaylink.com/img/image_202509210ba9b936e6663bb4e92bc6f322f2bf2d.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921e9da496392176d84567f745a8a731de4.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921933e8d5d227865fd9c34890254d206ce.jpg",
  "https://sf-static.upanhlaylink.com/img/image_202509213caa106a81ace73800143214666aaa6e.jpg",
  "https://sf-static.upanhlaylink.com/img/image_2025092178ee881ddc3eebbe90a0ab66d484bc71.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921815844576a5424194487348e0339a661.jpg",
  "https://sf-static.upanhlaylink.com/img/image_202509211bb32a659b76f2d14a7d48cb71267c18.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921b9be8350872b33f29c84f8e25211c268.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921f7198078cae4dcd5b33c70d6b7b4ae2a.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921de409b34464409dc343bfbd4b16ea7d7.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921c593de647c15251944a99ccd0930ae6b.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921f2149166574e529623f030847cdf669e.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921997c8a945814b23e8512444b229f91c5.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921d31f927a4602db4f105bbeba40179721.jpg",
  "https://sf-static.upanhlaylink.com/img/image_202509210bf7b0e098196b713ea0cf606c6f5cc7.jpg",
  "https://sf-static.upanhlaylink.com/img/image_2025092124a015ad1c12987827277fefe0cb9dd0.jpg",
  "https://sf-static.upanhlaylink.com/img/image_202509214789a070e9b1ca9e50bb8b1ff122ab83.jpg",
  "https://sf-static.upanhlaylink.com/img/image_2025092126f083e5ad27ea84f891c487ac360a4c.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921d2b28b02a94d1c2834e36f0b875e2b73.jpg",
  "https://sf-static.upanhlaylink.com/img/image_2025092159ae06b004831b1e9ccfd94230cad93d.jpg",
  "https://sf-static.upanhlaylink.com/img/image_202509218a4bf81fd789632bf7903c28a7833649.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921b7adbbc27b0497c0818fabb1fc9b7315.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921c58a56e37ac21373c122e7061973621a.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921d30bd2e6f3aab1502051c7eca603f5e2.jpg",
  "https://sf-static.upanhlaylink.com/img/image_2025092123ed0e8b445e7bfca731469649d2b9a3.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921453fdc3c1a2a79d697fe16786de837a6.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921c080c611d99c322cf344d3aea486fbdc.jpg",
  "https://sf-static.upanhlaylink.com/img/image_2025092192542aefff0f6e8446b11bdc8f9f1385.jpg",
  "https://sf-static.upanhlaylink.com/img/image_2025092171399cd9c6483f85f0d9096c57dcfcfe.jpg",
  "https://sf-static.upanhlaylink.com/img/image_2025092135f7b5a69b6e3276e849e3ab5030b6ad.jpg",
  "https://sf-static.upanhlaylink.com/img/image_2025092141e2cdf7c29aab73a671c2ade8990633.jpg",
  "https://sf-static.upanhlaylink.com/img/image_202509217cf74af8b62b19dadb4b21c41fa74d9e.jpg",
  "https://sf-static.upanhlaylink.com/img/image_2025092118164b40125479c59e924ca04d29c879.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921abc4b28c0e71cf2824c827a4bcfe1edd.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921fa8105595960ede8d999816477b81ca8.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921aee7cf63359861ef1bbf6e8553ff7805.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921a66e1fc42895628776007d6d7bd081f9.jpg",
  "https://sf-static.upanhlaylink.com/img/image_202509219c6e52fcdf63416b68510941306bdd15.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921a445e93c0d745555a45cace2b5ecd2fc.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921637a3cd256c6c55e1cf159f8a52a5965.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921ca62cc4e28cbb973713f01b4bb8f5777.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921fdc2edc5f63f91eb002f31acdcd94301.jpg",
  "https://sf-static.upanhlaylink.com/img/image_2025092160536cb0d78eb27dd49f605f181252e9.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921f6ee40578a20698cefe37cba15d9982e.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921bc6ef06de0b029a7582f29dd233382fa.jpg",
  "https://sf-static.upanhlaylink.com/img/image_202509215555e34851109b9273e91cd20d903a8d.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921149d73442add9fc6f1c111b23654f8a6.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921790aec2150f462fd267cad3802645355.jpg",
  "https://sf-static.upanhlaylink.com/img/image_2025092191eb7c357e8233b1dbc41eb2c433f9cb.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921db5e2cd2900e06eb6a6cf24149a55215.jpg",
  "https://sf-static.upanhlaylink.com/img/image_202509211729899d3738d19b9c2feb0426b62b42.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921eb3161564187fa5e8f322f1902246369.jpg",
  "https://sf-static.upanhlaylink.com/img/image_2025092113a523c016fcff1a30d4ed3a48a4c395.jpg",
  "https://sf-static.upanhlaylink.com/img/image_202509215c9adeaa0867a109cd3357f7f6570554.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921c054ec967f89cff3012525a1d7982e0d.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921e6f04e7c2d9ba70091041ce33c24ce68.jpg",
  "https://sf-static.upanhlaylink.com/img/image_202509214ffd7775d5d37e3aaa85db0c06053910.jpg",
  "https://sf-static.upanhlaylink.com/img/image_20250921389a0af79a3d8b1e663f99e4808f0b0d.jpg",
  "https://sf-static.upanhlaylink.com/img/image_2025092155b113ae2f4754ca269dddda8de3a0be.jpg",
  "https://sf-static.upanhlaylink.com/img/image_202509216f83c2c509a1f645e1884608e89b6a1a.jpg",
];

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
  "Stare at a leaf for a few minutes. Free therapy.",
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
  } else if (state === "splash") {
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
  } else if (state === "showResult") {
    if (selectedQuote) {
      textFont("RelayFun");
      textAlign(CENTER, TOP);
      textSize(36);
      fill(0);

      let boxWidth = width * 0.8;
      let x = width / 2;
      let y = height - 488 - 80 - 180;

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
});

function playLoop() {
  if (!musicStarted) return;

  let chord = chords[chordIndex];
  chord.forEach((n) => polySynth.play(n, 0.15, 0, 1.5));

  let note = melody[melodyIndex];
  polySynth.play(note, 0.3, 0.2, 0.6);

  chordIndex = (chordIndex + 1) % chords.length;
  melodyIndex = (melodyIndex + 1) % melody.length;

  setTimeout(playLoop, 2000);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  seedX = width / 2;
  seedY = -200;
  if (imgElement) {
    imgElement.position(width / 2 - 450, height - 650);
  }
}
