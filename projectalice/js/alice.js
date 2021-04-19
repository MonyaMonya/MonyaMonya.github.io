var primarycolor = "#f0f";
var secondarycolor = "#fff";
var haircolor = "#ff0";
var eyecolor = "#f00";

var attribute1type = rarities.COMMON;
var attribute1id = 0;
var attribute2type = rarities.COMMON;
var attribute2id = 0;
var attribute3type = rarities.COMMON;
var attribute3id = 0;
var attribute4type = rarities.COMMON;
var attribute4id = 0;
var attribute5type = rarities.COMMON;
var attribute5id = 0;

var name1type = namestyles.PREFIX1;
var name1id = 0;
var name2type = namestyles.PREFIX1;
var name2id = 0;
var name3type = namestyles.PREFIX1;
var name3id = 0;

var size = 1000;

function generateAlice() {
	// simply make a new Alice
	var newNum = Math.random();
	var code = btoa(newNum);
	newNum = atob(code);
	//document.getElementById("alicecode").value = temp.toString();
	
	// reload the page with the code
	updatePage(code);
}

function recallAlice() {
	// pull the code, pass it in to the function
	var code = document.getElementById("alicecode").value;
	//check if the code is a valid integer
	
	// reload the page with the code
	updatePage(code);
	//var m = new MersenneTwister(123);
}

function loadAlice() {
	//load the code
   const urlParams = new URLSearchParams(window.location.search);
   const encodedCode = urlParams.get('code');
   var rand = atob(encodedCode);
   
   createAlice(rand);
   loadAliceImage();
   loadAliceCompareImage();
}

function createAlice(rand) {
   //now we do the randomizer
   var m = new MersenneTwister(Math.floor(rand * 2147483648)); //Convert float to 32-bit int
   
   document.getElementById("alicecode").innerHTML = "(" + (btoa(rand)).toString() + ")";
   
   var rarity;
   
   //Rarity
   var raritynum = getRandRange(m, 20);
   if(raritynum < 10)
      rarity = rarities.COMMON;
   else if (raritynum < 16)
      rarity = rarities.UNCOMMON;
   else if (raritynum < 19)
      rarity = rarities.RARE;
   else
      rarity = rarities.EPIC;
   
   document.getElementById("alicerarity").innerHTML = rarity.toString();
   document.getElementById("alicerarity").classList.add(getRarityClassName(rarity));
   
   //Size
   
   if(rarity == rarities.COMMON) { //4cm - 10cm
      size = getRandRange(m, 600) + 400;
   }
   else if(rarity == rarities.UNCOMMON) {  //1cm - 4cm, 10cm - 20cm
      if(getRandBool(m)) {
         size = getRandRange(m, 300) + 100;
      }
      else {
         size = getRandRange(m, 1000) + 1000;
      }
   }
   else if(rarity == rarities.RARE) {  //4mm - 1cm, 20cm - 40cm
      if(getRandBool(m)) {
         size = getRandRange(m, 60) + 40;
      }
      else {
         size = getRandRange(m, 2000) + 2000;
      }
   }
   else { //0.1mm - 4mm, 40cm - 1m
      if(getRandBool(m)) {
         size = getRandRange(m, 39) + 1;
      }
      else {
         size = getRandRange(m, 6000) + 4000;
      }
   }
   
   if(size < 100) {
      document.getElementById("alicesize").innerHTML = (size / 10.0).toString() + " mm";
   }
   else {
      document.getElementById("alicesize").innerHTML = (size / 100.0).toString() + " cm";
   }
   
   //Colors
   primarycolor = primarycolors[getRandRange(m, primarycolors.length)];
   secondarycolor = secondarycolors[getRandRange(m, secondarycolors.length)];
   haircolor = haircolors[getRandRange(m, haircolors.length)];
   eyecolor = eyecolors[getRandRange(m, eyecolors.length)];
   
   //Name
   name1type = getNameType(m);
   name1id = getNameId(m, name1type);
   
   if(rarity == rarities.RARE || rarity == rarities.EPIC) { //2 names
	  do {
	     name2type = getNameType(m);
	  } while(name1type == name2type);
	  
	  do {
	     name2id = getNameId(m, name2type);
	  } while(((name1type == namestyles.PREFIX1 && name2type == namestyles.PREFIX2) ||
	     (name1type == namestyles.PREFIX2 && name2type == namestyles.PREFIX1)) &&
		 name1id == name2id); //Essentially, if name1 & name2 are both prefixes, they can't share the same id
   }
   if (rarity == rarities.EPIC) { //3 names
	  do {
	     name3type = getNameType(m);
	  } while(name1type == name3type || name2type == name3type);
	  
	  do {
	     name3id = getNameId(m, name3type);
	  } while((((name1type == namestyles.PREFIX1 && name3type == namestyles.PREFIX2) ||
	     (name1type == namestyles.PREFIX2 && name3type == namestyles.PREFIX1)) &&
		 name1id == name3id) ||
		 (((name2type == namestyles.PREFIX1 && name3type == namestyles.PREFIX2) ||
	     (name2type == namestyles.PREFIX2 && name3type == namestyles.PREFIX1)) &&
		 name2id == name3id)); //Same but for both 1 & 2 and 3
   }
   
   var name = getNameString(rarity);
   document.getElementById("alicename").innerHTML = name;
   document.getElementById("alicename").classList.add(getRarityClassName(rarity));
   
   
   
   //Attributes
   if(rarity == rarities.COMMON) { //1 attribute, common
      attribute1type = rarities.COMMON;
      attribute1id = getRandRange(m, attributecommonnames.length);
   }
   else if(rarity == rarities.UNCOMMON) {  //2 attributes, 50% Uncommon
   
      var attributelist;
      var checkInt;
	  
	  //Attr. 1
	  
	  checkInt = getRandRange(m, 10);
	  if(checkInt < 5) { //Common
	     attribute1type = rarities.COMMON;
		 attributelist = attributecommonnames;
	  }
	  else { //Uncommon
	     attribute1type = rarities.UNCOMMON;
		 attributelist = attributeuncommonnames;
	  }
	  attribute1id = getRandRange(m, attributelist.length);
	  
	  //Attr. 2
	  
	  checkInt = getRandRange(m, 10);
	  if(checkInt < 5) { //Common
	     attribute2type = rarities.COMMON;
		 attributelist = attributecommonnames;
	  }
	  else { //Uncommon
	     attribute2type = rarities.UNCOMMON;
		 attributelist = attributeuncommonnames;
	  }
	  do {
	     attribute2id = getRandRange(m, attributelist.length);
	  } while ((attribute1type == attribute2type && attribute1id == attribute2id));
	  
   }
   else if(rarity == rarities.RARE) {  //3 attributes, 30% rare, 40% Uncommon (1 is 50/50)
	   
      var attributelist;
      var checkInt;
	  
	  //Attr. 1
	  
	  checkInt = getRandRange(m, 10);
	  if(checkInt < 3) { //Common
	     attribute1type = rarities.COMMON;
		 attributelist = attributecommonnames;
	  }
	  else if(checkInt < 7) { //Uncommon
	     attribute1type = rarities.UNCOMMON;
		 attributelist = attributeuncommonnames;
	  }
	  else { //Rare
	     attribute1type = rarities.RARE;
		 attributelist = attributerarenames;
	  }
	  attribute1id = getRandRange(m, attributelist.length);
	  
	  //Attr. 2
	  
	  checkInt = getRandRange(m, 10);
	  if(checkInt < 3) { //Common
	     attribute2type = rarities.COMMON;
		 attributelist = attributecommonnames;
	  }
	  else if(checkInt < 7) { //Uncommon
	     attribute2type = rarities.UNCOMMON;
		 attributelist = attributeuncommonnames;
	  }
	  else { //Rare
	     attribute2type = rarities.RARE;
		 attributelist = attributerarenames;
	  }
	  do {
	     attribute2id = getRandRange(m, attributelist.length);
	  } while ((attribute1type == attribute2type && attribute1id == attribute2id));
	  
	  
	  //Attr. 3
	  
	  checkInt = getRandRange(m, 10);
	  if(checkInt < 5) { //Uncommon
	     attribute3type = rarities.UNCOMMON;
		 attributelist = attributeuncommonnames;
	  }
	  else { //Rare
	     attribute3type = rarities.RARE;
		 attributelist = attributerarenames;
	  }
	  do {
	     attribute3id = getRandRange(m, attributelist.length);
	  } while ((attribute1type == attribute3type && attribute1id == attribute3id) ||
	     (attribute2type == attribute3type && attribute2id == attribute3id));
	  
   }
   else { //5 attributes, 3 are 30/30/30/10, 1 is 50/30/20 rare/unc/epic, 1 is epic
      
      var attributelist;
      var checkInt;
	  
	  //Attr. 1
	  
	  checkInt = getRandRange(m, 10);
	  if(checkInt < 3) { //Common
	     attribute1type = rarities.COMMON;
		 attributelist = attributecommonnames;
	  }
	  else if(checkInt < 6) { //Uncommon
	     attribute1type = rarities.UNCOMMON;
		 attributelist = attributeuncommonnames;
	  }
	  else if(checkInt < 9) { //Rare
	     attribute1type = rarities.RARE;
		 attributelist = attributerarenames;
	  }
	  else { //Epic
	     attribute1type = rarities.EPIC;
		 attributelist = attributeepicnames;
	  }
	  attribute1id = getRandRange(m, attributelist.length);
	  
	  //Attr. 2
	  
	  checkInt = getRandRange(m, 10);
	  if(checkInt < 3) { //Common
	     attribute2type = rarities.COMMON;
		 attributelist = attributecommonnames;
	  }
	  else if(checkInt < 6) { //Uncommon
	     attribute2type = rarities.UNCOMMON;
		 attributelist = attributeuncommonnames;
	  }
	  else if(checkInt < 9) { //Rare
	     attribute2type = rarities.RARE;
		 attributelist = attributerarenames;
	  }
	  else { //Epic
	     attribute2type = rarities.EPIC;
		 attributelist = attributeepicnames;
	  }
	  do {
	     attribute2id = getRandRange(m, attributelist.length);
	  } while ((attribute1type == attribute2type && attribute1id == attribute2id));
	  
	  //Attr. 3
	  
	  checkInt = getRandRange(m, 10);
	  if(checkInt < 3) { //Common
	     attribute3type = rarities.COMMON;
		 attributelist = attributecommonnames;
	  }
	  else if(checkInt < 6) { //Uncommon
	     attribute3type = rarities.UNCOMMON;
		 attributelist = attributeuncommonnames;
	  }
	  else if(checkInt < 9) { //Rare
	     attribute3type = rarities.RARE;
		 attributelist = attributerarenames;
	  }
	  else { //Epic
	     attribute3type = rarities.EPIC;
		 attributelist = attributeepicnames;
	  }
	  do {
	     attribute3id = getRandRange(m, attributelist.length);
	  } while ((attribute1type == attribute3type && attribute1id == attribute3id) ||
	     (attribute2type == attribute3type && attribute2id == attribute3id));
	  
	  //Attr. 4
	  
	  checkInt = getRandRange(m, 10);
	  if(checkInt < 3) { //Uncommon
	     attribute4type = rarities.UNCOMMON;
		 attributelist = attributeuncommonnames;
	  }
	  else if(checkInt < 8) { //Rare
	     attribute4type = rarities.RARE;
		 attributelist = attributerarenames;
	  }
	  else { //Epic
	     attribute4type = rarities.EPIC;
		 attributelist = attributeepicnames;
	  }
	  do {
	     attribute3id = getRandRange(m, attributelist.length);
	  } while ((attribute1type == attribute4type && attribute1id == attribute4id) ||
	     (attribute2type == attribute4type && attribute2id == attribute4id) ||
	     (attribute3type == attribute4type && attribute3id == attribute4id));
	  
	  //Attr. 5
	  attribute5type = rarities.EPIC;
      attributelist = attributeepicnames;
	  do {
	     attribute5id = getRandRange(m, attributelist.length);
	  } while ((attribute1type == attribute5type && attribute1id == attribute5id) ||
	     (attribute2type == attribute5type && attribute2id == attribute5id) ||
	     (attribute3type == attribute5type && attribute3id == attribute5id) ||
	     (attribute4type == attribute5type && attribute4id == attribute5id));
   }
   
   var attributesHtml = getAttributesHtml(rarity);
   document.getElementById("aliceattributes").innerHTML = attributesHtml;
   
   //Affinity
   var affinity = getRandRange(m, 4);
   if(affinity == 0) { //Storb
	document.getElementById("alicetooltip").innerHTML = "Affinity: Storb";
	document.getElementById("aliceaffinity").src = "img/storbw.png";
   }
   else if(affinity == 1) { //Koi
	document.getElementById("alicetooltip").innerHTML = "Affinity: Koi";
	document.getElementById("aliceaffinity").src = "img/koiw.png"
   }
   else if(affinity == 2) { //Bean
	document.getElementById("alicetooltip").innerHTML = "Affinity: Bean";
	document.getElementById("aliceaffinity").src = "img/beanw.png"
   }
   else { //Boot
	document.getElementById("alicetooltip").innerHTML = "Affinity: Boot";
	document.getElementById("aliceaffinity").src = "img/bootw.png"
   }
}

function loadAliceImage() {
   
   var canvas = document.getElementById("alicecanvas");
   var context = canvas.getContext("2d");
   
   var tempcanvas = document.createElement("CANVAS");
   tempcanvas.width = 110;
   tempcanvas.height = 290;
   var tempcontext = tempcanvas.getContext("2d");
   
   context.imageSmoothingEnabled = false;
   tempcontext.imageSmoothingEnabled = false;
   context.clearRect(0, 0, canvas.width, canvas.height);
   
   var alicerest = new Image();
   var alicewhites = new Image();
   var alicereds = new Image();
   var aliceyellows = new Image();
   var alicepurps = new Image();
   
   alicerest.src = "img/AliceRest.png";
   alicerest.onload = function() {
      
      context.drawImage(alicerest, 0, 0, 110, 290);
      
      alicewhites.src = "img/AliceWhites.png";
      alicewhites.onload = function() {
         
         tempcontext.fillStyle = secondarycolor;
         tempcontext.fillRect(0, 0, tempcanvas.width, tempcanvas.height);
         tempcontext.globalCompositeOperation = "destination-in";
         tempcontext.drawImage(alicewhites, 0, 0, 110, 290);
         tempcontext.globalCompositeOperation = "multiply";
         tempcontext.drawImage(alicewhites, 0, 0, 110, 290);
         
         context.drawImage(tempcanvas, 0, 0, 110, 290, 0, 0, 110, 290);
         
         tempcontext.clearRect(0, 0, canvas.width, canvas.height);
         tempcontext.globalCompositeOperation = "source-over";
         
         alicereds.src = "img/AliceReds.png";
         alicereds.onload = function() {
            
            tempcontext.fillStyle = eyecolor;
            tempcontext.fillRect(0, 0, tempcanvas.width, tempcanvas.height);
            tempcontext.globalCompositeOperation = "destination-in";
            tempcontext.drawImage(alicereds, 0, 0, 110, 290);
            tempcontext.globalCompositeOperation = "multiply";
            tempcontext.drawImage(alicereds, 0, 0, 110, 290);
            
            context.drawImage(tempcanvas, 0, 0);
            
            tempcontext.clearRect(0, 0, canvas.width, canvas.height);
            tempcontext.globalCompositeOperation = "source-over";
         
            aliceyellows.src = "img/AliceYellows.png";
            aliceyellows.onload = function() {
               
               tempcontext.fillStyle = haircolor;
               tempcontext.fillRect(0, 0, tempcanvas.width, tempcanvas.height);
               tempcontext.globalCompositeOperation = "destination-in";
               tempcontext.drawImage(aliceyellows, 0, 0, 110, 290);
               tempcontext.globalCompositeOperation = "multiply";
               tempcontext.drawImage(aliceyellows, 0, 0, 110, 290);
               
               context.drawImage(tempcanvas, 0, 0);
               
               tempcontext.clearRect(0, 0, canvas.width, canvas.height);
               tempcontext.globalCompositeOperation = "source-over";
            
               alicepurps.src = "img/AlicePurps.png";
               alicepurps.onload = function() {
               
                  tempcontext.fillStyle = primarycolor;
                  tempcontext.fillRect(0, 0, tempcanvas.width, tempcanvas.height);
                  tempcontext.globalCompositeOperation = "destination-in";
                  tempcontext.drawImage(alicepurps, 0, 0, 110, 290);
                  tempcontext.globalCompositeOperation = "multiply";
                  tempcontext.drawImage(alicepurps, 0, 0, 110, 290);
                  
                  context.drawImage(tempcanvas, 0, 0);
               
                  tempcontext.clearRect(0, 0, canvas.width, canvas.height);
                  tempcontext.globalCompositeOperation = "source-over";
                  
               }
            }
         }
      }
   };
}

function loadAliceCompareImage() {
	
   var canvas = document.getElementById("alicecomparecanvas");
   var context = canvas.getContext("2d");
   
   var tempcanvas = document.createElement("CANVAS");
   tempcanvas.width = 110;
   tempcanvas.height = 290;
   var tempcontext = tempcanvas.getContext("2d");
   
   context.imageSmoothingEnabled = false;
   tempcontext.imageSmoothingEnabled = false;
   context.clearRect(0, 0, canvas.width, canvas.height);
   
   var alicerest = new Image();
   var alicewhites = new Image();
   var alicereds = new Image();
   var aliceyellows = new Image();
   var alicepurps = new Image();
   
   //tempcontext.fillStyle = secondarycolor;
   //tempcontext.globalCompositeOperation = "destination-in";
   //tempcontext.fillRect(0, 0, tempcanvas.width, tempcanvas.height);
         //empcontext.clearRect(0, 0, canvas.width, canvas.height);
         //tempcontext.globalCompositeOperation = "source-over";
   
   alicerest.src = "img/AliceRest.png";
   alicerest.onload = function() {
      
      tempcontext.drawImage(alicerest, 0, 0, 110, 290);
      
      alicewhites.src = "img/AliceWhites.png";
      alicewhites.onload = function() {
		  
         tempcontext.drawImage(alicewhites, 0, 0, 110, 290);
         
         alicereds.src = "img/AliceReds.png";
         alicereds.onload = function() {
            
            tempcontext.drawImage(alicereds, 0, 0, 110, 290);
			
            aliceyellows.src = "img/AliceYellows.png";
            aliceyellows.onload = function() {
				
               tempcontext.drawImage(aliceyellows, 0, 0, 110, 290);
			   
               alicepurps.src = "img/AlicePurps.png";
               alicepurps.onload = function() {
				   
                  tempcontext.drawImage(alicepurps, 0, 0, 110, 290);
				  
                  tempcontext.fillStyle = "#fff";
				  tempcontext.globalCompositeOperation = "source-in";
				  tempcontext.fillRect(0, 0, tempcanvas.width, tempcanvas.height);
				  tempcontext.globalCompositeOperation = "source-over";
				  
				  //Calculate the heights
				  var ratio = size / 700.0;
				  var heightSmall = 145;
				  var widthSmall = 55;
				  var heightTall = 145;
				  var widthTall = 55;
				  if(ratio < 1) {
					  heightSmall *=  ratio;
					  widthSmall *=  ratio;
				  }
				  else {
					  heightSmall /= ratio;
					  widthSmall /= ratio;
				  }
				  
				  if(heightSmall < 10) {
					  var multRatio = 10 / heightSmall;
					  heightSmall = 10;
					  widthSmall *= multRatio;
					  
					  heightTall *= multRatio;
					  widthTall *= multRatio;
				  }
				  
				  
				  //now handle context
				  context.fillStyle = "#333";
				  context.fillRect(0, 0, canvas.width, canvas.height);
				  
				  if(ratio < 1) //new is big)
					tempcontext.fillStyle = "#f0f";
				  else
					tempcontext.fillStyle = "#8ff";
				  tempcontext.globalCompositeOperation = "source-in";
				  tempcontext.fillRect(0, 0, tempcanvas.width, tempcanvas.height);
				  tempcontext.globalCompositeOperation = "source-over";
				  
				  context.drawImage(tempcanvas, 0, 0, 110, 290, 82.5 - (widthTall / 2), 155 - heightTall, widthTall, heightTall);
				  
				  if(ratio < 1) //new is small)
					tempcontext.fillStyle = "#8ff";
				  else
					tempcontext.fillStyle = "#f0f";
				  tempcontext.globalCompositeOperation = "source-in";
				  tempcontext.fillRect(0, 0, tempcanvas.width, tempcanvas.height);
				  tempcontext.globalCompositeOperation = "source-over";
				  
				  context.drawImage(tempcanvas, 0, 0, 110, 290, 27.5 - (widthSmall / 2), 155 - heightSmall, widthSmall, heightSmall);
				  
               }
            }
         }
      }
   };
}


function getAttributesHtml(rarity) {
	var attributeHtml = "";
	
	//Attribute 1
	attributeHtml += "<div class='" + getRarityClassName(attribute1type) + "'>" + getAttributeName(attribute1type, attribute1id) + "</div>";
	attributeHtml += "<div class='offset-1 alice-attribute-desc'>  " + getAttributeDesc(attribute1type, attribute1id) + "</div>";
	
	//Attribute 2
	if(rarity == rarities.UNCOMMON || rarity == rarities.RARE || rarity == rarities.EPIC) {
	   attributeHtml += "<div class='" + getRarityClassName(attribute2type) + "'>" + getAttributeName(attribute2type, attribute2id) + "</div>";
	   attributeHtml += "<div class='offset-1 alice-attribute-desc'>  " + getAttributeDesc(attribute2type, attribute2id) + "</div>";
	}
	
	//Attribute 3
	if(rarity == rarities.RARE || rarity == rarities.EPIC) {
	   attributeHtml += "<div class='" + getRarityClassName(attribute3type) + "'>" + getAttributeName(attribute3type, attribute3id) + "</div>";
	   attributeHtml += "<div class='offset-1 alice-attribute-desc'>  " + getAttributeDesc(attribute3type, attribute3id) + "</div>";
	}
	
	//Attribute 4/5
	if(rarity == rarities.EPIC) {
	   attributeHtml += "<div class='" + getRarityClassName(attribute4type) + "'>" + getAttributeName(attribute4type, attribute4id) + "</div>";
	   attributeHtml += "<div class='offset-1 alice-attribute-desc'>  " + getAttributeDesc(attribute4type, attribute4id) + "</div>";
	   attributeHtml += "<div class='" + getRarityClassName(attribute5type) + "'>" + getAttributeName(attribute5type, attribute5id) + "</div>";
	   attributeHtml += "<div class='offset-1 alice-attribute-desc'>  " + getAttributeDesc(attribute5type, attribute5id) + "</div>";
	}
	
	
	return attributeHtml;
}

function getRarityClassName(rarity) {
	switch(rarity) {
		case rarities.COMMON:
			return "rarity-common";
		case rarities.UNCOMMON:
			return "rarity-uncommon";
		case rarities.RARE:
			return "rarity-rare";
		case rarities.EPIC:
			return "rarity-epic";
	}
}

function getAttributeName(type, id) {
	if(type == rarities.COMMON)
		return attributecommonnames[id];
	else if(type == rarities.UNCOMMON)
		return attributeuncommonnames[id];
	else if(type == rarities.RARE)
		return attributerarenames[id];
	else
		return attributeepicnames[id];
}

function getAttributeDesc(type, id) {
	if(type == rarities.COMMON)
		return attributecommondescripts[id];
	else if(type == rarities.UNCOMMON)
		return attributeuncommondescripts[id];
	else if(type == rarities.RARE)
		return attributeraredescripts[id];
	else
		return attributeepicdescripts[id];
}


function getNameType(m) {
	var type = getRandRange(m, 5);
	switch(type) {
		case 0:
		   return namestyles.PREFIX1;
		case 1:
		   return namestyles.PREFIX2;
		case 2:
		   return namestyles.POSTFIX;
		case 3:
		   return namestyles.THEFIX;
		case 4:
		   return namestyles.OFFIX;
	}
}

function getNameId(m, type) {
	switch(type) {
		case namestyles.PREFIX1:
		case namestyles.PREFIX2:
		   return getRandRange(m, nameprefixes.length);
		case namestyles.POSTFIX:
		   return getRandRange(m, namepostfixes.length);
		case namestyles.THEFIX:
		   return getRandRange(m, namethefixes.length);
		case namestyles.OFFIX:
		   return getRandRange(m, nameoffixes.length);
	}
}

function getNameString(rarity) {
	var hadPre1 = false;
	var nameString = "";
	
	//Pre1
	if(name1type == namestyles.PREFIX1 ||
	   ((rarity == rarities.RARE || rarity == rarities.EPIC) && name2type == namestyles.PREFIX1) ||
	   (rarity == rarities.EPIC && name3type == namestyles.PREFIX1)) {
		   hadPre1 = true;
		   
		   if(name1type == namestyles.PREFIX1)
			   nameString += nameprefixes[name1id];
		   else if(name2type == namestyles.PREFIX1)
			   nameString += nameprefixes[name2id];
		   else
			   nameString += nameprefixes[name3id];
	}
	
	//Pre2
	if(name1type == namestyles.PREFIX2 ||
	   ((rarity == rarities.RARE || rarity == rarities.EPIC) && name2type == namestyles.PREFIX2) ||
	   (rarity == rarities.EPIC && name3type == namestyles.PREFIX2)) {
		   if(hadPre1 == true)
			   nameString += ", ";
		   
		   if(name1type == namestyles.PREFIX2)
			   nameString += nameprefixes[name1id];
		   else if(name2type == namestyles.PREFIX2)
			   nameString += nameprefixes[name2id];
		   else
			   nameString += nameprefixes[name3id];
	}
	
	//Alice
	if(nameString != "")
		nameString += " ";
	
	nameString += "Alice";
	
	//Post
	if(name1type == namestyles.POSTFIX ||
	   ((rarity == rarities.RARE || rarity == rarities.EPIC) && name2type == namestyles.POSTFIX) ||
	   (rarity == rarities.EPIC && name3type == namestyles.POSTFIX)) {
		   
		   nameString += " ";
		   
		   if(name1type == namestyles.POSTFIX)
			   nameString += namepostfixes[name1id];
		   else if(name2type == namestyles.POSTFIX)
			   nameString += namepostfixes[name2id];
		   else
			   nameString += namepostfixes[name3id];
	}
	
	//The
	if(name1type == namestyles.THEFIX ||
	   ((rarity == rarities.RARE || rarity == rarities.EPIC) && name2type == namestyles.THEFIX) ||
	   (rarity == rarities.EPIC && name3type == namestyles.THEFIX)) {
		   
		   nameString += " the ";
		   
		   if(name1type == namestyles.THEFIX)
			   nameString += namethefixes[name1id];
		   else if(name2type == namestyles.THEFIX)
			   nameString += namethefixes[name2id];
		   else
			   nameString += namethefixes[name3id];
	}
	
	//Of
	if(name1type == namestyles.OFFIX ||
	   ((rarity == rarities.RARE || rarity == rarities.EPIC) && name2type == namestyles.OFFIX) ||
	   (rarity == rarities.EPIC && name3type == namestyles.OFFIX)) {
		   
		   nameString += " of ";
		   
		   if(name1type == namestyles.OFFIX)
			   nameString += nameoffixes[name1id];
		   else if(name2type == namestyles.OFFIX)
			   nameString += nameoffixes[name2id];
		   else
			   nameString += nameoffixes[name3id];
	}
	
	return nameString;
}

function getRandRange(m, max) {
   return Math.floor(m.random() * max);
}

function getRandBool(m) {
   var tempBool = m.random();
   return tempBool < 0.5;
}

function updatePage(param) {
	var url = window.location.href.split('?')[0] + '?code=' + param;
	window.location.href = url;
}

function copyPageUrl() {
	const newDiv = document.getElementById("aliceUrl");
    newDiv.value = window.location.href;
    
	newDiv.style.display = "block";
    newDiv.select();
    newDiv.setSelectionRange(0, 99999); /* For mobile devices */
	
    document.execCommand("copy");
	newDiv.style.display = "none";
    alert("Copied URL ");
}

//Todo:
//1. Alice comparison
//2. Name randomizing
//3. Attribute randomizing
