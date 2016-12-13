/* Made by Darin Croft */
var flashcards = [];
var index = 0;

function create(){  //creates a single flashcard at a time
  var question = document.getElementById("question").value;
  var answer = document.getElementById("answer").value;
  var check = document.getElementById("ifimage").checked;
  var tmp = question + "#" + answer + "#";
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
  document.getElementById("nextpageB").disabled = false;
  }
}

function save(){  //saves all of the flashcards as a string and stores in a cookie
  var flashcardstring = flashcards.toString();
  setCookie("yourlist", flashcardstring, 1);
  console.log(getCookie("yourlist"));
}

function move_on(){ //all this function does is allow the HTML button it's attached to to call save and move to the next page
  save();
  window.location.href='cards.html';
}

function showcard(prevquestion){  //displays the flashcard question and answer on the page
  if(!prevquestion){  //the parameter "prevquestion" is just a boolean to see if the user got the last question correct (or if there even was a last question)
    var tmparray = flashcards[index].split("#");
    console.log(tmparray.toString());
    if(tmparray[2] == "no"){
      document.getElementById("top").innerHTML = tmparray[0];
    }
    else if(tmparray[2] == "yes"){
      document.getElementById("top").innerHTML = "<img src='" + tmparray[0] + "' style='height:400px'>";
    }
  }
  else{
    if(index == flashcards.length - 1){
      document.getElementById("error").innerHTML = "You completed your flashcards!";
    }
    else{
      index++;
      document.getElementById("error").innerHTML = "<br>";
      document.getElementById("bottom").value = "";
      showcard(false);
  }
}

function loadcards(){ //this function just loads the flashcards from your cookies and then calls showcard()
  console.log("hi");
  var yourcookie = getCookie("yourlist");
  var arrayCookie = [];
  arrayCookie = yourcookie.split(",");
  for(var i=0; i<arrayCookie.length; i++){
    flashcards.push(arrayCookie[i]);
  }
  console.log(flashcards.toString());
  showcard(false);
}

function checkanswer(){
  var tmparray = flashcards[index].split("#");
  var tmp = document.getElementById("bottom").value;
  console.log("hoi");
  if(tmp == tmparray[1]){
    document.getElementById("error").innerHTML = 'Correct! Please press "Next Card"';
  }
  else{
    document.getElementById("error").innerHTML = "You answer is incorrect. Try again.";
  }
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
