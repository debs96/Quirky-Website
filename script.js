/* Making the arrows disappear when page is loaded */
let advice = document.getElementsByTagName("div");
//console.log(advice);

let arrows = document.getElementById("arrows");
arrows.style.opacity = 0;

/* Making the arrows appear when an advice is requested */
for (let i = 0; i <= 2; i++) {
  advice[i].addEventListener("click", showArrows);
}

function showArrows() {
  arrows.style.opacity = 1;
}

// !Self-Affirmation
let selfAffirmation = document.getElementById("self-affirmation");

/* Initializing a function for generating quotes */
selfAffirmation.addEventListener("click", showAdviceSelf);

let quotesSelf = [
  "I'm as put together as a toddler's LEGO creation, but hey, at least it's colorful!",
  "I'm like a fine wine - I improve with age, but my cork occasionally pops unexpectedly.",
  "I am the CEO of my own imaginary empire, ruling with unmatched clumsiness and charm!",
  "I may not have all the answers, but at least I excel at making questions sound profound!",
  "I'm a magnet for positivity, attracting good vibes wherever I go.",
  "I embrace my quirks like a badge of honor and a sprinkle of glitter!",
  "My life is a sitcom, and I'm the star of every episode!",
  "I'm a walking blooper reel, but life's too short for perfect takes!",
  "I'm not clumsy; I'm just testing gravity... frequently and with style!",
  "I'm a Jedi master of awkward moments, using the Force to turn cringe into comedy gold!",
];

let quoteNumberS = 0;

function showAdviceSelf() {
  /* Changing the background colour of the advice generators */
  let adviceBoxes = document.getElementsByTagName("div");
  //console.log(adviceBoxes);
  adviceBoxes[0].style.backgroundColor = "#f28627";
  adviceBoxes[0].style.color = "#f9f5f4";
  adviceBoxes[1].style.backgroundColor = "";
  adviceBoxes[1].style.color = "";
  adviceBoxes[2].style.backgroundColor = "";
  adviceBoxes[2].style.color = "";

  /* Generating quote */
  let quoteElement = document.getElementById("quote");
  quoteElement.textContent = quotesSelf[quoteNumberS];

  /* Right Arrow - Self */
  let rightSelf = document.getElementById("right-arrow");

  rightSelf.addEventListener("click", rightArrowSelf);

  function rightArrowSelf() {
    quoteNumberS++;

    if (quoteNumberS >= quotesSelf.length) {
      quoteNumberS = 0;
    }

    let quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotesSelf[quoteNumberS];
  }

  /* Left Arrow - Self */
  let leftSelf = document.getElementById("left-arrow");

  leftSelf.addEventListener("click", leftArrowSelf);

  function leftArrowSelf() {
    quoteNumberS--;
    if (quoteNumberS < 0) {
      quoteNumberS = quotesSelf.length - 1;
    }

    let quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotesSelf[quoteNumberS];
  }
}

// !Relationships
let relationship = document.getElementById("relationships");

/* Initializing a function for generating quotes */
relationship.addEventListener("click", showAdviceRelationship);

let quotesRelationship = [
  "Toilet seat up? It's a splashy adventure waiting to happen!",
  "Love letters? Nah, send memes. It's the modern 'I heart you.'",
  "In arguments, always play the 'Do you want to be right or do you want to be happy?' card.",
  "Partner snores? Pretend it's your personal bedtime soundtrack and invest in earplugs.",
  "Fart jokes: the universal tension breaker. Embrace the gas, feel the love.",
  "Romance hack: surprise tacos in bed. Beats roses any day.",
  "Find someone whose weirdness complements yours. Dance through life's quirks together!",
  "Keep things spicy by randomly replacing 'I love you' with 'I tolerate you.'",
  "When in doubt, hug it out. Yoda approves.",
  "When life gives you lemons, make lemonade, and have a laugh about how sour it turned out.",
];

let quoteNumberR = 0;

function showAdviceRelationship() {
  /* Changing the background colour of the advice generators */
  let adviceBoxes = document.getElementsByTagName("div");
  //console.log(adviceBoxes);
  adviceBoxes[1].style.backgroundColor = "#f2bbbb";
  adviceBoxes[1].style.color = "#f9f5f4";
  adviceBoxes[0].style.backgroundColor = "";
  adviceBoxes[0].style.color = "";
  adviceBoxes[2].style.backgroundColor = "";
  adviceBoxes[2].style.color = "";

  /* Generating quote */
  let quoteElement = document.getElementById("quote");
  quoteElement.textContent = quotesRelationship[quoteNumberR];

  /* Right Arrow - Relationship */
  let rightRelationship = document.getElementById("right-arrow");

  rightRelationship.addEventListener("click", rightArrowRelationship);

  function rightArrowRelationship() {
    quoteNumberR++;

    if (quoteNumberR >= quotesRelationship.length) {
      quoteNumberR = 0;
    }

    let quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotesRelationship[quoteNumberR];
  }

  /* Left Arrow - Relationship */
  let leftRelationship = document.getElementById("left-arrow");

  leftRelationship.addEventListener("click", leftArrowRelationship);

  function leftArrowRelationship() {
    quoteNumberR--;
    if (quoteNumberR < 0) {
      quoteNumberR = quotesRelationship.length - 1;
    }

    let quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotesRelationship[quoteNumberR];
  }
}

// !Encouragement
let encouragement = document.getElementById("encouragement");

/* Initializing a function for generating quotes */
encouragement.addEventListener("click", showAdviceEncouragement);

let quotesEncouragement = [
  "You've got this! And if you don't, well, you'll have a hilarious story to tell later.",
  "Lazy is the new black...said no successful person ever! Time to add some color to your day!",
  "Lazy bones, get up and shake what your mama gave you...to work!",
  "If procrastination was an Olympic sport, you'd be a gold medalist. But it's not, so get to work!",
  "Don't worry about fitting in; you were born to stand out, like a flamingo in a flock of pigeons.",
  "Your couch called - it's tired of supporting your laziness. Time to give it a break and get moving!",
  "Chin up! Even penguins slip on the ice, but they always waddle back with style.",
  "Hey slugger, the world's fastest snail called, it wants its pace back!",
  "You're a star! Just remember, even stars have their moments of cosmic clumsiness.",
  "Lazy is a full-time job with no benefits. How about we switch to the 'Get Stuff Done' department instead?",
];

let quoteNumberE = 0;

function showAdviceEncouragement() {
  /* Changing the background colour of the advice generators */
  let adviceBoxes = document.getElementsByTagName("div");
  //console.log(adviceBoxes);
  adviceBoxes[2].style.backgroundColor = "#f2c12e";
  adviceBoxes[2].style.color = "#f9f5f4";
  adviceBoxes[0].style.backgroundColor = "";
  adviceBoxes[0].style.color = "";
  adviceBoxes[1].style.backgroundColor = "";
  adviceBoxes[1].style.color = "";

  /* Generating quote */
  let quoteElement = document.getElementById("quote");
  quoteElement.textContent = quotesEncouragement[quoteNumberE];

  /* Right Arrow - Encouragement */
  let rightEncouragement = document.getElementById("right-arrow");

  rightEncouragement.addEventListener("click", rightArrowEncouragement);

  function rightArrowEncouragement() {
    quoteNumberE++;

    if (quoteNumberE >= quotesEncouragement.length) {
      quoteNumberE = 0;
    }

    let quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotesEncouragement[quoteNumberE];
  }

  /* Left Arrow - Encouragement */
  let leftEncouragement = document.getElementById("left-arrow");

  leftEncouragement.addEventListener("click", leftArrowEncouragement);

  function leftArrowEncouragement() {
    quoteNumberE--;
    if (quoteNumberE < 0) {
      quoteNumberE = quotesEncouragement.length - 1;
    }

    let quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotesEncouragement[quoteNumberE];
  }
}
