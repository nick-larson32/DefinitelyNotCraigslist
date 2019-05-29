// const { fetch} = window

// using a placement user for demo purposes
// will need to dynamically integrate user
let currUser = 3

    fetch('/items')
    .then(items => items.json())
    .then(items => {
       const userItem = items.filter(data =>
        data.userId === currUser)
        // console.log(userItem)
        if(userItem.length >0){
        userItem.forEach(({ itemName, quantity, available, bought, price, condition, description, user, category}) =>{
            let userItemDiv = document.createElement('div')
             userItemDiv.innerHTML = `
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
                document.querySelector('#userItemView').append(userItemDiv)
            })
        }else{
            console.log('add listing')
        }
       })
    .catch(e => console.error(e))

