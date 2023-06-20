

//taking to variable
const form = document.getElementById('iits-formSubmit');
const input = document.getElementById('iits-inp');

// addEvenListener
form.addEventListener('submit', function(w) {
  w.preventDefault();

  const inputed_number = parseInt(input.value);

  // Validity of input with alert massage
  if (isNaN(inputed_number) || inputed_number < 0 || inputed_number > 100) {
    alert('Please enter a valid number between 0 and 100.');
    return;
  }

  //taking an empty string for input values
  input.value = '';

  // condition for grades
  let grade;
  if (inputed_number >= 81 && inputed_number <= 100) {
    grade = 'a';
  } else if (inputed_number >= 71 && inputed_number <= 80) {
    grade = 'bp';
  } else if (inputed_number >= 61 && inputed_number <= 70) {
    grade = 'b';
  } else if (inputed_number >= 51 && inputed_number <= 60) {
    grade = 'bm';
  } else if (inputed_number >= 40 && inputed_number <= 50) {
    grade = 'c';
  } else {
    grade = 'f';
  }

  // increment of number of grades
  const count_of_grades = document.getElementById('iits-' + grade + '_count');
  count_of_grades.textContent = parseInt(count_of_grades.textContent) + 1;
});
