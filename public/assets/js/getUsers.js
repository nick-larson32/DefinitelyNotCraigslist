const { fetch } = window

document.addEventListener('click', e => {
  if (e.target.id === 'users') {
    users()
  }
})

const users = _ => {
  fetch('/users')
    .then(r => r.json())
    .then(users => users.map(user => {
      if (user.id === 1) {
        document.querySelector('.userDiv').innerHTML = ''
        let userDiv = document.createElement('div')
        userDiv.innerHTML = `
        <h1>${user.name}</h1>
        <h3>${user.address}</h3>
        `
        document.querySelector('.userDiv').append(userDiv)
      }
    }))
    .catch(e => console.log(e))
}