const { fetch } = window
let choice
// this needs to change to be reflective of the current user logged in
// for now, hardcoded as 1 for demo purposes
let userId = 1

document.addEventListener('click', e => {
 // e.preventDefault()
  if (e.target.id === 'infoUpdate') {
    document.querySelector('#infoUpdate').style.display = 'none'
    document.querySelector('#updateUser').style.display = 'inline'
    updateData()
  } else if (e.target.id === 'updateUser') {
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

  fetch(`/users/11`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      choice: changingInfo
    })
  })
    .then(_ => console.log('okay'))
    .catch(e => console.log(e))
}
