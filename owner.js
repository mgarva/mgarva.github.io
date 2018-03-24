document.querySelector('.upload-image').addEventListener('change', uploadImage);
  localStorage.ownerImageUrl = "";
 function uploadImage() {
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
  var firstName = document.querySelector('.user-first-name').value;
  var lastName = document.querySelector('.user-last-name').value;
 var phoneNumber = document.querySelector('.phoneNumber').value;
 var email = document.querySelector('.email').value;
 var preferLocation = document.querySelector('.location').value;
 var photoUrl = localStorage.ownerImageUrl


 if (
   firstName == '' ||
   lastName == '' ||
   phoneNumber == '' ||
   email == '' ||
   photoUrl == '' ||
   preferLocation == ''
 ) {
   document.querySelector('.error').textContent = 'Please fill out all the fields!';
 } else {
   localStorage.ownerFirstName = firstName;
   localStorage.ownerLastName = lastName;
   localStorage.ownerPhoneNumber = phoneNumber;
   localStorage.ownerEmail = email;
   localStorage.ownerLocation = preferLocation;

   $.ajax({
     url: "https://script.google.com/macros/s/AKfycbyrG_jqvrZe45OrkRb361wJZtglcOftHV5xhuzuReP87WenCIA/exec",
     method: "GET",
     dataType: "json",
     data: $('.owner-form').serialize()
   }).done(function (result) {
   location.href = 'ownProfile.html';
  });
 }
}
