const { fetch } = window

document.querySelector('#submitUser').addEventListener('click', e => {
  e.preventDefault()
  addUser()
})

const addUser = _ => {
  fetch('/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: document.querySelector('#name').value,
      email: document.querySelector('#email').value,
      password: document.querySelector('#password').value,
      address: document.querySelector('#address').value,
      DOB: document.querySelector('#DOB').value,
      gender: document.querySelector('#gender').value,
      locationId: document.querySelector('#location').value
    })
  })
    .then(_ => console.log('okay'))
    .catch(e => console.log(e))
}
