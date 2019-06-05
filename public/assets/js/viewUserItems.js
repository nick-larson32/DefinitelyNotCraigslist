// const { fetch } = window

// using a placement user for demo purposes
// will need to dynamically integrate user
let id = sessionStorage.getItem('id')
  // sessionStorage.getItem('id')
const getUserItems = _ => {
  fetch(`users/${id}`)
    .then(r => r.json())
    .then(user => {
      user.items.forEach(({ id, itemName, category, condition, price, quantity, bought, available }) => {
        let userItemDiv = document.createElement('div')
        userItemDiv.innerHTML = `
               <div class="card">
               <header class="card-harder">
                      <p class="card-header-title"> ${itemName}</p>
               </header>
               <div class="card-content">
               <div class="media">
               <div class="media-left">
                  <figure class="image is-128x128">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
               </div>
               <div class="media-content">
               </div>
              </div>
              <div class="content">
                  <p data-itemid=${id}>Quantity: ${quantity}</p>
                  <p data-itemid=${id}>Available:${available}</p>
                  <p data-itemid=${id}>Price: $${price}</p>
                  <p data-itemid=${id}>Condition: ${condition}</p>
                  <p data-itemid=${id}>Category: ${category.category}</p>
                  <p data-itemid=${id}>Location: ${user.location.county}</p>
              </div>
               </div>
               <footer class="card-footer">
                   <a class="card-footer-item itemEdit">Edit</a>
                   <a class="card-footer-item itemDel" data-id=${id}>Delete</a>
                   <a class="card-footer-item soldButton" data-available="${available}">Mark Sold</a>
               </footer>
           </div>
                  `
        document.querySelector('#userItemView').append(userItemDiv)
      })
    })
    .catch(e => console.log(e))
}

getUserItems()