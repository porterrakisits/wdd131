const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add event listener to the Add Chapter button
button.addEventListener('click', function() {
    
    if (input.value.trim() === "") {
        input.focus();  
        return; 
    }

    // Create a new list item (li) and a delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌'; 

    
    li.textContent = input.value;

    
    li.append(deleteButton);

    
    list.appendChild(li);

    
    deleteButton.addEventListener('click', function() {
        list.removeChild(li);  
    });

    
    input.value = "";

    
    input.focus();
});



buttonElement.addEventListener('keyup', function() {
    // Code to execute when a key is released
  });


  document.addEventListener("DOMContentLoaded", function() {
    // Code to execute when the DOM is parsed
  });