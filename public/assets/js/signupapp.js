const { fetch } = window
let newUser

document.querySelector('#submitButton').addEventListener('click', e => {
  e.preventDefault()
  newUser =
    {
      name: document.querySelector('#signupName').value,
      email: document.querySelector('#signupEmail').value,
      password: document.querySelector('#signupPassword').value,
      address: document.querySelector('#signupAddress').value,
      DOB: `${document.querySelector('#selectYear').value}-${document.querySelector('#selectMonth').value}-${document.querySelector('#selectDay').value}`,
      gender: document.querySelector('#selectGender').value,
      locationId: document.querySelector('#selectLocation').value
    }
  fetch('/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
    .then(newUser => {
      sessionStorage.setItem('name', document.querySelector('#signupName').value)
      sessionStorage.setItem('address', document.querySelector('#signupAddress').value)

      document.querySelector('#signupName').value = ''
      document.querySelector('#signupEmail').value = ''
      document.querySelector('#signupPassword').value = ''
      document.querySelector('#signupAddress').value = ''
      fetch('/users')
        .then(r => r.json())
        .then(users => {
          users.map(user => {
            if (user.name === sessionStorage.getItem('name')) {
              sessionStorage.setItem('id', user.id)
            }
            window.location.href = '/browse.html'
          })
        })
        .catch(e => console.log(e))
    })
    .catch(e => console.log(e))
})
