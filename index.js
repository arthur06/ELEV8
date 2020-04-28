var input = document.getElementById("content");
var send = document.getElementById("mail");

send.addEventListener("click", sendMail);

function sendMail() {
    var text = input.value;
    if (!text) {
        alert("You must enter something!");
    }
    else {
        window.location.href="mailto:mail@example.org?subject=I would like to participate in the ELEV8 tournament&body=My Discord tag: " + text;
    }
}