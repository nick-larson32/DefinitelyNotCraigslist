document.querySelector('#submit').addEventListener('click', e => {
  let emailInput = document.querySelector('#loginEmail').value
  let passInput = document.querySelector('#loginPassword').value
  fetch('/users')
    .then(r => r.json())
    .then(users => {
      users.map(user => {
        if (user.email === emailInput && user.password === passInput) {
          sessionStorage.setItem('id', user.id)
          sessionStorage.setItem('address', user.address)
          sessionStorage.setItem('name', user.name)
          window.location.href = 'browse.html'
        } else {
          console.log('LOL no.')

        }
      })
      if (!sessionStorage.getItem('id')) {
        document.querySelector('#error').innerHTML = ''
        let errorDiv = document.createElement('div')
        errorDiv.innerHTML = `
          <p style="color: red">Incorrect Username or Password!<p>
          `
        document.querySelector('#error').append(errorDiv)
      }
      document.querySelector('#loginEmail').value = ''
      document.querySelector('#loginPassword').value = ''
        //   console.log(users)
    })
    .catch(e => console.log(e))
})
document.querySelector('#signup').addEventListener('click', e => {
  window.load('./signup.html')
})

// cfrankiewicz4@nbcnews.com
// Tkm2XxzPSl