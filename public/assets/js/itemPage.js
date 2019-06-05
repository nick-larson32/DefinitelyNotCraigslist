//const { fetch } = window
let clickedItemId

// const getAllItems = _ => {
//     // Get all items from the DB and put them on the page
//     fetch('/items')
//         .then(r => r.json())
//         .then(items => {
//             document.querySelector('#itemPageDiv').innerHTML = ''
//             items.forEach(({ id, itemName, quantity, available, bought, price, condition, description, user, category }) => {
//                 if (available && !bought && quantity > 0) {
//                     let itemDiv = document.createElement('div')
//                     // assign each div a data-itemid property of the item's id for future fetch requests
//                     itemDiv.dataset.itemid = `${id}`
//                     itemDiv.innerHTML = `
//                 <div id="itemName" data-itemid=${id}>
//                 <h1 data-itemid=${id}>${itemName}</h1>
//                 </div>
//                 <div id="itemImage" data-itemid=${id}>
//                     <figure class="image is-square" data-itemid=${id}>
//                         <img data-itemid=${id} src="https://bulma.io/images/placeholders/256x256.png">
//                     </figure>
//                 </div>
//                 <div class="column is-centered" id="userItem" data-itemid=${id}>
//                 <p data-itemid=${id}>Sold By: ${user.name}<p>
//                 </div>
//                 <div class="column is-centered" id="quantity" data-itemid=${id}>
//                 <p data-itemid=${id}>QTY: ${quantity}</p>
//                 </div>
//                 `
//                     document.querySelector('#itemPageDiv').append(itemDiv)
//                 }
//             })
//         })
//         .catch(e => console.log(e))
// }

// getAllItems()

document.addEventListener('click', e => {
    if (e.target.dataset.itemid) {
        clickedItemId = e.target.dataset.itemid
        getOneItem(clickedItemId)
    }
})

// get one item from the DB if it's clicked from the list of all items
// puts the item into the same div as all the items were in
const getOneItem = clickedItemId => {
    // Get one from the DB and put it on the page
    fetch(`/items/${clickedItemId}`)
        .then(r => r.json())
        .then(({ id, itemName, quantity, available, bought, price, condition, description, user, category }) => {
            document.querySelector('#itemPageDiv').innerHTML = ''
            document.querySelector('#modalSection').style.display = 'none'
            if (available && !bought && quantity > 0) {
                let itemDiv = document.createElement('div')
                // assign each div a data-itemid property of the item's id for future fetch requests
                itemDiv.dataset.itemid = `${id}`
                itemDiv.innerHTML = `
                <div id="itemName" data-itemid=${id}>
                <h1 data-itemid=${id}>${itemName}</h1>
                </div>
                <div id="itemImage" data-itemid=${id}>
                    <figure class="image is-square" data-itemid=${id}>
                        <img data-itemid=${id} src="https://bulma.io/images/placeholders/256x256.png">
                    </figure>
                </div>
                <div class="columns is-mobile">
                <div class="column" id="userItem" data-itemid=${id}>
                <p data-itemid=${id}>Sold By: ${user.name}<p>
                </div>
                <div class="column" id="quantity" data-itemid=${id}>
                <p data-itemid=${id}>QTY: ${quantity}</p>
                </div>
                </div>
                <div class="columns is-mobile">
                <div class="column" id="userItem" data-itemid=${id}>
                <p data-itemid=${id}>${user.location.county}<p>
                </div>
                <div class="column" id="quantity" data-itemid=${id}>
                <p data-itemid=${id}>Condition: ${condition}</p>
                </div>
                </div>
                <div class="columns">
                <div class="column is-centered">
                <p data-itemid=${id}>${description}</p>
                </div>
                </div>
                <a class="button is-medium is-fullwidth is-info">Contact Seller</a>
                </div>

                `
                document.querySelector('#itemPageDiv').append(itemDiv)
            }
        })
        .catch(e => console.log(e))
}

// getOneItem()
