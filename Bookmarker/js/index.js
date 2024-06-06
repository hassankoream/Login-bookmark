// global variables

var userWebName = document.getElementById("WebName");
var userWebURL = document.getElementById("userUrl");
var submitMark = document.getElementById("submitMark");


var bookMarks = [];



if (localStorage.getItem("bookMarks") !== null) {
    bookMarks = JSON.parse(localStorage.getItem("bookMarks"));
    displayBookmarks();
}

// event listeners
submitMark.addEventListener("click", function () {
    addMark();
});










// add bookmark function

function addMark() {
    // console.log("hello");


    if (
        validateInputs(userWebName) &&
        validateInputs(userWebURL)

    ) 
    

    
    {

        
        
        var bookMark = {
            name: userWebName.value,
            url: userWebURL.value,
        };
        
        bookMarks.push(bookMark);

        displayBookmarks();


        localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
        // console.log(bookMarks);
        userWebName.classList.remove("is-valid");
        userWebURL.classList.remove("is-valid");
        clearForm();
        


    }



    else {
        showAlert();

    }


}



// display function
function displayBookmarks() {
    var bookmarkList = "";

    for (var i = 0; i < bookMarks.length; i++) {
        bookmarkList += `<tr>
            <td>${i + 1}</td>
            <td>${bookMarks[i].name}</td>
            <td><a href="${bookMarks[i].url}" target="_blank" class="btn btn-visit"><i class="fa-regular fa-eye me-2"></i>Visit</a></td>
            <td><button onclick="deleteBookmark(${i});" class="btn btn-danger deleteButton"><i class="fa-solid fa-trash-can me-2"></i>Delete</button></td>
        </tr>`;
    }

    document.getElementById("rowData").innerHTML = bookmarkList;

    // var deleteItems = document.querySelectorAll(".deleteButton");
    // deleteItems.forEach(function(deleteItem) {
    //     deleteItem.addEventListener("click", function() {
    //         var index = this.getAttribute("data-index");
    //         deleteBookmark(index);
    //     });
    // });
}



// Clear form function
function clearForm() {
    userWebName.value = null;
    userWebURL.value = null;
}




// Visit function




// Delete bookmark function
function deleteBookmark(deletedIndex) {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success mx-2",
            cancelButton: "btn btn-danger mx-2"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {

            bookMarks.splice(deletedIndex, 1);
            localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
            displayBookmarks();
            swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your Bookmark has been deleted.",
                icon: "success"
            });
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: "Cancelled",
                // text: "Your imaginary file is safe :)",
                icon: "error"
            });
        }
    });



}






// edit function


// search function





// function to check Inputs validation
function validateInputs(ele) {
    var regex = {
        WebName: /^[a-z]{3,10}$/i,
        userUrl: /^(https?:\/\/(?:www\.)?)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{3,}\.(?:[a-z]{2,10})(\/.*)?$/i,


    };

    if (regex[ele.id].test(ele.value)) {
        ele.classList.add("is-valid");
        ele.classList.remove("is-invalid");
        ele.nextElementSibling.classList.add('d-none');
        return true;
    }
    else {


        ele.classList.add("is-invalid");

        ele.classList.remove("is-valid");
        ele.nextElementSibling.classList.remove('d-none');
        return false;
    };

};






// alert function for no validation rules 
function showAlert() {
    // Create overlay
    // var overlay = document.createElement('div');
    // overlay.className = 'alert-overlay';
    

    // // Create alert box
    // var alertBox = document.createElement('div');
    // alertBox.className = 'alert-box';
//     alertBox.innerHTML = `
//     <div class="container text-start">
//     <div class="icons-container d-flex justify-content-between mb-5">
//         <div class="icons">
//             <span style="background-color: red;"></span>
//             <span style="background-color: yellow;"></span>
//             <span style="background-color: green;"></span>
//         </div>
//         <div>
//             <i id="closeButton1" class="fa-solid fa-xmark fs-3"></i>
//         </div>
//     </div>
 
//     <p class="fs-5 my-4 fw-bold">Site Name or Url is not valid, Please follow the rules below :</p>
//     <p><i class="fa-regular fa-circle-right me-2" style="color:#BB4120"></i>Site name must contain at least 3 characters.</p>
//     <p><i class="fa-regular fa-circle-right me-2" style="color:#BB4120"></i>Website Url must start with https://www or http://www <br> 
//     examples : <br> https://www.facebook.com <br> http://www.twitter.com/elonmusk 
//     </p>

// </div>`;


    // Append elements

    // overlay.appendChild(alertBox);
    // document.body.appendChild(overlay);

        var overlay = document.querySelector('.alert-overlay');
        var alertBox = document.querySelector('.alert-box');

        overlay.classList.replace('d-none','d-flex');



    // Create close button
    var closeButton = document.getElementById('closeButton1');
    closeButton.addEventListener('click', function () {
        overlay.classList.replace('d-flex','d-none');
    });



function closeSlider(){
    overlay.classList.replace('d-flex','d-none');

}

    overlay.addEventListener('click', function(e){
        closeSlider();
       
      });
      alertBox.addEventListener('click', function(e){
        e.stopPropagation();
      });


}



// clear All function
var clearButton = document.getElementById('clearAll');
clearButton.addEventListener('click', function () {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success mx-2",
            cancelButton: "btn btn-danger mx-2"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "Delete All Bookmarks?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it All!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {

            bookMarks = [];
            localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
            displayBookmarks();
            swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your Bookmarks have been deleted.",
                icon: "success"
            });
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your Bookmarks are safe :)",
                icon: "error"
            });
        }
    });



});



//  click the the validate input icon to show something 
// var z = document.querySelectorAll('.is-invalid')
// if k.classList.contains("is-invalid") {
// }
// document.querySelectorAll('.is-invalid').forEach(function(inputElement) {
//     inputElement.addEventListener('click', function(event) {
//         // Get the bounding rectangle of the input element
//         var rect = inputElement.getBoundingClientRect();

//         // Calculate the click position relative to the input element
//         var clickX = event.clientX - rect.left;
//         var clickY = event.clientY - rect.top;

//         // Calculate the right padding value to determine the start of the background image
//         var rightPadding = parseFloat(window.getComputedStyle(inputElement).paddingRight);

//         // Check if the click is within the background image area
//         if (clickX > rect.width - rightPadding) {
//             // Change the background image
//             Swal.fire("SweetAlert2 is working!");
//         }
//     });
// });








// check name function
// function checkName(){

//     // Get bookmarks from localStorage or initialize an empty array
        
//         // Check if name exists in bookmarks


//     var bookMarkslist = JSON.parse(localStorage.getItem("bookMarks")) || [];
//     console.log(bookMarkslist);
//     for (var x = 0; x < bookMarkslist.length; x++) {
//         if (bookMarkslist[x].name === userWebName.value) {
//             window.alert("name already exists");

//         }
//         else {
//             bookMarks.push(bookMark);
//         }
//     };
// }














// animation text
document.addEventListener('DOMContentLoaded', () => {
    const h2Element = document.querySelector('.myform h2');
    const animationDuration = 3000; // 3 seconds
    const pauseDuration = 3000; // 5 seconds

    function startAnimation() {
        h2Element.style.animation = `snakeAnimation ${animationDuration / 1000}s linear forwards`;
    }

    function pauseAndRestartAnimation() {
        h2Element.style.animation = 'none'; // Reset the animation
        setTimeout(startAnimation, pauseDuration);
    }

    h2Element.addEventListener('animationend', pauseAndRestartAnimation);

    startAnimation();
});