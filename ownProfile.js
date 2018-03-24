if (localStorage.length) {
  var fullName = localStorage.firstName + ' ' + localStorage.lastName;
  document.querySelector('.name').textContent = fullName;
  document.querySelector('.phoneNumber').textContent = localStorage.ownerPhoneNumber;
  document.querySelectorAll('.email')[0].textContent = localStorage.ownerEmail;
  document.querySelectorAll('.email')[1].textContent = localStorage.ownerEmail;
  document.querySelector('.location').textContent = localStorage.ownerLocation;
  document.querySelector('.wallImg').src = localStorage.ownerImageUrl;
}
