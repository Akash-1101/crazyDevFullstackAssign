function showName() {
    var nameInput = document.getElementById('name');
    var displayName = document.getElementById('dName');
    displayName.textContent = nameInput.value;
  }
  
  function showGender() {
    var genderSelect = document.getElementById('gender');
    var displayGender = document.getElementById('dGender');
    displayGender.textContent = genderSelect.options[genderSelect.selectedIndex].text;
  }
  
  function showEmail() {
    var emailInput = document.getElementById('email');
    var displayEmail = document.getElementById('dEmail');
    displayEmail.textContent = emailInput.value;
  }
  
  function showMobile() {
    var mobileInput = document.getElementById('mobile');
    var displayMobile = document.getElementById('dMobile');
    displayMobile.textContent = mobileInput.value;
  }
  
  function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('gender').selectedIndex = 0;
    document.getElementById('email').value = '';
    document.getElementById('mobile').value = '';
  }
  
  function resetDisplay() {
    document.getElementById('dName').textContent = 'NAME';
    document.getElementById('dGender').textContent = 'GENDER';
    document.getElementById('dEmail').textContent = 'EMAIL';
    document.getElementById('dMobile').textContent = 'MOBILE';
  }
  