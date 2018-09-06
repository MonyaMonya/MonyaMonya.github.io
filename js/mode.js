function setMode() {
  if(modeName != "day")
  {
	modeName = "night";
  }
  document.getElementById("body").className = modeName;
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
  setMode();
}
