let todos = [];
let navId = 'all';

// DOMs
const $todos = document.querySelector('.todos');
const $input = document.querySelector('.input-todo');
const $checkbox = document.querySelector('.complete-all > .checkbox');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
const $nav = document.querySelector('.nav');
const $clearCompleted = document.querySelector('.clear-completed > .btn');

const render = () => {
  const _todos = todos.filter(({
    completed
  }) => (navId === 'all' ? true : navId === 'active' ? !completed : completed));

  let html = '';

  _todos.forEach(({
    id,
    content,
    completed
  }) => {
    html += `
      <li id="${id}" class="todo-item">
        <input class="checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
        <label for="ck-${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`;
  });

  $todos.innerHTML = html;
  $completedTodos.textContent = todos.filter(todo => todo.completed).length;
  $activeTodos.textContent = todos.filter(todo => !todo.completed).length;
};

const generateid = () => (todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1);

const getTodos = () => {
  axios.get('/todos')
    .then(res => todos = res.data)
    .then(render)
    .catch(err => console.error(err));
};

const addTodo = content => {
  axios.post('/todos', {
      id: generateid(),
      content,
      completed: false
    })
    .then(res => todos = res.data)
    .then(render)
    .catch(err => console.error(err));
};

const toggleCompleted = id => {
  const completed = !todos.find(todo => todo.id === +id).completed;

  axios.patch(`/todos/${id}`, {
      completed
    })
    .then(res => todos = res.data)
    .then(render)
    .catch(err => console.error(err));
};

const removeTodo = id => {
  axios.delete(`/todos/${id}`)
    .then(res => todos = res.data)
    .then(render)
    .catch(err => console.error(err));
};

const changeNav = id => {
  [...$nav.children].forEach($navItem => {
    $navItem.classList.toggle('active', $navItem.id === id);
  });

  navId = id;
  console.log('[navId]', navId);
};

const toggleCompletedAll = completed => {
  axios.patch('/todos', {
      completed
    })
    .then(res => todos = res.data)
    .then(render)
    .catch(err => console.error(err));
};

const removeCompleted = () => {
  axios.delete('/todos/completed')
    .then(res => todos = res.data)
    .then(render)
    .catch(err => console.error(err));
};

window.onload = getTodos;

$input.onkeyup = ({
  target,
  keyCode
}) => {
  const content = target.value.trim();

  if (!content || keyCode !== 13) return;

  target.value = '';
  addTodo(content);
};

$todos.onchange = ({
  target
}) => {
  toggleCompleted(target.parentNode.id);
};

$todos.onclick = ({
  target
}) => {
  if (!target.classList.contains('remove-todo')) return;
  removeTodo(target.parentNode.id);
};

$nav.onclick = ({
  target
}) => {
  if (target.classList.contains('nav')) return;
  changeNav(target.id);
  render();
};

$checkbox.onchange = ({
  target
}) => {
  toggleCompletedAll(target.checked);
};

$clearCompleted.onclick = removeCompleted;
