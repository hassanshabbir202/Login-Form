const email = document.getElementById("email");
const password = document.getElementById("password");

// click on the login button

let login = document.getElementById("login");
let emailerror = document.getElementById("emailerror");
let passerror = document.getElementById("passerror");
login.addEventListener("click" , ()=> {
    if(email.value===""){
        emailerror.innerHTML = "*Email required*"
        setInterval(() => {
        emailerror.innerHTML = ""
        }, 2000);
    }else if(email.value!=="" && password.value===""){
        passerror.innerHTML = "*password required*"
        setInterval(() => {
            passerror.innerHTML = ""
        }, 2000);
    }else{
        document.querySelector(".welcome_box").style.display = "block";
        document.querySelector(".container").style.display = "none";
    }
});


document.getElementById("logout").addEventListener("click" , ()=>{
     window.location.reload()
});