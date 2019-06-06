const { fetch } = window



const getClothes = _ => {
  fetch('/items')
    .then(items => items.json())
    .then(items => {
      document.querySelector('#clothesTiles').innerHTML = ``
      const clothesItems = items.filter(data =>
        data.category.category === 'clothing')
      clothesItems.forEach(({ id, itemName, quantity, available, bought, price, condition, description, user, category }) => {
        let clothesDiv = document.createElement('div')
        if (available && !bought && quantity > 0) {
          clothesDiv.innerHTML = `
            <div class="card">
              <div class="card-content" data-id="${id}">
                <h1 class="name">
                  ${itemName}
                </h1>
                <p class="subtitle">
                  Quantity: ${quantity}
                </p>
                <p class="subtitle">
                  Price: ${price}
                </p>
                <p class="subtitle">
                  Condition: ${condition}
                </p>
              </div>
              <footer class="card-footer">
                <a class="contact pure-button pure-button-primary" href="#" data-id="${id}">Contact Info</a>
              </footer>
            </div>
          `
          document.querySelector('#clothesTiles').append(clothesDiv)
        }
      })
    })
    .catch(e => console.error(e))
}

getClothes()

const getParent = event => {
  return event.target.closest(`div.card`)
}

document.addEventListener(`click`, event => {
  if (event.target.classList[0] === `hide`) {
    let parent = getParent(event)
    parent.style.display = "none"
  } else {
    if (event.target.classList[0] === `contact`) {
      if (!document.querySelector(`p[data-id="${event.target.dataset.id}"]`)) {
        fetch(`/items/${event.target.dataset.id}`)
          .then(item => item.json())
          .then(({ id, itemName, quantity, available, bought, price, condition, description, user, category }) => {
            let chosenEmail = document.createElement(`p`)
            chosenEmail.classList = `email subtitle`
            chosenEmail.setAttribute(`data-id`, `${event.target.dataset.id}`)
            chosenEmail.innerHTML = `
          Seller's email: ${user.email}
          `
            document.querySelector(`div[data-id="${event.target.dataset.id}"]`).append(chosenEmail)
          })
          .catch(e => console.error(e))
      }
    }
  }
})