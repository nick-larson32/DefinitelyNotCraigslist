// const { fetch} = window

// using a placement user for demo purposes
// will need to dynamically integrate user
let currUser = sessionStorage.getItem('id')
const getUserItems = _ => {
  fetch('/items')
    .then(items => items.json())
    .then(items => {
      document.querySelector('#userItemView').innerHTML = ''
      const userItem = items.filter(data =>
        data.userId === currUser)
      console.log(userItem)
      if (userItem.length > 0) {
        userItem.forEach(({ id, itemName, quantity, available, bought, price, condition, description, user, category }) => {
          let userItemDiv = document.createElement('div')
          userItemDiv.innerHTML = `
             <div class="card">
             <header class="card-harder">
\                     <p class="card-header-title"> ${itemName}</p>
             </header>
             <div class="card-content">
                <figure class="image is-128x128">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
                     <h4>Quantity: ${quantity}</h4>
                     <h4>Available:${available}</h4>
                     <h4>Bought (buyer):${bought}</h4>
                     <h4>Price: $${price}</h4>
                     <h4>Condition: ${condition}</h4>
                     <h4>Description: ${description}</h4>
                     <h4>User it belongs to: ${user.name}</h4>
                     <h4>Location: ${user.location.county}</h4>
             </div>
             <footer class="card-footer">
                 <a class="card-footer-item itemEdit">Edit</a>
                 <a class="card-footer-item" data-id="${id}">Delete</a>
                 <a class="card-footer-item soldButton">Mark Sold</a>
             </footer>
         </div>
                `
          document.querySelector('#userItemView').append(userItemDiv)
        })
      } else {
        console.log('add listing')
      }
    })
    .catch(e => console.error(e))
}
getUserItems()