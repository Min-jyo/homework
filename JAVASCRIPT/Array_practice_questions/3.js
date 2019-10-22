// 3. 프로퍼티 정렬
// 요소의 프로퍼티(id, content, completed)를 문자열 인수로 전달하면 todos의 요소를 정렬하는
// 함수를 작성하라
// todos는 변경되지 않도록 하자

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const todosReplacement = todos.slice();
function sortBy(key) {
  return todosReplacement.sort(function (a, b) {
  return (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));
  });
}

console.log(sortBy('id'));
console.log(sortBy('content'));
console.log(sortBy('completed'));