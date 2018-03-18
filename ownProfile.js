if (localStorage.length) {
  document.querySelector('.name').textContent = localStorage.ownerName;
  document.querySelector('.phoneNumber').textContent = localStorage.ownerPhoneNumber;
  document.querySelectorAll('.email')[0].textContent = localStorage.ownerEmail;
  document.querySelectorAll('.email')[1].textContent = localStorage.ownerEmail;
  document.querySelector('.location').textContent = localStorage.ownerLocation;
  document.querySelector('.wallImg').src = localStorage.ownerImageUrl;
}
