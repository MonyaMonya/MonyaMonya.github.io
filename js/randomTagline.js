var randomTaglines = [
  "Sitting out in the rain",
  "Your ad goes here",
  "Alt size fiction",
  "Awake under the covers",
  "Trapped by hungry cats",
  "Don't wake me up",
  "Kissing after dark",
  "An anhedonic joy",
  "The zoo is closed today",
  "Folding an origami noose",
  "Bouquet of wet roses",
  "Cold and spicy rice",
  "At the top of Pascal's Triangle",
  "Let's talk over donuts",
  "Don't hold my hand so tight",
  "Sleeping in oversized clothes",
  "Please stop",
  "I'm sorry I hurt you",
  "Yesterday, today, tomorrow",
  "Pitch-shifted smut",
  "Breakfast for two",
  "At the end of the world",
  "Small fingers interlaced",
  "Light from the dying moon",
  "Goodbye my love",
  "I'm glad we met"
];

function getRandomTagline() {
  return randomTaglines[Math.floor(Math.random()*randomTaglines.length)];
}
