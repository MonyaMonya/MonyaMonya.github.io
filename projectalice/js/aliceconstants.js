const rarities = {
   COMMON: "Common",
   UNCOMMON: "Uncommon",
   RARE: "Rare",
   EPIC: "Epic",
}

const affinities = [
   "Storb",
   "Koi",
   "Bean",
   "Boot",
]

const attributecommonnames = [
    "Boot+",
	"Bean+",
	"Koi+",
	"Storb+",
	"Beans",
	"Koi",
	"Boot",
	"Storb",
	"Run+",
	"Strength+",
	"Swimmer",
	"Craft+",
	"Writer",
	"Language+",
	"Art+",
]
const attributecommondescripts = [
    "Increases boot proficiency",
	"Increases bean proficiency",
	"Increases koi proficiency",
	"Increases storb proficiency",
	"Summons beans to attack the enemy",
	"Summons a koi to attack the enemy",
	"Summons a boot to attack the enemy",
	"Summons a storb to heal an ally",
	"Gains speed equivalent to a ground gecko",
	"Can lift up to 1/4th their body weight",
	"Can swim successfully without drowning",
	"Gains proficiency in working with their hands",
	"Gains proficiency in writing and increases vocabulary",
	"Choose an extra language to be proficient in",
	"Gains proficiency in drawing & painting",
]

const attributeuncommonnames = [
    "Resistance(Boot)",
	"Resistance(Bean)",
	"Resistance(Koi)",
	"Resistance(Storb)",
	"Boot++",
	"Bean++",
	"Koi++",
	"Storb++",
	"Bean Shower",
	"Koi Slap",
	"Steel-Tipped Boot",
	"Greater Storb",
	"Run++",
	"Strength++",
	"Relations+ (Guinea Pigs)",
	"Relations+ (Hamsters)",
	"Relations+ (Rats)",
	"Mysterious Influence (Bully)",
	"Mysterious Influence (Adore)",
]
const attributeuncommondescripts = [
    "Reduces all incoming boot damage",
	"Reduces all incoming bean damage",
	"Reduces all incoming koi damage",
	"Reduces all incoming storb damage",
	"Greatly increases boot proficiency",
	"Greatly increases bean proficiency",
	"Greatly increases koi proficiency",
	"Greatly increases storb proficiency",
	"Showers an enemy with beans for a high amount of damage",
	"Summons a koi to slap the enemy for a high amount of damage",
	"Summons a boot to attack an enemy for a high amount of damage",
	"Summons a large storb to grealy heal an ally",
	"Gains speed equivalent to a cheeky hamster",
	"Can lift up to their own body weight",
	"Is well-regarded among all guinea pigs",
	"Is well-regarded among all hamsters",
	"Is well-regarded among all rats",
	"Unknown forces influence those around them to bully them more",
	"Unknown forces influence those around them to treat them more kindly",
]

const attributerarenames = [
    "Immunity (Boot)",
	"Immunity (Bean)",
	"Immunity (Koi)",
	"Immunity (Storb)",
	"Beansplosion",
	"Koi Pack",
	"Boot Meteor",
	"Storb Basket",
	"Resist (Bully)",
	"Relations++ (Guinea Pigs)",
	"Relations++ (Hamsters)",
	"Relations++ (Rats)",
	"Levitation",
	"Mysterious Influence (Boots)",
	"Mysterious Influence (Storb)",
	"Greater Luck",
	"Greater Dwelling",
	"Yakuza+",
]
const attributeraredescripts = [
    "Gains immunity to boot damage",
	"Gains immunity to bean damage",
	"Gains immunity to koi damage",
	"Gains immunity to storb damage",
	"Can create an explosion of beans on a group of enemies",
	"Can summon a ravenous group of koi to nip at a group of enemies",
	"Can summon a large boot to fall on a group of enemies",
	"Can summon a number of storbs to heal a group of allies",
	"Can withstand bullying without crying sometimes",
	"Can give orders to any guinea pig",
	"Can give orders to any hamster",
	"Can give orders to any rat",
	"Gains the power to fly freely",
	"Unknown forces influence those around them to wear boots more often",
	"Unknown forces influence storbs to be more common around them",
	"Causes lucky events to occur more frequently",
	"Gives a luxurious home with all amenities one could ask forces",
	"Gains the ability to talk about the Yakuza game series endlessly",
]

const attributeepicnames = [
    "Absorb(Boot)",
	"Absorb(Koi)",
	"Absorb(Bean)",
	"Absorb(Storb)",
	"Barefoot Banisher",
	"Summon(Uru)",
	"Bean Volcano",
	"Koi Tsunami",
	"Boot Apocalypse",
	"Storb Feast",
	"Highest Honor",
	"Instant Transmission",
	"Ragnorak Requiem",
	"Animal Empath",
	"Size Control",
	"No Mosquitos",
]
const attributeepicdescripts = [
    "All incoming boot damage is absorbed into HP",
	"All incoming koi damage is absorbed into HP",
	"All incoming bean damage is absorbed into HP",
	"All incoming storb damage is absorbed into HP",
	"Instantly banishes any beings requesting barefoot redos",
	"Instantly summons Uru to your position",
	"Can summon a devastating eruption of beans",
	"Can summon a ferocious river of koi",
	"Can summon a massive boot to crush all enemies",
	"Can summon a pile of storbs to refresh all allies to full",
	"Gain large amounts of likes and retweets on every post",
	"Can instantly teleport anywhere, but has to quote Goku first",
	"Contains the power to destroy the world, but must resist it at all times",
	"Can communicate with all animals freely",
	"Can freely control their own size as well as the size of others",
	"Mosquitos are now extinct",
]

const primarycolors = [
   "#f00", //Red
   "#ff0", //Yellow
   "#0f0", //Green
   "#0ff", //Aqua
   "#00f", //Blue
   "#f0f", //Purple
   "#f19", //Pink
   "#f60", //Orange
   "#eee", //White
   "#888", //Grey
]

const secondarycolors = [
   "#C33", //Red
   "#CC3", //Yellow
   "#3C3", //Green
   "#3cc", //Aqua
   "#33c", //Blue
   "#c3c", //Purple
   "#f6c", //Pink
   "#c60", //Orange
   "#fff", //White
   "#aaa", //Grey
   "#333", //Black
]

const haircolors = [
   "#f00", //Red
   "#ff0", //Yellow
   "#0f0", //Green
   "#0ff", //Aqua
   "#00f", //Blue
   "#f0f", //Purple
   "#f19", //Pink
   "#eee", //White
   "#f60", //Orange
]

const eyecolors = [ 
   "#f00", //Red
   "#ff0", //Yellow
   "#0f0", //Green
   "#0ff", //Aqua
   "#00f", //Blue
   "#f0f", //Purple
   "#f19", //Pink
   "#aaa", //Grey
   "#f60", //Orange
   "#609", //Deep purple
   "#06f", //Lighter blue
]


//Name types:
//___ Alice
//Alice ____
//___, ___ Alice
//Alice The ____
//Alice Of ____
//In other words, we have 4 kinds of words, Prefixes, Postfixes, Thefixes, Offixes. All can be mixed & rearranged
//Common/uncommon have 1, Rare has 2, Epic has 3

const namestyles = {
   PREFIX1: "prefix1",
   PREFIX2: "prefix2",
   POSTFIX: "postfix",
   THEFIX: "thefix",
   OFFIX: "offix",
}

const nameprefixes = [
    "Whimpering",
	"Gallivanting",
	"Happy",
	"Sad",
	"Angry",
	"Nervous",
	"Super",
	"Miniature",
	"Excessive",
	"Disobedient",
	"Rowdy",
	"Weepy",
	"Silly",
	"Explosive",
	"Ticklish",
	"Homicidal",
	"Lazy",
	"Wistful",
	"Cheap",
	"Cubic",
	"Unknowable",
	"Unseen",
	"Invisible",
	"Laughing",
	"Crying",
	"Jumping",
	"Lumpy",
	"Soft",
	"Durable",
	"Humorous",
	"Admirable",
	"Conniving",
	"Weasely",
	"Itchy",
	"Paranoid",
	"Daft",
	"Soaking Wet",
	"Sociable",
	"Isolated",
	"Strong",
	"Stern",
	"Broken",
	"Distracted",
	"Vitamin-Infused",
	"Gentle",
	"Wonderful",
	"Well-Groomed",
	"Competitive",
	"Twisted",
	"Complicated",
]


const namepostfixes = [
    "Jr.",
	"Sr.",
	"Inc.",
	"Alter",
	"Hybrid",
	"Monster",
	"The Third",
	"Princess",
	"Pui-Pui",
	"(No, The Other Alice)",
	"EX",
	"II",
	"MK 3",
	"Category 4",
	"Bot",
	"Synthoid",
	"(Not To Scale)",
	"Deluxe",
	"(Refurbished)",
	"(Batteries Not Included)",
	"Hero",
	"King",
	"Demon-Lord",
	"Bug",
	"P.H.D.",
]


const namethefixes = [
    "Homewrecker",
	"Slightly Unwell",
	"Bold",
	"Stinker",
	"Plumber",
	"New Garfield",
	"Foolish",
	"Clown",
	"Acrobat",
	"Carjacker",
	"Storb Snacker",
	"Bean Oppressor",
	"Koi Lover",
	"Boot Insole",
	"Boyracer",
	"Fetishist",
	"Duck Afficionado",
	"Swimmer",
	"Florist",
	"Hermit",
	"Sage",
	"Baker",
	"Wizard",
	"Beserker",
	"Stoic",
	"Hedonist",
	"Blockhead",
	"Simp",
	"Strong",
	"Lowly",
	"Historian",
	"Unbreakable",
	"Immortal",
	"Moral Compass",
	"Grump",
	"Cheat",
	"Regretful",
	"Arsonist",
	"Backpeddler",
	"Schemer",
	"Helpful",
	"Kind",
	"Negotiator",
	"Pythagorean",
	"Gravy Freak",
	"Diminuative",
	"Leader",
	"Fairly Unremarkable",
	"Easily Approachable",
	"Great One",
]


const nameoffixes = [
    "Guttertown",
	"Hugs",
	"The Highlands",
	"The Koi Pond",
	"Peace",
	"War",
	"Chaos",
	"Law",
	"Parking Tickets",
	"Deviantart",
	"Pixiv",
	"Twitter",
	"GiantBootsAndSuch.org",
	"Eating Storbs",
	"Piino-Piino-Piino-Piino",
	"Your Mom's House",
	"Good Fortune",
	"Bad Luck",
	"The Gods",
	"The Devil",
	"The Cloud Realm",
	"The Underworld",
	"Rejected Alices",
	"Probabilistic Infinity",
	"MCU Fame",
	"Snacks",
	"Boots",
	"Storbs",
	"Beans",
	"Koi",
	"Guinea Pigs",
	"Rats",
	"Gophers",
	"Double-Crossing",
	"Mysticism",
	"Historical Accuracy",
	"Vending Machines",
	"1800's London",
	"The Naruto Fanverse",
	"High Prices",
	"Some Trash Can Somewhere",
	"Great Faith",
	"Simple Living",
	"IKEA",
	"Legend",
	"Atlantis",
	"The Caspian Sea",
	"The Furry Fandom",
	"Six Paths",
	"Humble Origins",
]