const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function render() {
  let html = '';

  todos.forEach(todo => {
    html += `<li id="${todo.id}">
  <label><input type="checkbox" ${todo.completed === true ? "checked" : ""}>${todo.content}</label>
  </li>`
  });

  return html;
}

console.log(render());