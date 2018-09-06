var modeName = "";

function setMode(transition) {
  if(modeName != "day")
  {
	modeName = "night";
  }
  if(transition)
    document.getElementById("body").className = modeName;
  else
    document.getElementById("body").className = modeName + "-transitionless";
  if(modeName == "day")
  {
     var elem = document.getElementById("modeButton");
    elem.innerText = "☾";
    elem.className = modeName;
  }
  else
  {
     var elem = document.getElementById("modeButton");
    elem.innerText = "☀";
    elem.className = modeName;
  }
  setCookie("mode", modeName, 365);
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
  document.getElementById("modeButton").onclick = changeModeButton;
}
