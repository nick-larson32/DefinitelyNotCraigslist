document.addEventListener('click', e => {
  let id = e.target.dataset.id
  getCategory(id)
})

const getCategory = id => {
  fetch(`/category/${id}`)
    .then(items => items.json())
    .then(({ items }) => {
      items.forEach(item => {
        document.querySelector('#items').innerHTML = ''
        let itemDiv = document.createElement('div')
        if (item.available && !item.bought && item.quantity > 0) {
          itemDiv.innerHTML = `
            <h1>Item Name: ${item.itemName}</h1>
            <h3>Quantity: ${item.quantity}</h3>
            <h4>Available (donator):${item.available}</h4>
            <h4>Bought (buyer):${item.bought}</h4>
            <h3>Price: $${item.price}</h3>
            <h4>Condition: ${item.condition}</h4>
            <h5>Description: ${item.description}</h5>
            <h5>User it belongs to: ${item.user.name}</h5>
            <h5>Location: ${item.user.location.county}</h5>
            `
          document.querySelector('#items').append(itemDiv)
        }
      })
    })
    .catch(e => console.error(e))
}
