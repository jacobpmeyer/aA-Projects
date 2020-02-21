export const fetchTodos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/todos'
  })
)


// fetch('/api/todos')
//   .then((response) => {
//     return response.json();
//   })
//   .then((myJson) => {
//     console.log(myJson);
//   });
