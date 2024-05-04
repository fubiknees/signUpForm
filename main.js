let btn = document.getElementById("button");

let check = function(){
    let pwd1 = document.getElementById("pwd").value;
    let pwd2 = document.getElementById("confirm-pwd").value;
    let message = document.querySelector("#message");


    if (pwd1 != "" && pwd2 != "" && pwd1 == pwd2){
        message.innerHTML = "Passwords match";
        message.style.color = "green";
    }

    else {
        message.innerHTML= "*Passwords do not match";
        message.style.color = "red";
    } 

}

