const {fetch} = window

// giving default categoryId and userId for demo purposes

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
        categoryId: 3,
        // categoryId: parseInt(document.querySelector('#category').value)
        condition: document.querySelector('#condition').value,
        description: document.querySelector('#description').value,
        userId: 3
      })
    })
    // need to call repopulate userItems
    // getUserItems()
      .then(_ => {
        console.log('successful')
      })
      .catch(e => console.log(e))
  })