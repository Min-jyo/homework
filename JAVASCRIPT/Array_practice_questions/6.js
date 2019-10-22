let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedById(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
          todos[i].completed === false ? Object.assign(todos[i],{completed: true}) : Object.assign(todos[i],{completed: false});
    }
  }
}

toggleCompletedById(2);

console.log(todos);
