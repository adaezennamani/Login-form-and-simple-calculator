let modifyButton = document.getElementById("button")
modifyButton.addEventListener("click", noBtn)

let modEmail = document.getElementById("Email")
modEmail.addEventListener("click", noBtn)

let modUsername = document.getElementById("Username")
modUsername.addEventListener("click", noBtn)

let modPassword = document.getElementById("Password")
modPassword.addEventListener("click", noBtn)


function noBtn() {
    modifyButton.style.backgroundColor = "Green"
    modEmail.style.border = "3px solid blue"
    modUsername.style.border = "3px solid blue"
    modPassword.style.border = "3px solid blue"
}


function login(){
let email = document.getElementById("Email").value;
 let password = document.getElementById("Password").value;



    console.log("login called");
    console.log("my username is", email);
    console.log("my password is", password);
}