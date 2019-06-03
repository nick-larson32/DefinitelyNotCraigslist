let choice

let itemId = 15

document.addEventListener('click', e => {
    //e.preventDefault()
    if (e.target.id === 'infoUpdate') {
      document.querySelector('#infoUpdate').style.display = 'none'
      document.querySelector('#updateItem').style.display = 'block'
      updateUserItem()
    } else if (e.target.id === 'updateItem') {
      putUserItem(choice)
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
      case ('quantity'):
        document.querySelector('#priceDiv').style.display = 'block'
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

const putUserItem = choice => {
    let changingInfo
    if (document.querySelector('#itemDiv').style.display === 'block') {
      changingInfo = document.querySelector('#itemUpdate').value
    } else if (document.querySelector('#priceDiv').style.display === 'block') {
      changingInfo = document.querySelector('#priceUpdate').value
    } else if (document.querySelector('#categoryDiv').style.display === 'block') {
      changingInfo = document.querySelector('#categoryUpdate').value
    } else if (document.querySelector('#conditionDiv').style.display === 'block') {
      changingInfo = document.querySelector('#conditionUpdate').value
    }


console.log(`choice: ${choice}`)
console.log(`changingInfo: ${changingInfo}`)

  fetch(`/items/${itemId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
      },
    body: JSON.stringify({
      choice: changingInfo
      })
    })
    .then(_ => {
      getUserItems()
      modalUp.style.display = 'none'
      console.log('success!')
    })
    .catch(e => console.log(e))
    }


// document.addEventListener('click', e =>{
//   if(e.target.className === 'card-footer-item soldButton' && e.target.value === true){
//     console.log('true!')
//   }
// })
// Toggle Modal for update

  let modalUp = document.querySelector('#modalUpdate')
  let closeUpdate = document.getElementsByClassName('modal-close')[0]

  document.addEventListener('click', e =>{
      if(e.target.className === 'card-footer-item itemEdit'){
          modalUp.style.display = 'block'
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