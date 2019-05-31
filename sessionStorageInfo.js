firebase.initializeApp(config)

let db = firebase.firestore()

document.querySelector('#add-user').addEventListener('click', e => {
  e.preventDefault()

  let name = document.querySelector('#name-input').value
  let email = document.querySelector('#email-input').value
  let age = document.querySelector('#age-input').value
  let comment = document.querySelector('#comment-input').value

  localStorage.setItem('name', name)
  localStorage.setItem('email', email)
  localStorage.setItem('age', age)
  localStorage.setItem('comment', comment)

  setUser()

  document.querySelector('#name-input').value = ''
  document.querySelector('#email-input').value = ''
  document.querySelector('#age-input').value = ''
  document.querySelector('#comment-input').value = ''
})

const setUser = _ => {

  document.querySelector('#name-display').textContent = localStorage.getItem('name')
  document.querySelector('#email-display').textContent = localStorage.getItem('email')
  document.querySelector('#age-display').textContent = localStorage.getItem('age')
  document.querySelector('#comment-display').textContent = localStorage.getItem('comment')
}

setUser()