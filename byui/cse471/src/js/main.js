function dismiss(alertBoxBtn) {
  const alertBox = alertBoxBtn.parentElement.parentElement;
  
  alertBox.style.display = 'none';
}

function toggle(hasLabel, dropdownBtn, elementID) {
  const elementToToggle = document.getElementById(elementID);

  if (elementToToggle.style.display != 'none') {
    elementToToggle.style.display = 'none';
    dropdownBtn.innerHTML = `${hasLabel ? 'Show ' : ''}<i class="fas fa-chevron-down"></i>`;
  }
  else {
    elementToToggle.style.display = '';
    dropdownBtn.innerHTML = `${hasLabel ? 'Hide ' : ''}<i class="fas fa-chevron-up"></i>`;
  }
}