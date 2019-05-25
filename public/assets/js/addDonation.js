const {fetch} = window
  
  document.querySelector('#addDonation').addEventListener('click', e => {
    e.preventDefault()
    let item = {   name: document.querySelector('#name').value,
    categories: document.querySelector('#categories').value,
    price: document.querySelector('#price').value,
    condition: document.querySelector('#condition').value}
    console.log(item)
    fetch('/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item
        
        // name: document.querySelector('#name').value,
        // categories: document.querySelector('#categories').value,
        // price: document.querySelector('#price').value,
        // condition: document.querySelector('#condition').value
        // description: document.querySelector('#description').value
      )
    })
      .then(_ => {
        alert('item added.')
        console.log('successfull')
      })
      .catch(e => console.log('error'))
  })
console.log('ping')