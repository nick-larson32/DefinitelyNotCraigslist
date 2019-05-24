
const getUsersItems = _ => {
    fetch('/items')
      .then(r => r.json())
      .then(donors => {
        console.log('hello')
        // document.querySelector('#donorView').innerHTML = ''
        // donors.forEach(({ name, price, condition, description }) => {
        //   let donorDiv = document.createElement('div')
        //   donorDiv.innerHTML = `
        //     <h3>#${id} ${name}</h3>
        //     <h5>${price}</h5>
        //     <h6>${description}</h6>
        //     <button id="deleteUser" data-uid="${id}">delete user</button>
        //   `
        //   document.querySelector('#donorView').append(donorDiv)
        // })
      })
      .catch(e => console.error(e))
  }
  document.querySelector('#addDonation').addEventListener('click', e => {
    e.preventDefault()
    fetch('/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: document.querySelector('#name').value,
        price: document.querySelector('#price').value,
        condition: document.querySelector('#condition').value,
        description: document.querySelector('#description').value
      })
    })
      .then(_ => {
        alert('item added.')
        getUsers()
      })
      .catch(e => console.error(e))
  })
  getUsersItems()
