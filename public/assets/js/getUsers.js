const { fetch } = window

document.addEventListener('click', e => {
  if (e.target.id === 'users') {
    users()
  } else if (e.target.id === 'getUserItems') {
    // console.log('this works')
    users()
  }
})

// this needs to change to be reflective of the current user logged in
// for now, hardcoded as 1 for demo purposes
let userId = 1

const users = _ => {
  fetch(`/users/${userId}`)
    .then(r => r.json())
    .then(user => {
      document.querySelector('.user').innerHTML = ''
      let userDiv = document.createElement('div')
      userDiv.innerHTML = `
        <h1>${user.name}</h1>
        <h3>${user.address}</h3>
        `
      document.querySelector('.user').append(userDiv)

      document.querySelector('.userItems').innerHTML = ''
      let itemLocation = user.location.county
      user.items.forEach(({ itemName, quantity, available, bought, price, condition, description, category }) => {
        let itemDiv = document.createElement('div')
        itemDiv.innerHTML = `
          <h1>Item Name: ${itemName}</h1>
          <h3>Quantity: ${quantity}</h3>
          <h4>Available (donator):${available}</h4>
          <h4>Bought (buyer):${bought}</h4>
          <h3>Price: $${price}</h3>
          <h4>Condition: ${condition}</h4>
          <h5>Description: ${description}</h5>
          <h5>Category it belongs to: ${category.category}</h5>
          <h5>Location: ${itemLocation}</h5>
          `
        document.querySelector('.userItems').append(itemDiv)
      })
    })
    .catch(e => console.log(e))
}