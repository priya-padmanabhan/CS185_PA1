
function show(other) {
	document.getElementById('overlay').style.display = "block";
	document.getElementById('obj').src = other.src;
}


function hide() {
	document.getElementById('overlay').style.display = "none";
}


function showVid(other) {
	document.getElementById('overlay').style.display = "block";
	document.getElementById('obj').src = other.src;
}


var scroll = document.getElementById("button");
window.onscroll = function() {showScroll()};

function showScroll() {
  	if ((document.body.scrollTop || document.documentElement.scrollTop) > (0.25) * window.innerHeight){
    	scroll.style.display = "block";
  	} 
  	else {
    	scroll.style.display = "none";
  	}
}


function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function checkEmail(email) {
	var values = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (email.value.match(values)) {
		document.getElementById("output").innerHTML ="Email successfully recorded";
	}
	else {
		document.getElementById("output").innerHTML ="Invalid email address";
	}
}


/* sources used: 
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_overlay_text
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
https://www.w3resource.com/javascript/form/email-validation.php
https://stackoverflow.com/questions/13765116/output-disappeared-javascript-simple-innerhtml
*/
