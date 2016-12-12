/* Made by Darin Croft */
var flashcards = [];
var index = 0;

function create(){  //creates a single flashcard at a time
  var question = document.getElementById("question").value;
  var answer = document.getElementById("answer").value;
  var check = document.getElementById("ifimage");
}

function save(){  //saves all of the flashcards as a string and stores in a cookie
  console.log("before save~");
  var flashcardstring = flashcards.toString();
  setCookie("yourlist", flashcardstring);
  console.log("after save~");
}

function move_on(){
  save();
  window.location.href='cards.html';
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}