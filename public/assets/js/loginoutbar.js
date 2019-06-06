let loggedInUser = sessionStorage.getItem('id')

if (loggedInUser) {
  // make div/bar across visible
  document.querySelector('#userLoggedIn').style.display = 'inline-block'
  document.querySelector('#hello').innerHTML = `Hello ${sessionStorage.getItem('name')}!`
  document.querySelector('#profileLink').style.display = 'inline-block'
  document.querySelector('#logout').style.display = 'inline-block'
  document.querySelector('#myListings').style.display = 'inline-block'
} else if (loggedInUser === '' || !loggedInUser) {
  // display log in link
  document.querySelector('#userLoggingIn').style.display = 'inline-block'
  document.querySelector('#logout').style.display = 'none'
}

document.addEventListener('click', e => {
  if (e.target.id === 'logout') {
    sessionStorage.setItem('id', '')
    sessionStorage.setItem('address', '')
    sessionStorage.setItem('name', '')
    window.location.href = 'browse.html'
  }
})