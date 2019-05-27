const {fetch} = window
  
  document.querySelector('#addDonation').addEventListener('click', e => {
    e.preventDefault()
    fetch('/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        itemName: document.querySelector('#name').value,
        quantity: 1,
        available: true,
        bought: false,
        price: document.querySelector('#price').value,
        categories: document.querySelector('#categories').value,
        condition: document.querySelector('#condition').value,
        description: document.querySelector('#description').value,
        usersId: 1,
        category: 1
      })
    })
      .then(_ => {
        console.log('successful')
      })
      .catch(e => console.log(e))
  })