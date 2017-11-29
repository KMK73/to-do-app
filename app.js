function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  //event listener
  /*
  addEventListener is a method which takes two arguments: a type,
  and a listener (which is itself a function). The type we need here is submit,
  for when the form is submitted.
   The function is where we'll put the rest of our listener logic.
   */
  addToDoForm.addEventListener('submit', (event) => {
    //default is reloading the page
    event.preventDefault();

    //get text from input
    let title = newToDoText.value;

    //create new list item
    let newLi = document.createElement('li');

    //create new input
    let checkbox = document.createElement('input');

    // set input to checkbox
    checkbox.type = 'checkbox';

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // create a delete button
    let deleteBtn = document.createElement('button');

    //add html to button
    deleteBtn.type = 'button';
    // set the title of button
    deleteBtn.textContent = 'click me';
    deleteBtn.id = 'deleteBtn';

    //click event for delete button
    deleteBtn.addEventListener('click', (event) => {
      //default is reloading the page
      event.preventDefault();

      console.log('delete clicked');

      //remove li
      toDoList.removeChild(newLi);
    });

    // attach delete button
    newLi.appendChild(deleteBtn);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';
  });
}

function deleteListItem(){
  alert('delete clicked');
}

window.onload = function() {
  onReady();
}
