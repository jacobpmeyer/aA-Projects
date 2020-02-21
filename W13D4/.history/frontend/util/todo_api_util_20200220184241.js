// export const fetchTodos = () => (
//   $.ajax({
//     method: 'GET',
//     url: '/api/todos'
//   })
// )

export const fetchTodos = () => (
  fetch('/api/todos')
    .then((response) => {
      debugger
      return response.json();
    })
)

