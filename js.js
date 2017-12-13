var stopClock = "false";
function startTime() {
	var myVar = setInterval(myTimer, 1000);
}




function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = t;
    if(stopClock == "true") {
    	clearInterval(myVar);
    }
}

function myStopFunction() {
	stopClock = "true";
    clearInterval(myVar);
}
