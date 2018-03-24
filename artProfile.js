if (localStorage.length) {
  var fullName = localStorage.firstName + ' ' + localStorage.lastName;
  document.querySelector('.name').textContent = fullName;
  document.querySelector('.phoneNumber').textContent = localStorage.phoneNumber;
  document.querySelector('.email').textContent = localStorage.email;
  document.querySelector('.location').textContent = localStorage.location;
  document.querySelector('#profile').src = localStorage.imageUrl;
  document.querySelector('.portfolio').href = localStorage.portfolio;
  document.querySelector('.style').textContent = localStorage.style;
}
