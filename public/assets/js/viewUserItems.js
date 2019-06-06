// const { fetch } = window

const imgArr = [`burgerbed`, `butterstick`, `chair`, `clothes`, `dog`, `gaminggear`, `grill`, `grill2`, `pillow`, `remotes`, `spatulas`, `theroom`, `toaster`]

// using a placement user for demo purposes
// will need to dynamically integrate user
let id = sessionStorage.getItem('id')
  // sessionStorage.getItem('id')
const getUserItems = _ => {
  fetch(`users/${id}`)
    .then(r => r.json())
    .then(user => {
      user.items.forEach(({ id, itemName, category, condition, price, quantity, bought, available, description }) => {
        let randImg = imgArr[Math.floor(Math.random() * imgArr.length)]
        let userItemDiv = document.createElement('div')
        userItemDiv.innerHTML = `
               <div class="card">
               <header class="card-harder itemHeader">
                      <h2 class="card-header-title itemHeader"> ${itemName}</h2>
               </header>
               <div class="card-content">
               <div class="">
                  <figure class="image is-5by4">
                      <img src="./assets/images/placeholders/${randImg}.jpg" alt="Placeholder image">
                  </figure>
               <div class="media-content">
               </div>
              </div>
              <div class="content">
                <p class="subtitle"data-itemid=${id}>Category: ${category.category}</p>
                  <p class="subtitle" data-itemid=${id}>Quantity: ${quantity}</p>
                  <p class="subtitle" data-itemid=${id}>$${price}</p>
                  <p class="subtitle" data-itemid=${id}>Condition: ${condition}</p>
                  <p class="subtitle" data-itemid=${id}>${description}</p>
              </div>
               </div>
               <footer class="card-footer">
                   <a class="card-footer-item itemEdit" data-upid=${id}> <i class="fas fa-edit"></i></a>
                   <a class="card-footer-item itemDel" data-id=${id}><i class="fa fa-trash"></i></a>
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