const { fetch } = window

// document.getElementById('getAllItems').addEventListener('click', e => {
//   getAllItems()
// })

const getAllItems = _ => {
  fetch('/items')
    .then(items => items.json())
    .then(items => {
      document.querySelector('#items').innerHTML = ''
      items.forEach(({ itemName, quantity, available, bought, price, condition, description, user, category }) => {
        let itemDiv = document.createElement('div')
        if (available && !bought && quantity > 0) {
          itemDiv.innerHTML = `
          <h1>Item Name: ${itemName}</h1>
          <h3>Quantity: ${quantity}</h3>
          <h4>Available (donator):${available}</h4>
          <h4>Bought (buyer):${bought}</h4>
          <h3>Price: $${price}</h3>
          <h4>Condition: ${condition}</h4>
          <h5>Description: ${description}</h5>
          <h5>User it belongs to: ${user.name}</h5>
          <h5>Category it belongs to: ${category.category}</h5>
          <h5>Location: ${user.location.county}</h5>
          `
          document.querySelector('#items').append(itemDiv)
        }
      })
    })
    .catch(e => console.error(e))
}
