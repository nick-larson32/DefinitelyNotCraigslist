// const { fetch} = window

// using a placement user for demo purposes
// will need to dynamically integrate user
let currUser = 3
const getUserItems = _ =>{
    fetch('/items')
    .then(items => items.json())
    .then(items => {
       const userItem = items.filter(data =>
        data.userId === currUser)
        console.log(userItem)
        if(userItem.length >0){
        userItem.forEach(({ itemName, quantity, available, bought, price, condition, description, user, category}) =>{
            let userItemDiv = document.createElement('div')
             userItemDiv.innerHTML = `
           <h2>Item Name: ${itemName}</h2>
           <h4>Quantity: ${quantity}</h4>
           <h4>Available (donator):${available}</h4>
           <h4>Bought (buyer):${bought}</h4>
           <h4>Price: $${price}</h4>
           <h4>Condition: ${condition}</h4>
           <h4>Description: ${description}</h4>
           <h4>User it belongs to: ${user.name}</h4>
           <h4>Location: ${user.location.county}</h4>
           <button class="button is-primary itemEdit">Edit</button>
           <a class="delete" id="itemDel"></a>
           <hr>
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