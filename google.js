const enterEmail = "abc@gmail.com";
// // let email2 = "abcd@gmail.com";
// let password2 = "karachi$";
// let emailInput = document.getElementById("enter-email");
// let passwordInput = document.getElementById("security");
// let nextButton = document.getElementById("btn");
// let span = document.getElementById("error");
// let spanpass=document.getElementById("spanpass");

// function gotoNextPage() {
//     if(emailInput==enter-email){
//         window.location.href = "password.html";
//         // alert("Congrates! your email is correct");
//     }



// stack-Overflow-code
// window.onload = function () {
function NextPage() {
    let emailInput = document.getElementById("enter-email").value;
    let nextButton = document.getElementById("btn");
    let span = document.getElementById("error");
    let spanpass = document.getElementById("spanpass");
    if (enterEmail === emailInput) {
        // document.getElementById('btn').onclick = function() {
        window.location.href = "password.html";
        alert(your email is correct);
    }
    // console.log("#btn")

    else {
        document.getElementById("error").style.display = "block";
        // document.write("The code is wrong, try again!");
        // console.log("#span");
    }

}
const enterPassword = "sm123$";

function getStarted() {
    if (enterPassword === passwordInput.value) {
        window.location = "welcome.html";
    }
    else {
        spanpass.style.display = "block";


    }
}
let passwordInput = document.getElementById("security");



