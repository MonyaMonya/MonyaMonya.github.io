document.write('\
<script src="js/cookies.js"></script>\
    <script src="js/mode.js"></script>\
    <script src="js/randomTagline.js"></script>\
	  \
      <div id="header">\
    <button id="modeButton" class="night"></button>\
    <script>initModeButton();</script>\
	\
    <h1>Monya Monya</h1>\
    <p style="font-size:80%" id="tagline"></p>\
<script>document.getElementById("tagline").innerText = getRandomTagline();</script>\
\
    <table style="width:100%; text-align:center">\
      <tr>\
        <td style="width:50%"></td>\
        <td>Stories</td>\
        <td>About</td>\
      </tr>\
    </table>\
      </div><!-- #header -->\
\
');
