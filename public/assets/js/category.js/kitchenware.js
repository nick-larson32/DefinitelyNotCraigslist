const { fetch } = window

const getKitchenware = _ => {
  fetch('/items')
    .then(items => items.json())
    .then(items => {
      document.querySelector('#kitchenwareTiles').innerHTML = ``
      const kitchenwareItems = items.filter(data =>
        data.category.category === 'kitchenware')
      kitchenwareItems.forEach(({ id, itemName, quantity, available, bought, price, condition, description, user, category }) => {
        let kitchenwareDiv = document.createElement('div')
        if (available && !bought && quantity > 0) {
          kitchenwareDiv.innerHTML = `
            <div class="card">
              <div class="card-content" data-id="${id}">
                <p class="title">
                  ${itemName}
                </p>
                <p class="subtitle">
                  Number available: ${quantity}
                  Category: ${category.category}
                </p>
              </div>
              <footer class="card-footer">
                <a class="contact pure-button pure-button-primary" href="#" data-id="${id}">Contact Info</a>
                <a class="hide pure-button" href="#">Not Interested</a>
              </footer>
            </div>
          `
          document.querySelector('#kitchenwareTiles').append(kitchenwareDiv)
        }
      })
    })
    .catch(e => console.error(e))
}

getKitchenware()

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
          Donor email: ${user.email}
          `
            document.querySelector(`div[data-id="${event.target.dataset.id}"]`).append(chosenEmail)
        })
        .catch(e => console.error(e))
    }
  }
  }
})