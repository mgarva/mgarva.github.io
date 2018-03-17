 document.querySelector('.upload-image').addEventListener('change', uploadImage);

  function uploadImage() {
    var preview = document.querySelector('.image-preview');
    var file = document.querySelector('.upload-image').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      var imageUrl = reader.result;
      preview.src = imageUrl;
      localStorage.imageUrl = imageUrl;
    }

    reader.readAsDataURL(file);
  }

  //

document.querySelector('.submit').addEventListener('click', submitProfile);

function submitProfile() {
  var firstName = document.querySelector('.user-first-name').value;
  var lastName = document.querySelector('.user-last-name').value;
  var phoneNumber = document.querySelector('.phoneNumber').value;
  var email = document.querySelector('.user-email').value;
  var photoUrl = document.querySelector('.image-preview').value;
  var portfolio = document.querySelector('.portfolio').value;
  var preferLocation = document.querySelector('.location').value;
  var preferStyle = document.querySelector('.paintStyle').value;


  if (
    firstName == '' ||
    lastName == '' ||
    phoneNumber == '' ||
    email == '' ||
    photoUrl == '' ||
    portfolio == '' ||
    preferStyle == '' ||
    preferLocation == ''
  ) {
    document.querySelector('.error').textContent = 'Please fill out all the fields!';
  } else {
    localStorage.firstName = firstName;
    localStorage.lastName = lastName;
    localStorage.phoneNumber = phoneNumber;
    localStorage.email = email;
    localStorage.photo = photoUrl;
    localStorage.portfolio = portfolio;
    localStorage.location = preferLocation;
    localStorage.style = preferStyle;

    location.href = 'artNotification.html';
  }
}
