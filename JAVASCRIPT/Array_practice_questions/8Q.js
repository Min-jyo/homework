let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function countCompletedTodos() {
  let count = 0;
  todos.forEach(item => (item.completed === true) ? ++count : count);
  return count;
}

console.log(countCompletedTodos()); // 1