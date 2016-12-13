/* Made by Darin Croft */
var flashcards = [];
var index = 0;

function create(){  //creates a single flashcard at a time
  var question = document.getElementById("question").value;
  var answer = document.getElementById("answer").value;
  var check = document.getElementById("ifimage").checked;
  var tmp = question + "." + answer + ".";
  if(question && answer){
  if(check){
    tmp = tmp + "yes";
    console.log(tmp);
    flashcards.push(tmp);}
  else{
    tmp = tmp + "no";
    console.log(tmp);
    flashcards.push(tmp);}
  //index++;
  document.getElementById("question").value = "";
  document.getElementById("answer").value = "";
  }
}

function save(){  //saves all of the flashcards as a string and stores in a cookie
  var flashcardstring = flashcards.toString();
  setCookie("yourlist", flashcardstring, 1);
  //setCookie("yourindex", index, 1);
  console.log(getCookie("yourlist"));
}

function move_on(){
  save();
  window.location.href='cards.html';
}

function showcard(){
  var tmparray = flashcards[index].split(".");
  console.log(tmparray.toString());
  if(tmparray[2] == "no"){
    document.getElementById("top").innerHTML = tmparray[0];
  }
  else{
    document.getElementById("top").innerHTML = "<img src='" + tmparray[0] + "' style='height:400px'>";
  }
  index++;
}

function loadcards(){
  console.log("hi");
  var yourcookie = getCookie("yourlist");
  var arrayCookie = [];
  arrayCookie = yourcookie.split(",");
  for(var i=0; i<arrayCookie.length; i++){
    flashcards.push(arrayCookie[i]);
  }
  console.log(flashcards.toString());
  showcard();
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
