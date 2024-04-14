function displayText() {
    let text = document.getElementById("textField");
    text.style.display = "block";
    }




function displayText2() {
    let text2 = document.getElementById("translation").value;
    
    if (text2=="Quiero pedir un café.") {
            location.href = "page-4.html";
    } else {
            document.getElementById("textField-2").innerHTML="That's not quite right...";
     }
}






function displayText3() {
    let tomatoes = document.getElementById("tomatoes").checked;
    let lettuce = document.getElementById("lettuce").checked;
    let grapes = document.getElementById("grapes").checked;
    let potatoes = document.getElementById("potatoes").checked;
    let oranges = document.getElementById("oranges").checked;
    let lemons = document.getElementById("lemons").checked;

    if ((tomatoes==true) &&
    (lettuce==false) &&
    (grapes==true) &&
    (potatoes==false) &&
    (oranges==true) &&
    (lemons==false)) {
        location.href = "page-5.html";
  } else {
        document.getElementById("textField-3").innerHTML="That's not quite right...";
    }
}