// export const fetchTodos = () => (
//   $.ajax({
//     method: 'GET',
//     url: '/api/todos'
//   })
// )

export const fetchTodos = () => (
  fetch('/api/todos')
    .then((response) => {
      return response.json();
    }) 
    .then((myJson) => {
      debugger
      console.log(myJson);
    })
)

