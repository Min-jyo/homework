let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function countCompletedTodos() {
  return todos.reduce((pre, cur) => (cur.completed === true ? ++pre : pre), 0);
}

console.log(countCompletedTodos());
