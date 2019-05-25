const config = {
  apiKey: 'AIzaSyCCOFVr3gl2dMgq-Jk6JuIPUswsAZwKGfU',
  authDomain: 'stuffandmorethings-82665.firebaseapp.com',
  databaseURL: 'https://stuffandmorethings-82665.firebaseio.com',
  projectId: 'stuffandmorethings-82665',
  storageBucket: 'stuffandmorethings-82665.appspot.com',
  messagingSenderId: '995213301250'
}

firebase.initializeApp(config)

let db = firebase.firestore()

document.querySelector('#add-user').addEventListener('click', e => {
  e.preventDefault()

  name = document.querySelector('#name-input').value
  email = document.querySelector('#email-input').value
  age = document.querySelector('#age-input').value
  comment = document.querySelector('#comment-input').value

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