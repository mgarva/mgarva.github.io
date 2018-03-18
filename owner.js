document.querySelector('.upload-image').addEventListener('change', uploadImage);
  localStorage.ownerImageUrl = "";
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
 var photoUrl = localStorage.ownerImageUrl


 if (
   name == '' ||
   phoneNumber == '' ||
   email == '' ||
   photoUrl == '' ||
   preferLocation == ''
 ) {
   document.querySelector('.error').textContent = 'Please fill out all the fields!';
 } else {
   localStorage.ownerName = name;
   localStorage.ownerPhoneNumber = phoneNumber;
   localStorage.ownerEmail = email;
   localStorage.ownerLocation = preferLocation;

   $.ajax({
     url: "https://script.google.com/macros/s/AKfycbyrG_jqvrZe45OrkRb361wJZtglcOftHV5xhuzuReP87WenCIA/exec",
     method: "GET",
     dataType: "json",
     data: $('.input').serialize()
   }).done(function (result) {
   location.href = 'ownProfile.html';
  });
 }
}
