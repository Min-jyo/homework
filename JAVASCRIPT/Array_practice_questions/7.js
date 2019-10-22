let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedAll() {
  for (let i = 0; i < todos.length; i++) {
    Object.assign(todos[i], { completed: true });
  }
}

toggleCompletedAll();

console.log(todos);
