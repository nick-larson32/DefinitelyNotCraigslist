// const { fetch} = window

// using a placement user for demo purposes
// will need to dynamically integrate user
let currUser = 3
const getUserItems = _ =>{
    fetch('/items')
    .then(items => items.json())
    .then(items => {
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
\                    <a href="./users"><p class="card-header-title"> ${itemName}</p></a>
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
                <p>Quantity: ${quantity}</p>
                <p>Available:${available}</p>
                <p>Bought (buyer):${bought}</p>
                <p>Price: $${price}</p>
                <p>Condition: ${condition}</p>
                <p>Description: ${description}</p>
                <p>User it belongs to: ${user.name}</p>
                <p>Location: ${user.location.county}</p>
            </div>
             </div>
             <footer class="card-footer">
                 <a class="card-footer-item itemEdit" data-id="${id}">Edit</a>
                 <a class="card-footer-item itemDel" data-id="${id}">Delete</a>
                 <a class="card-footer-item soldButton" data-available="${available}">Mark Sold</a>
             </footer>
         </div>
                `
                document.querySelector('#userItemView').append(userItemDiv)
            })
        }else{
            console.log('add listing')
        }
       })
    .catch(e => console.error(e))
    }
    getUserItems()

