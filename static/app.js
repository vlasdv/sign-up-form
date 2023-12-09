const inputFields = document.querySelectorAll('input');

console.log(inputFields);

for (let input of inputFields) {
  input.addEventListener('focus', (event) => {
    const parentDiv = event.target.parentElement;
    parentDiv.style.border = '1px solid #111';    
    parentDiv.style.backgroundColor = '#f9f9f9';
    
  });
}

for (let input of inputFields) {
  input.addEventListener('blur', (event) => {
    const parentDiv = event.target.parentElement;
    parentDiv.style.border = '1px solid #aaa';
    parentDiv.style.backgroundColor = '';
  });
}