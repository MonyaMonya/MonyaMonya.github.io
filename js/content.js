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
 var nonUnit = "stories/" + story + "/" + chapter + "-" + page + ".js";
 var unit = "stories/" + story + "/" + chapter + "-" + page + "-" + unitsName + ".js";
   
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
   
   html += '<table style="width:100%; text-align:center">';
   html += '<tbody>';
   html += '<tr>';
   
   for (var i = 0; i < listingsTable.length; i++) {
     html += '<td><p class="clickable" onclick="GoToStoryPage(\'' + listingsTable[i][1] + '\',1,1);" id="storyName' + i + '">' + listingsTable[i][0] + "</p></td>";
     if(listingsTable[i][2] > 1) {
      html += '<td><p class="clickable" onclick="UpdateChapter(' + i + ',0);">v</p>';
      html += '<p id="storyChp' + i + '">Chp 1</p>';
      html += '<p class="clickable" onclick="UpdateChapter(' + i + ',2);">^</p></td>';
     }
     html += '</tr><tr><td><p id="storyDesc' + i + '">DescGoesHere</p></td>';
    }
    html += '</tr></tbody></table>';
      
   return html;
}

async function addStoryNavigationBar(story, chapter, page) {
   return '\
         <table style="width:100%; text-align:center">\
           <tbody>\
             <tr>\
               <td style="width:15%"></td>\
               <td className="horizontalJustify">' + await addStoryNavigationPBlock(story, (parseInt(chapter) - 1), 1) + '<<</p>' + '</td>\
               <td className="horizontalJustify">' + await addStoryNavigationPBlock(story, chapter, (parseInt(page) - 1)) + '<</p>' + '</td>\
               <td style="width:15%"></td>\
               <td className="horizontalJustify">' + await addStoryNavigationPBlock(story, chapter, (parseInt(page) + 1)) + '></p>' + '</td>\
               <td className="horizontalJustify">' + await addStoryNavigationPBlock(story, (parseInt(chapter) + 1), 1) + '>></p>' + '</td>\
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
