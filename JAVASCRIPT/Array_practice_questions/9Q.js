let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getMaxId() {
  todos = todos.map(item => item.id);
  return Math.max(...todos);
}

console.log(getMaxId()); // 3