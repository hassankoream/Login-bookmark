var userName = localStorage.getItem('userName');

var myElement =document.getElementById('theName');
myElement.innerHTML = "Welcome " + userName;