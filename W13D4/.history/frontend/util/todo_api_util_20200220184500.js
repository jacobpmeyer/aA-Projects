// export const fetchTodos = () => (
//   $.ajax({
//     method: 'GET',
//     url: '/api/todos'
//   })
// )

export const fetchTodos = () => (
  fetch('/api/todos/1')
    .then((response) => {
      debugger
      return response.json();
    })
)

window.fetchTodos = fetchTodos;