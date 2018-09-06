var randomTaglines = [
"Red",
"Orange",
"Yellow",
"Green",
"Blue"
];

function getRandomTagline() {
  return randomTaglines[Math.floor(Math.random()*randomTaglines.length)];
}
