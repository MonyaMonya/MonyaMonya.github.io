function UpdateContent() {
   //Get the content element
   
   //Pull the variables from the html
   var pageName = getURLParameter('p');
   
   //Fill it in here
   var innerHtml = '';
   if(pageName == "about") {
      innerHtml = '<p>Testing one two Breen</p>';
   }
   else if(pageName == "listing") {
      innerHtml = loadListings();
   }
   else if(pageName == "page") {
      var story = getURLParameter('s');
      var chapter = getURLParameter('c');
      var page = getURLParameter('n');
      innerHtml = GetScript(story, chapter, page);
      
      return;
   }
   
  var elem = document.getElementById("content");
  elem.innerHTML = innerHtml;
}

function GetScript(story, chapter, page) {
   //Haha, check how lazy I am
   var nonUnit = "stories/" + story + "/" + chapter + "-" + page + ".js";
   var unit = "stories/" + story + "/" + chapter + "-" + page + "-" + unitsName + ".js";
   
   if(checkIfFileExists(nonUnit))
      return readTextFile(nonUnit);
   if(checkIfFileExists(unit))
      return readTextFile(unit);
   return '';
}

function GoToPage(pageName) {
   window.history.pushState(pageName, 'Title', '/?p=' + pageName);
   UpdateContent();
}

function GoToStoryPage(story,chapter,page) {
   window.history.pushState(story+chapter+page, 'Title', '/?p=page&s=' + story + '&c=' + chapter + '&n=' + page);
   UpdateContent();
}

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

function loadListings() {
   var html = '';
   
   for (var i = 0; i < listingsTable.length; i++) {
   html += "<p>" + listingsTable[i][0] + "</p><p>" + listingsTable[i][2] + "</p>";
     for (var j = 0; j < listingsTable[i][3]; j++) {
        html += '<p class="clickable" onclick="GoToStoryPage(\'' + listingsTable[i][1] + '\',' + (j + 1) + ',1);">Chp ' + (j + 1) + '</p>';
     }
   
   }
   return html;
}
