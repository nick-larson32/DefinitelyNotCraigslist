let choice

let userId = 3

document.addEventListener('click', e => {
    e.preventDefault()
    if (e.target.id === 'itemEdit') {
      document.querySelector('#infoUpdate').style.display = 'none'
      document.querySelector('#updateUser').style.display = 'block'
      updateUserItem()
    } else if (e.target.id === 'updateUser') {
      putUser(choice)
    }
  })

  const updateUserItem = _ => {
    choice = document.querySelector('#change').value
  
    switch (choice) {
      case ('itemName'):
        document.querySelector('#itemDiv').style.display = 'block'
        break
      case ('price'):
        document.querySelector('#priceDiv').style.display = 'block'
        break
      case ('category'):
        document.querySelector('#categoryDiv').style.display = 'block'
        break
      case ('condition'):
        document.querySelector('#conditionDiv').style.display = 'block'
        break
      case ('description'):
        document.querySelector('#descriptionDiv').style.display = 'block'
        break
      default:
        break
    }
    return choice
}

// const putUserItem = choice => {
//     let changingInfo
//     if (document.querySelector('#itemDiv').style.display === 'block') {
//       changingInfo = document.querySelector('#itemUpdate').value
//     } else if (document.querySelector('#priceDiv').style.display === 'block') {
//       changingInfo = document.querySelector('#priceUpdate').value
//     } else if (document.querySelector('#categoryDiv').style.display === 'block') {
//       changingInfo = document.querySelector('#categoryUpdate').value
//     } else if (document.querySelector('#conditionDiv').style.display === 'block') {
//       changingInfo = document.querySelector('#conditionUpdate').value
//     }
// }

// console.log(`choice: ${choice}`)
// console.log(`changingInfo: ${changingInfo}`)

// fetch(`/items/8`, {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     choice: changingInfo
//   })
// })
//   .then(_ => console.log('okay'))
//   .catch(e => console.log(e))
// }

// Toggle Modal for update

let getModalUpdate = document.querySelector('.itemEdit')
  let modalUp = document.querySelector('#modalUpdate')
  let closeUpdate = document.getElementsByClassName('modal-close')[0]

  document.addEventListener('click', e =>{
    if(e.target.className === itemEdit){
        console.log('ping')
    }
  })
  closeUpdate.addEventListener('click', e =>{
    modalUp.style.display = 'none'
  })

  window.addEventListener('click', e =>{
    if(e.target.className === 'modal-background'){
      modalUp.style.display = 'none'
    }
  })