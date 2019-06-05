const { fetch } = window

// using a placement user for demo purposes
// will need to dynamically integrate user
let currUser = parseInt(sessionStorage.getItem('id'))
console.log(currUser)
const getUserItems = _ => {
  fetch('/items')
    .then(items => items.json())
    .then(items => {
      console.log(items)
      document.querySelector('#userItemView').innerHTML = ''
      const userItem = items.filter(data =>
        data.userId === currUser)
        console.log(userItem)
        if(userItem.length >0){
        userItem.forEach(({ id, itemName, quantity, available, bought, price, condition, description, user, category}) =>{
            let userItemDiv = document.createElement('div')
             userItemDiv.innerHTML = `
             <div class="card">
             <header class="card-harder">
             <p class="card-header-title"> ${itemName}</p>
             </header>
             <div class="card-content">
                <figure class="image is-128x128">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
             </div>
             <div class="media-content">
             </div>
            </div>
            <div class="content">
                <p data-itemid=${id}>Available: ${available}</p>
                <p data-itemid=${id}>$${price}</p>
                <p data-itemid=${id}>Condition: ${condition}</p>
            </div>
             </div>
             <footer class="card-footer">
                 <a class="card-footer-item itemEdit">Edit</a>
                 <a class="card-footer-item itemDel" id="modalDelete" data-id=${id}>Delete</a>
                 <a class="card-footer-item soldButton" data-available="${available}">Mark Sold</a>
             </footer>
         </div>
                `
          document.querySelector('#userItemView').append(userItemDiv)
        })
      } else {
        console.log('Please add listing')
      }
    })
    .catch(e => console.error(e))
    }
    getUserItems()

