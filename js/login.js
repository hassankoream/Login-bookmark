var loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', function () {
    var x = signIn();
    if (x == 'Login successful') {
        window.location.href = "home.html"
    }
    else {
        var y = document.querySelector('.mydiv');
        y.classList.add('text-capitalize', 'text-center', 'mt-3', 'fw-bold');
        y.innerHTML = x;
        y.style.color = '#E88D67';

    }
   

})

// check if email and password match and get the name in storage to display on home.

function signIn() {
    if (localStorage.getItem('myUsers') !== null) {
        
        for (var i = 0; i < users.length; i++) {
            if (users[i].email.toLowerCase() === userEmail.value.toLowerCase()) {
                if (users[i].password === userPassword.value) {
                    localStorage.setItem('userName', users[i].name);
                    return ('Login successful');
                } else {
                    return ('Incorrect password');
                }
            }
        }
        return 'Email does not exist';
    } else {
        return 'You must register first';
    }


}



const togglePasswordIcon = document.getElementById('toggle-password');
togglePasswordIcon.addEventListener('click', function () {
    const isPasswordVisible = userPassword.type === 'text';
    userPassword.type = isPasswordVisible ? 'password' : 'text';
    togglePasswordIcon.classList.replace(isPasswordVisible ? 'fa-eye' : 'fa-eye-slash', isPasswordVisible ? 'fa-eye-slash' : 'fa-eye');
});


function clearForm() {
    userName.value = '';
    userEmail.value = '';
    userPassword.value = '';
    userName.classList.remove('is-valid');
    userEmail.classList.remove('is-valid');
    userPassword.classList.remove('is-valid');
    togglePasswordIcon.classList.replace('fa-eye', 'fa-eye-slash')
    userPassword.type = 'password';


};






















 //  userEmail.value = '';
    //  userPassword.value = '';
    //  y.removeChild(mySpan);




// function signIn() {
//     if (localStorage.getItem('myUsers') !== null) {
//         // check if email and password in the array
//         for (var i = 0; i < users.length; i++) {
//             if (users[i].email === userEmail.value) {
//                 if (users[i].email === userEmail.value && users[i].password === userPassword.value) {
//                     console.log(users[i]);
//                     return 'Login successful'
                    

//                 }
//                 else {
//                     console.log(users[i]);
//                     return 'Invalid email or password'
//                 }


//             }
//             else {
//                 return 'Email not exist'
//             }
//         }
//     }
//     else {
//         return 'you must register first'
//     }


// }