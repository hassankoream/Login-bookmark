// inputs
var userEmail = document.getElementById('userEmail');
var userPassword = document.getElementById('userPassword');
var z;

// buttons


var logoutBtn = document.getElementById('logout');

// logic
var users = [];


if (localStorage.getItem('myUsers') !== null) {
    users = JSON.parse(localStorage.getItem('myUsers'));
};











// After signup go to login
// check if email and password in the array
// use href easier
// login function



// function setFormToLogin(){

//     userName.classList.add('d-none');
//     signupBtn.classList.add('d-none');
//     loginBtn.classList.replace('d-none', 'd-block');
//     askPara.innerHTML=`Don’t have an account? <a onclick="setFormToSignup()" class="text-capitalize">signup</a>`
// }
// //  use href easier
// function setFormToSignup(){
//     userName.classList.remove('d-none');
//     userName.classList.add('d-block');
//     signupBtn.classList.remove('d-none');
//     signupBtn.classList.add('d-block');
//     loginBtn.classList.replace('d-block', 'd-none');
//     askPara.innerHTML=`You have an account? <a onclick="setFormToLogin()" class="text-capitalize">signin</a>`
// }




//logout function
function logout() {

}





