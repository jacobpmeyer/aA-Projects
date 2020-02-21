export const fetchTodos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/todos'
  })
);

export const createTodo = todo => (
  $.ajax({
    method: 'POST',
    url: '/api/todos',
    data: todo
  })
);

// export const fetchTodos = () => (
//   fetch('/api/todos')
//     .then((response) => {
//       return response.json();
//     })
// )

