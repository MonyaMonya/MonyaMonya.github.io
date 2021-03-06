function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}





async function readTextFile(fileLocation) {
  try {
    let response = await get(fileLocation);
    return response.responseText;
  } catch (err) {
    return "";
  }
  
  
  //var rawFile = new XMLHttpRequest();
  //rawFile.open("GET", fileLocation, true);
  //rawFile.onreadystatechange = function() {
  //  if (rawFile.readyState === 4) {
  //    var allText = rawFile.responseText;
  //    document.getElementById("content").innerHTML = allText;
  //  }
  //}
  //rawFile.send();
}


async function checkIfFileExists(fileLocation) {
   //This is very bad for large files. Needs to be optimized!
  try {
    let response = await get(fileLocation);
    return true;
  } catch (err) {
    return false;
  }
}
