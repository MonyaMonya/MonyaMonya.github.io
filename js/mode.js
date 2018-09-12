var modeName = "";
var unitsName = "";
var textSize = 150;

function setMode(transition) {
  if(modeName != "day")
  {
	modeName = "night";
  }
  if(transition)
    document.getElementById("body").className = modeName;
  else
    document.getElementById("body").className = modeName + "-transitionless";
  var elem = document.getElementById("modeButton");
  if(modeName == "day")
  {
    elem.innerText = "☾";
  }
  else
  {
    elem.innerText = "☀";
  }
  
  elem.className = modeName;
  elem = document.getElementById("textUpButton");
  elem.className = modeName;
  elem = document.getElementById("textDownButton");
  elem.className = modeName;
  elem = document.getElementById("unitsButton");
  elem.className = modeName;
  
  setCookie("mode", modeName, 365);
}

function setUnits() {
  if(unitsName != "cm")
  {
	unitsName = "in";
  }
  
  //Handle changing the document here
  
  var elem = document.getElementById("unitsButton");
  elem.innerText = unitsName + ".";
  
  setCookie("units", unitsName, 365);
}

function setTextSize() {
  var body = document.getElementById("body");
  body.style.fontSize = textSize + "%";
   
  setCookie("textSize", textSize.toString(), 365);
}

function changeModeButton() {
  if(modeName != "night")
  {
	modeName = "night";
  }
  else
  {
    modeName = "day";
  }
  setMode(true);
}

function textSizeUpButton() {
  if(!Number.isInteger(textSize))
    textSize = 140;
  textSize += 10;
  textSize -= textSize % 10;
  setTextSize();
}

function textSizeDownButton() {
  if(!Number.isInteger(textSize))
    textSize = 160;
  textSize -= 10;
  textSize -= textSize % 10;
  setTextSize();
}

function changeUnitsButton() {
  if(unitsName != "in")
  {
	unitsName = "in";
  }
  else
  {
    unitsName = "cm";
  }
  setUnits(true);
}

function changeModeButton() {
  if(modeName != "night")
  {
	modeName = "night";
  }
  else
  {
    modeName = "day";
  }
  setMode(true);
}

function initModeButton() {
  modeName = getCookie("mode");
  setMode(false);
  var elem = document.getElementById("modeButton");
  elem.style.top = "0px";
  elem.style.right = "0px";
  elem.onclick = changeModeButton;
}

function initTextUpButton() {
  var tS = getCookie("textSize");
  textSize = parseInt(tS);
  setTextSize();
  var elem = document.getElementById("textUpButton");
  elem.style.top = "0px";
  elem.style.right = "45px";
  elem.innerText = "^";
  elem.className = modeName;
  elem.onclick = textSizeUpButton;
}

function initTextDownButton() {
  var elem = document.getElementById("textDownButton");
  elem.style.top = "0px";
  elem.style.right = "85px";
  elem.innerText = "v";
  elem.className = modeName;
  elem.onclick = textSizeDownButton;
}

function initUnitsButton() {
  unitsName = getCookie("units");
  setUnits();
  var elem = document.getElementById("unitsButton");
  elem.style.top = "0px";
  elem.style.right = "130px";
  elem.className = modeName;
  elem.onclick = changeUnitsButton;
}
