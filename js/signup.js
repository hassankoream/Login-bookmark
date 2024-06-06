var userName=document.getElementById('userName');
var signupBtn= document.getElementById('signUp');


myInputs = document.querySelectorAll('input'); //nodeList

for(i=0; i<myInputs.length; i++){
    myInputs[i].addEventListener('input', function(){
        validateInputs(this);
    });{
}
}

signupBtn.addEventListener('click', function(){
    register();
})



// Sign up function
function register(){


    if(
        validateInputs(userName)&&
        validateInputs(userEmail)&&
        validateInputs(userPassword)
      
    ){
        var user={
            name: userName.value,
            email: userEmail.value.toLowerCase(),
            password: userPassword.value,
            
         
        };
        var checker=checkUser();
        // email available
        if(checker !=="email already exists" ){
            users.push(user);
        
            localStorage.setItem('myUsers', JSON.stringify(users));
            clearForm();
            loginMessage('Account created successfully', '#F6FAB9', 'GREEN');
         
            setTimeout(goNow , 1000);
            
     
            
        }
        else{
            loginMessage(checker, '#E88D67', '#8E3E63');
            
        };
        
    }
else{
    loginMessage("all fields are required", '#E88D67', "white");
    
}


 


};


// check if it exist
function checkUser(){

    for (i=0; i<users.length; i++){
        if(users[i].email.toLowerCase() == userEmail.value.toLowerCase()){
          return 'email already exists';
        }
      
    
    };

    return 'email available';
  


}

// validations on inputs
function validateInputs(ele){


    var regex={
        userName:/^.{3,20}$/,
        userEmail:/^[a-zA-Z0-9._%+-]{3,30}@[a-zA-Z0-9.-]{3,8}\.[a-zA-Z]{2,4}$/,
        userPassword:/^[A-Z]{1}.{2,7}$/,

    }

    if (regex[ele.id].test(ele.value) == true){
        ele.classList.add("is-valid");
        ele.classList.remove("is-invalid");
        ele.nextElementSibling.classList.replace("d-block", "d-none");
        return true

    }
    else{
        ele.classList.remove("is-valid");
        ele.classList.add("is-invalid");
        ele.nextElementSibling.classList.replace("d-none", "d-block");
        return false
    }
    
}


// hide or reveal password
const togglePasswordIcon = document.getElementById('toggle-password');
        togglePasswordIcon.addEventListener('click', function () {
            const isPasswordVisible = userPassword.type === 'text';
            userPassword.type = isPasswordVisible ? 'password' : 'text';
            togglePasswordIcon.classList.replace(isPasswordVisible ? 'fa-eye' : 'fa-eye-slash', isPasswordVisible ? 'fa-eye-slash' : 'fa-eye');
        });

// function validateInputs(ele){
    
//     var regex ={
//         productName: /^[a-z].{3,20}$/i,
//         productPrice: /^[1-9][0-9]{2}$/,
//         productCategory:/^(TV|Mobile|Watch|Computer)$/i,
//         productImage:/^.{1,}\.(jpg|png|svg)$/

//     }
//     if (regex[ele.id].test(ele.value) == true){
//         ele.classList.add("is-valid");
//         ele.classList.remove("is-invalid");
//         ele.nextElementSibling.classList.replace("d-block", "d-none");
//         return true

//     }
//     else{
//         ele.classList.remove("is-valid");
//         ele.classList.add("is-invalid");
//         ele.nextElementSibling.classList.replace("d-none", "d-block");
//         return false
//     }
// }
// clear form function

function clearForm(){
    userName.value = '';
    userEmail.value = '';
    userPassword.value = '';
    userName.classList.remove('is-valid');
    userEmail.classList.remove('is-valid');
    userPassword.classList.remove('is-valid');
    togglePasswordIcon.classList.replace('fa-eye', 'fa-eye-slash')
    userPassword.type = 'password';
  
    
};

// loginMessage function

function loginMessage(message, bgColor, textColor){
    var mySpan = document.querySelector('.loginMessage');
    mySpan.classList.add('text-capitalize', 'text-center', 'mt-3', 'fw-bold');
    mySpan.style.backgroundColor= bgColor;
    mySpan.style.color= textColor;
    mySpan.innerHTML = message;
    
}
// auto redirect them to login
function goNow(){
    // console.log('hello')
    window.location.href = "index.html"
}