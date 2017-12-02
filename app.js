function onReady() {
  let id = 0;
  let todos = [];

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewTodo() {
    // if empty text
    if(!newToDoText.value){return; }

    todos.push({
      title: newToDoText.value,
      complete: false,
      id: id,
    });
    //increment id
    id++;
  }

  function renderTheUI(){
      const toDoList = document.getElementById('toDoList');

      toDoList.textContent = '';

      todos.forEach(function(toDo){
          const newLi = document.createElement('li');

          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';

          //const title = document.createElement('span');
          newLi.textContent = toDo.title;

          //create delete button
          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = "Delete";

          deleteBtn.addEventListener('click', event => {
              deleteToDo(toDo.id); //pass that todo id
              renderTheUI(); //update the UI
          });

          //update ui
          toDoList.appendChild(newLi);
          newLi.appendChild(checkbox);
          newLi.appendChild(deleteBtn);
      });
  }

  function deleteToDo(id){
    todos = todos.filter(item => item.id !== id);
  }

  // add event listener to form
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewTodo();
    //clear text for user
    newToDoText.value = '';

    renderTheUI();
  });

  renderTheUI();
}



window.onload = function() {
  onReady();
}
