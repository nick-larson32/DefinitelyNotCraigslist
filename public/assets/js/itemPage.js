const { fetch } = window

const getAllItems = _ => {
    // Get all items from the DB and put them on the page
    fetch('/items')
        .then(r => r.json())
        .then(items => {
            document.querySelector('#itemPageDiv').innerHTML = ''
            items.forEach(({ id, itemName, quantity, available, bought, price, condition, description, user, category }) => {
                if (available && !bought && quantity > 0) {
                    let itemDiv = document.createElement('div')
                    // assign each div a data-itemid property of the item's id for future fetch requests
                    itemDiv.dataset.itemid = `${id}`
                    itemDiv.innerHTML = `
                <div id = "itemName">
                <h1>${itemName}</h1>
                </div>
                <div id="itemImage">
                    <figure class="image is-square">
                        <img src="https://bulma.io/images/placeholders/256x256.png">
                    </figure>
                </div>
                <div class="column is-centered" id="userItem">
                <p>Sold By: ${user.name}<p>
                </div>
                <div class="column is-centered" id="quantity">
                <p>QTY: ${quantity}</p>
                </div>
                `
                    document.querySelector('#itemPageDiv').append(itemDiv)
                }
            })
        })
        .catch(e => console.log(e))
}

// getAllItems()

document.addEventListener('click', e => {
    if (e.target.dataset.itemid > -1) {
        console.log(e.target.dataset.itemid)
    }
})

const getOneItem = _ => {
    // Get all items from the DB and put them on the page
    fetch(`/items/`)
        .then(r => r.json())
        .then(items => {
            document.querySelector('#itemPageDiv').innerHTML = ''
            items.forEach(({ id, itemName, quantity, available, bought, price, condition, description, user, category }) => {
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
                <div class="column is-centered" id="userItem" data-itemid=${id}>
                <p data-itemid=${id}>Sold By: ${user.name}<p>
                </div>
                <div class="column is-centered" id="quantity" data-itemid=${id}>
                <p data-itemid=${id}>QTY: ${quantity}</p>
                </div>
                `
                    document.querySelector('#itemPageDiv').append(itemDiv)
                }
            })
        })
        .catch(e => console.log(e))
}

// getOneItem()
