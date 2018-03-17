if (localStorage.length) {
  var fullName = localStorage.firstName + ' ' + localStorage.lastName;
  document.querySelector('.name').textContent = fullName;
  document.querySelector('.phoneNumber').textContent = localStorage.phoneNumber;
  document.querySelectorAll('.email')[0].textContent = localStorage.email;
  document.querySelectorAll('.email')[1].textContent = localStorage.email;

  document.querySelector('.location').textContent = localStorage.preferLocationlocation;
}
