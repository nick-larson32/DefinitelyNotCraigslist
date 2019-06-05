document.addEventListener('click', e => {
  if (e.target.id === 'logout') {
    sessionStorage.setItem('id', '')
    sessionStorage.setItem('address', '')
    sessionStorage.setItem('name', '')
    location.reload()
  }
})
