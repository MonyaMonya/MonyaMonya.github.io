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
      
      GetScript(story, chapter, page);
      
      return;
   }
   
  var elem = document.getElementById("content");
  elem.innerHTML = innerHtml;
}

async function CheckIfScriptExists(story, chapter, page) {
 var nonUnit = "stories/" + story + "/" + chapter + "-" + page + ".txt";
 var unit = "stories/" + story + "/" + chapter + "-" + page + "-" + unitsName + ".txt";
   
 if(await checkIfFileExists(nonUnit))
      return nonUnit;
 if(await checkIfFileExists(unit))
      return unit;
   
 return "";
}

async function GetScript(story, chapter, page) {
   var scriptName = await CheckIfScriptExists(story, chapter, page);
   
   if(scriptName == "") {
      var elem = document.getElementById("content");
      elem.innerHTML = "Error: Could not find story page requested.";
   }
   else {
      var str = await readTextFile(scriptName);
   
       var elem = document.getElementById("content");
       var navigBar = await addStoryNavigationBar(story, chapter, page);
      
       elem.innerHTML = navigBar;
       elem.innerHTML += str;
       elem.innerHTML += navigBar;
   }
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
   
   html += '<table style="width:100%">';
   html += '<tbody>';
   html += '<tr>';
   
   for (var i = 0; i < listingsTable.length; i++) {
     html += '<td><p class="clickable noVMargin" onclick="GoToStoryPage(\'' + listingsTable[i][1] + '\',1,1);" id="storyName' + i + '">' + listingsTable[i][0] + "</p></td>";
     if(listingsTable[i][2] > 1) {
      html += '<td><p id="storyDown' + i + '" class="unclickable noVMargin" onclick="UpdateChapter(' + i + ',0);"><</p></td>';
      html += '<td><p id="storyChp' + i + '" class="noVMargin">Chp 1</p></td>';
      html += '<td><p id="storyUp' + i + '" class="clickable noVMargin" onclick="UpdateChapter(' + i + ',2);">></p></td>';
     }
     html += '<td style="width:100%" colspan="0"></td>';
     html += '</tr><tr><td colspan="0"><p class="hMargin20" id="storyDesc' + i + '">' + listingsTable[i][3][0] + '</p></td></tr>';
    }
    html += '</tbody></table>';
      
   return html;
}

function UpdateChapter(listingIndex, chapter) {
  var prevChap = chapter - 1;
  var nextChap = chapter + 1;
  
  var elem = document.getElementById("storyDown" + listingIndex);
  if(prevChap < 1) {
     elem.className = "unclickable";
     elem.onclick = function() {};
  }
   else {
     elem.className = "clickable";
     elem.onclick = function() { UpdateChapter(listingIndex, prevChap) };
  }
   
  elem = document.getElementById("storyUp" + listingIndex);
  if(nextChap > listingsTable[listingIndex][2]) {
     elem.className = "unclickable";
     elem.onclick = function() {};
  }
   else {
     elem.className = "clickable";
     elem.onclick = function() { UpdateChapter(listingIndex, nextChap) };
  }
   
  elem = document.getElementById("storyDesc" + listingIndex);
  elem.innerText = listingsTable[listingIndex][3][chapter - 1];
   
  elem = document.getElementById("storyName" + listingIndex);
  elem.onclick = function() { GoToStoryPage(listingsTable[listingIndex][1], chapter, 1) };

  elem = document.getElementById("storyChp" + listingIndex);
  elem.innerText = "Chp " + chapter;
}

async function addStoryNavigationBar(story, chapter, page) {
   return '\
         <table style="width:100%; text-align:center">\
           <tbody>\
             <tr>\
               <td style="width:15%"></td>\
               <td class="horizontalJustify">' + await addStoryNavigationPBlock(story, (parseInt(chapter) - 1), 1) + '<<</p>' + '</td>\
               <td class="horizontalJustify">' + await addStoryNavigationPBlock(story, chapter, (parseInt(page) - 1)) + '<</p>' + '</td>\
               <td style="width:15%"></td>\
               <td class="horizontalJustify">' + await addStoryNavigationPBlock(story, chapter, (parseInt(page) + 1)) + '></p>' + '</td>\
               <td class="horizontalJustify">' + await addStoryNavigationPBlock(story, (parseInt(chapter) + 1), 1) + '>></p>' + '</td>\
               <td style="width:15%"></td>\
             </tr>\
           </tbody>\
         </table>\
         ';
}

async function addStoryNavigationPBlock(story, chapter, page) { 
  if(await CheckIfScriptExists(story, chapter, page) != "")
    return '<p class="clickable" onclick="GoToStoryPage(\'' + story + '\',' + chapter + ',' + page + ');">';
  else
    return '<p class="unclickable">';
}

window.onpopstate = function(event) {
 UpdateContent();  
}

function UpdateStoryPage() {
   
   var pageName = getURLParameter('p');
   
   if(pageName == "page")
      UpdateContent();
}
