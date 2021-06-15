###### Javascript File Summaries:

alice.js - Contains the code that holds all the information contained in a single Alice, as well as setting it up from a random seed when you first load it.
aliceconstants.js - This is where all the different variants of possible Alice properties are held. Names, colors, abilities, etc.
build.js - Builds the site html based on whether you've input a code or not.
mersenne-twister.js - Copy/pasted code for a commonly-used pseudo-random number generator. Essentially you pass in a seed and you get a set random output. Probably is overkill for what we need here.

------------------

###### General Concept:
The general concept behind a gacha-style randomizer is this: each Instance will have an associated 'seed' value that will be fed into a random number generator. This seeded RNG will then go on to output the exact same sequence of 'randomized' values every time it uses that seed, so you map those randomized values to various attributes to create a unique Instance. That way, sharing seed values means that multiple people can view the exact same Instance.

Side note: just about any random number generator will be fine if you don't wanna get too picky about your values. I chose the mersenne twister because I like the name : )

------------------

###### As Applied To Alice:
For an Alice, I thought about what kind of attributes I wanted, and the list I came up with was:
- Name
- Type (bean/koi/boot/storb)
- Abilities
- Size
- Color scheme
and on top of that I added a Rarity that would modify some of the other attributes. So I'll just go down the list for how I went about developing some of these, starting from less complex to more complex.

**Type & Abilities:**
Type is easy, just take the random number and map it from 1-4. Abilities were the same, only the list of abilities it could pull from was much longer. Also there is a random chance involved in what level of rarity your ability has, which changes which ability list it pulls from. You can see a full list of these abilities starting at line 15 in the aliceconstants.js file. 

**Size:**
Again, depending on what rarity your Alice is, it will be bigger or smaller. This is another simple task of mapping the random value to a size range, although getting the preview window to display correctly took a lot of trial and error.

**Color Scheme:**
This one was fun. Again, you have a list of possible colors for each of the 4 different Alice color groups (eyes, hair, primary clothes, secondary clothes). To make it color them correctly, I took a pixel art I made of Alice and split all the different color sections into their own images. You can see those images in the img folder (though they're just white pixels & transparent pixels so they look invisible). Then, based on the randomly selected colors, I applied the colors to the different images and stacked them together to make the final Alice.

**Name:**
This was was really fun. I decided on a name format that followed this pattern:
[Prefix1] [Prefix2] Alice [Suffix] The [The-fix] Of [Of-fix]
So essentially there could be 5 total places a name could be randomized. Depending on your Alice rarity you would get a different number of these spots (1 for common/uncommon, 2 for rare, 3 for epic), and then it would pull the different name values from lists based on which spot it took up.

------------------

###### Development Process:
Overall this was made in around 2 weeks, although in terms of actual time I took probably 2 slow days of low effort, 1 day of medium effort and 1.5 days of a final desperate sprint to get in as much as I could. I think I took like a week break with no progress, lol.

I started off writing in C# since it's my fastest & most familiar language. I made a basic Alice object with minimal attributes & output everything in text. Once I had the concept down, I moved it over into HTML so I could host it on Github & share it as a website.

After that I spent some time improving the UI, drawing the Alice avatar and then setting it up to actually color in correctly. Once it was all in the site and working, I started adding in some extra attributes since I had the time. This is when I added the random names & the type. I also added in the size comparison, which I wasn't sure if I would have the time for originally.

After that was all added in, I just sat there and started adding as many different ability name/types & name varieties I could think of. If I had some more time I could've made a lot more of them, but at this point it was a day away from Alice's bday so I didn't have the time to make it as good as I wanted. Seems like it worked out in the end though.
