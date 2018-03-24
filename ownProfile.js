if (localStorage.length) {
  var fullName = localStorage.ownerFirstName + ' ' + localStorage.ownerLastName;
  document.querySelector('.name').textContent = fullName;
  document.querySelector('.phoneNumber').textContent = localStorage.ownerPhoneNumber;
  document.querySelector('.email').textContent = localStorage.ownerEmail;
  document.querySelector('.location').textContent = localStorage.ownerLocation;
  document.querySelector('.wallImg').src = localStorage.ownerImageUrl;
}
