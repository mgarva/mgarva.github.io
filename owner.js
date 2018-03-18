document.querySelector('.upload-image').addEventListener('change', uploadImage);

 function uploadImage() {
    console.log('insideUploadImage');
   var preview = document.querySelector('.image-preview');
   var file = document.querySelector('.upload-image').files[0];
   var reader = new FileReader();

   reader.onloadend = function () {
     var imageUrl = reader.result;
     preview.src = imageUrl;
     localStorage.ownerImageUrl = imageUrl;
   }

   reader.readAsDataURL(file);
 }

 //

document.querySelector('.submit').addEventListener('click', submitProfile);

function submitProfile() {
 var name = document.querySelector('.name').value;

 var phoneNumber = document.querySelector('.phoneNumber').value;
 var email = document.querySelector('.email').value;
 var preferLocation = document.querySelector('.location').value;


 if (
   name == '' ||
   phoneNumber == '' ||
   email == '' ||
   preferLocation == ''
 ) {
   document.querySelector('.error').textContent = 'Please fill out all the fields!';
 } else {
   localStorage.ownerName = name;
   localStorage.ownerPhoneNumber = phoneNumber;
   localStorage.ownerEmail = email;
   localStorage.ownerLocation = preferLocation;

   location.href = 'ownProfile.html';
 }
}
