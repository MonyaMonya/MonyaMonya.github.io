function loadPage() {
	
	const urlParams = new URLSearchParams(window.location.search);
	var hasCode = urlParams.has('code');
	var html;
	
	if(hasCode)
		html = generateCodePage();
	else
		html = generateCodelessPage();
	
	const newDiv = document.getElementById("body");
	newDiv.innerHTML = html;
	
	loadAlice();
}


function generateCodelessPage() {
	var pageHtml = "";
	
	pageHtml += '<div class="container alice-container">\r\n';
	pageHtml += '  <div class="row">\r\n';
	pageHtml += '	<div class="col col-6 offset-3 alice-center">\r\n';
	pageHtml += '	  Alice Generator\r\n';
	pageHtml += '	</div>\r\n';
	pageHtml += '  </div>\r\n';
	pageHtml += '  <div class="row">\r\n';
	pageHtml += '	<div class="col col-6 offset-3 alice-center">\r\n';
	pageHtml += '	  <button type="button" class="btn btn-secondary" onclick="generateAlice()">Find A Random Alice</button>\r\n';
	pageHtml += '	</div>\r\n';
	pageHtml += '  </div>\r\n';
	pageHtml += '  <div class="row">\r\n';
	pageHtml += '	<div class="col col-6 offset-3 alice-center">\r\n';
	pageHtml += '	  -or-\r\n';
	pageHtml += '	</div>\r\n';
	pageHtml += '  </div>\r\n';
	pageHtml += '  <div class="row">\r\n';
	pageHtml += '	<div class="col col-6 offset-3 alice-center">\r\n';
	pageHtml += '	  <input type="text" class="form-control" placeholder="PIN Number" aria-label="alicecode" aria-describedby="basic-addon1" id="alicecode">\r\n';
	pageHtml += '      <button type="button" class="btn btn-secondary" onclick="recallAlice()">Recall An Alice</button>\r\n';
	pageHtml += '	</div>\r\n';
	pageHtml += '  </div>\r\n';
	pageHtml += '</div>\r\n';
	
	
    pageHtml += '<script src="js/mersenne-twister.js"></script>\r\n';
    pageHtml += '<script src="js/alice.js"></script>';
	
	return pageHtml;
}

function generateCodePage() {
	var pageHtml = "";
	
	pageHtml += '<div class="container alice-container">\r\n';
	pageHtml += '  <div class="row">\r\n';
	pageHtml += '    <div class="col col-3 alice-right">\r\n';
	pageHtml += '	  <canvas id="alicecanvas" width="110" height="290"></canvas>\r\n';
	pageHtml += '	</div>\r\n';
	pageHtml += '    <div class="col">\r\n';
	pageHtml += '	  <div id="alicename">Happy, Gallivanting Alice Sr.</div>\r\n';
	pageHtml += '	  <div id="alicecode" class="alice-code">(MC43MDM2MjEwNTg3MzU5NDc3)</div>\r\n';
	pageHtml += '	  <div class="row">\r\n';
	pageHtml += '	    <div class="col">\r\n';
	pageHtml += '	      <div id="alicerarity">Epic</div>\r\n';
	pageHtml += '	      <div id="alicesize" style="color: lightgray;">0.8 mm</div>\r\n';
	pageHtml += '	      <div class="image">\r\n';
	pageHtml += '		    <img id="aliceaffinity" width="35" height="35">\r\n';
	pageHtml += '			  <span id="alicetooltip" class="tooltiptext2">Affinity: Storb</span>\r\n';
	pageHtml += '			</img>\r\n';
	pageHtml += '		  </div>\r\n';
	pageHtml += '	    </div>\r\n';
	pageHtml += '	    <div class="col alice-center">\r\n';
	pageHtml += '	      <canvas id="alicecomparecanvas" width="110" height="165"></canvas>\r\n';
	pageHtml += '		  <div class="alice-code">\r\n';
	pageHtml += '			(size comparison of <div class="inlinediv color-aqua">your Alice</div> and <div class="inlinediv color-pink">original Alice</div>)\r\n';
	pageHtml += '		  </div>\r\n';
	pageHtml += '	    </div>\r\n';
	pageHtml += '	  </div>\r\n';
	pageHtml += '	</div>\r\n';
	pageHtml += '  </div>\r\n';
	pageHtml += '  <div class="row align-items-center alice-mid-row">\r\n';
	pageHtml += '    <div class="col col-6 offset-3 alice-mid-col">\r\n';
	pageHtml += '	</div>\r\n';
	pageHtml += '  </div>\r\n';
	pageHtml += '  <div class="row">\r\n';
	pageHtml += '    <div class="col col-1">\r\n';
	pageHtml += '	</div>\r\n';
	pageHtml += '    <div class="col col-10">\r\n';
	pageHtml += '	  <div class="alice-center">Attributes</div>\r\n';
	pageHtml += '      <div id="aliceattributes" class="alice-attribute">\r\n';
	pageHtml += '	   </div>\r\n';
    pageHtml += '    </div>\r\n';
	pageHtml += '  </div>\r\n';

	pageHtml += '</div>\r\n';
   
	pageHtml += '<button type="button" class="btn btn-secondary alice-button-left" onclick="generateAlice()">Reroll</button>\r\n';
	pageHtml += '<button type="button" class="btn btn-secondary alice-button-right" onclick="copyPageUrl()">Get Link</button>\r\n';
	
	pageHtml += '<input id="aliceUrl"></input>\r\n';
	
    pageHtml += '<script src="js/mersenne-twister.js"></script>\r\n';
    pageHtml += '<script src="js/aliceconstants.js"></script>\r\n';
    pageHtml += '<script src="js/alice.js"></script>\r\n';
	
	return pageHtml;
}