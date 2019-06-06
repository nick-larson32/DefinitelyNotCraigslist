let userID = sessionStorage.getItem('id')
const { fetch } = window
let choice

const getCurrentUser = _ => {
  fetch(`/users/${userID}`)
    .then(r => r.json())
    .then(user => {
      document.querySelector('.profileInfo').innerHTML = ''

      document.querySelector('.profileInfo').innerHTML = `
      <label class="label label_color">Name</label>
        <p class="profile-text">${user.name}</p>
      <label class="label label_color">Password</label>
        <p class="profile-text">${user.password}</p>
      <label class="label label_color">Email</label>
          <p class="profile-text">${user.email}</p>
      <label class="label label_color">Date of Birth</label>
          <p class="profile-text">${user.DOB}</p>
      <label class="label label_color">Location</label>
          <p class="profile-text">${user.location.county}</p>
      <button id="editProfileBtn">Edit profile</button>
      <button id="logout">Logout</button>
      `
    })
    .catch(e => console.log(e))
}

document.addEventListener('click', e => {
  if (e.target.id === 'editProfileBtn') {
    e.preventDefault()
    document.querySelector('.editInfo').style.display = 'block'
  } else if (e.target.id === 'infoUpdate') {
    e.preventDefault()
    document.querySelector('#infoUpdate').style.display = 'none'
    document.querySelector('#updateUser').style.display = 'inline'
    updateData()
  } else if (e.target.id === 'updateUser') {
    e.preventDefault()
    putUser(choice)
  } 
})

const updateData = _ => {
  choice = document.querySelector('#change').value

  switch (choice) {
    case ('name'):
      document.querySelector('#textInputDiv').style.display = 'block'
      break
    case ('email'):
      document.querySelector('#textInputDiv').style.display = 'block'
      break
    case ('password'):
      document.querySelector('#passwordInputDiv').style.display = 'block'
      break
    case ('address'):
      document.querySelector('#textInputDiv').style.display = 'block'
      break
    case ('DOB'):
      document.querySelector('#dateInputDiv').style.display = 'block'
      break
    case ('gender'):
      document.querySelector('#textInputDiv').style.display = 'block'
      break
    case ('location'):
      document.querySelector('#newLocationDiv').style.display = 'block'
      break
    default:
      break
  }
  return choice
}

const putUser = choice => {
  let changingInfo
  if (document.querySelector('#newLocationDiv').style.display === 'block') {
    changingInfo = document.querySelector('#location').value
  } else if (document.querySelector('#textInputDiv').style.display === 'block') {
    changingInfo = document.querySelector('#newInfo').value
  } else if (document.querySelector('#dateInputDiv').style.display === 'block') {
    changingInfo = document.querySelector('#newDate').value
  } else if (document.querySelector('#passwordInputDiv').style.display === 'block') {
    changingInfo = document.querySelector('#newPassword').value
  }

  console.log(`choice: ${choice}`)
  console.log(`changingInfo: ${changingInfo}`)

  fetch(`/users/${userID}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      [choice]: changingInfo
    })
  })
    .then(_ => {
      // getCurrentUser()
      location.reload()
      console.log('this is working')
    })
    .catch(e => console.log(e))
}

getCurrentUser()