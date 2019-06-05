let loggedInUser = sessionStorage.getItem('id')

if (loggedInUser) {
  // make div/bar across visbile
  document.querySelector('#userLoggedIn').style.display = 'block'
  document.querySelector('#hello').innerHTML = `
  Hello ${sessionStorage.getItem('name')}!
  `
} else if (loggedInUser === '' || !loggedInUser) {
  // display log in link
  document.querySelector('#userLoggingIn').style.display = 'block'
  document.querySelector('#userLogIn').style.display = 'block'
}
