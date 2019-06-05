document.querySelector('#logout').addEventListener('click', e => {
  sessionStorage.setItem('id', '')
  sessionStorage.setItem('address', '')
  sessionStorage.setItem('name', '')
})