

// Displaying specific item page for demo purposes
fetch('/items/15')
    .then(r => r.json())
    .then( ({ id, itemName, quantity, available, bought, price, condition, description, user, category }) =>{
        console.log(user)
        let getName = document.querySelector('#itemName')
        let getUser = document.querySelector('#userItem')
        let getQuantity = document.querySelector('#quantity')

        getName.innerHTML = `
        <h1>${itemName}</h1>
        `
        getUser.innerHTML = `
        <p>Sold By: ${user.name}<p>
        `

        getQuantity.innerHTML = `
        <p>QTY: ${quantity}</p>
        `

    })