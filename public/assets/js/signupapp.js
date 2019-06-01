const { fetch, alert } = window
let newUser
let totalNum
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
    .then(_ => {
      localStorage.setItem('CraiglistLogin',JSON.stringify( {name:newUser.name,logedin:true,email:newUser.email,password:newUser.password}))
      document.querySelector('#signupName').value = ''
      document.querySelector('#signupEmail').value = ''
      document.querySelector('#signupPassword').value = ''
      document.querySelector('#signupAddress').value = ''
      window.location.href='/browse.html'

    })
    .catch(e => console.log(e))
})

