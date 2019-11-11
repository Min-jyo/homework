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

const ajax = (() => {
  const req = (method, url, payload) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);
      xhr.setRequestHeader('content-type', 'application/json');
      xhr.send(JSON.stringify(payload));

      xhr.onload = () => {
        if (xhr.status === 200 || xhr.status === 201) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject(new Error(xhr.status));
        }
      };
    });
  };

  return {
    get(url) {
      return req('GET', url);
    },
    post(url, payload) {
      return req('POST', url, payload);
    },
    patch(url, payload) {
      return req('PATCH', url, payload);
    },
    delete(url) {
      return req('DELETE', url);
    }
  };
})();

const generateid = () => (todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1);

const getTodos = () => {
  ajax.get('/todos')
    .then(_todos => todos = _todos)
    .then(render)
    .catch(err => console.error(err));
};

const addTodo = content => {
  ajax.post('/todos', {
      id: generateid(),
      content,
      completed: false
    })
    .then(_todos => todos = _todos)
    .then(render)
    .catch(err => console.error(err));
};

const toggleCompleted = id => {
  const completed = !todos.find(todo => todo.id === +id).completed;
  ajax.patch(`/todos/${id}`, {
      completed
    })
    .then(_todos => todos = _todos)
    .then(render)
    .catch(err => console.error(err));
};

const removeTodo = id => {
  ajax.delete(`/todos/${id}`)
    .then(_todos => todos = _todos)
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
  ajax.patch('/todos', {
      completed
    })
    .then(_todos => todos = _todos)
    .then(render)
    .catch(err => console.error(err));
};

const removeCompleted = () => {
  ajax.delete('/todos/completed')
    .then(_todos => todos = _todos)
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
