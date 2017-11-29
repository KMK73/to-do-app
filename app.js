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

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';
  });
}

window.onload = function() {
  onReady();
}
