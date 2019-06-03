let loggedInUser = sessionStorage.getItem('id')


if (loggedInUser) {
  // make div/bar across visbile
  document.querySelector('#userLoggedIn').style.display = 'block'
  // hello name dynamic
  document.querySelector('#hello').innerHTML = `
  Hello ${sessionStorage.getItem('name')}!
  `
  // logout
    // clear session storage
    // take to browse page
} else {
  // make the div go hidden
}
