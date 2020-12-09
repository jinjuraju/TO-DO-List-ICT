let email = document.getElementById("email");
let error = document.getElementById("error");
let pwd = document.getElementById("pwd");
function validate(){
    if(email.value=="admin"&&pwd.value=="12345"){
        error.innerHTML = "Valid";
        error.style.color = "green";
        return true;
    }
    else{
        error.innerHTML = "Invalid";
        error.style.color = "red";
        return false;
    }  
}

