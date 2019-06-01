document.querySelector('#submit').addEventListener('click', e => {
  let emailInput = document.querySelector('#loginEmail').value
  let passInput = document.querySelector('#loginPassword').value
  fetch('/users')
    .then(r => r.json())
    .then(users => {
      users.map(user => {
        if (user.email === emailInput && user.password === passInput) {
          sessionStorage.setItem('id', user.id)
          window.location.href = 'browse.html'
        } else {
          console.log('LOL no.')
        }
      })
      document.querySelector('#loginEmail').value = ''
      document.querySelector('#loginPassword').value = ''
        //   console.log(users)
    })
    .catch(e => console.log(e))
})

// cfrankiewicz4@nbcnews.com
// Tkm2XxzPSl