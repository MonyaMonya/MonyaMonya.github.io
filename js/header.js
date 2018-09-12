document.write('\
<script src="js/cookies.js"></script>\
    <script src="js/mode.js"></script>\
    <script src="js/randomTagline.js"></script>\
    <script src="stories/listings.js"></script>\
    <script src="js/content.js"></script>\
    <script src="js/textLoader.js"></script>\
	  \
      <div id="header">\
    <button id="modeButton" class="night"></button>\
    <button id="textUpButton" class="night"></button>\
    <button id="textDownButton" class="night"></button>\
    <button id="unitsButton" class="night"></button>\
    <script>initModeButton();</script>\
    <script>initTextUpButton();</script>\
    <script>initTextDownButton();</script>\
    <script>initUnitsButton(); checkIfFileExists("js/textLoader.js"); checkIfFileExists("js/textLssoader.js");</script>\
	\
    <h1 style="margin-top: 0px;">Monya Monya</h1>\
    <p style="font-size:80%" id="tagline"></p>\
<script>document.getElementById("tagline").innerText = getRandomTagline();</script>\
\
    <table style="width:100%; text-align:center">\
      <tr>\
        <td style="width:50%"></td>\
        <td><p class="clickable" onclick="GoToPage(\'listing\');">Stories</p></td>\
        <td><p class="clickable" onclick="GoToPage(\'about\');">About</p></td>\
      </tr>\
    </table>\
      </div><!-- #header -->\
\
');
