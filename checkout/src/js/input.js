document.querySelectorAll(".input-wrapper input").forEach(input => {
  input.addEventListener("focus", () => {
    input.parentElement.classList.add("active");
  });
  input.addEventListener("blur", () => {
    if (!input.value) {
      input.parentElement.classList.remove("active");
    }
  });
});


document.querySelectorAll(".input-wrapper select").forEach(select => {
  if (select.value) {
    select.parentElement.classList.add("active");
  }

  select.addEventListener("change", () => {
    if (select.value) {
      select.parentElement.classList.add("active");
    } else {
      select.parentElement.classList.remove("active");
    }
  });

  select.addEventListener("focus", () => {
    select.parentElement.classList.add("active");
  });

  select.addEventListener("blur", () => {
    if (!select.value) {
      select.parentElement.classList.remove("active");
    }
  });
});

// Validation logic
const inputs = document.querySelectorAll('.form-group input');

// Loop through each input
inputs.forEach(input => {
  const errorText = input.closest('.form-group').querySelector('.error-text');

  // Listen for input changes
  input.addEventListener('input', () => {
    if (input.validity.valid) {
      // this will remove error class and hide error message
      input.classList.remove('error');
      if (errorText) errorText.style.display = 'none';
    } else {
      if (errorText) errorText.style.display = 'block';
      input.classList.add('error');
    }
  });
});

