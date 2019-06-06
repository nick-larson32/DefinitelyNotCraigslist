const { fetch } = window

const imgArr = [`burgerbed`, `butterstick`, `chair`, `clothes`, `dog`, `gaminggear`, `grill`, `grill2`, `pillow`, `remotes`, `spatulas`, `theroom`, `toaster`]

const getToys = _ => {
  fetch('/items')
    .then(items => items.json())
    .then(items => {
      document.querySelector('#toysTiles').innerHTML = ``
      const toysItems = items.filter(data =>
        data.category.category === 'toys')
      toysItems.forEach(({ id, itemName, quantity, available, bought, price, condition, description, user, category }) => {
        let randImg = imgArr[Math.floor(Math.random() * imgArr.length)]
        let toysDiv = document.createElement('div')
        if (available && !bought && quantity > 0) {
          toysDiv.innerHTML = `
            <div class="card">
              <div class="card-content" data-id="${id}">
                <h1 class="name">
                  ${itemName}
                </h1>
                <img src="../assets/images/placeholders/${randImg}.jpg">
                <p class="subtitle">
                  Quantity: ${quantity}
                </p>
                <p class="subtitle">
                  Price: $${price}
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
          document.querySelector('#toysTiles').append(toysDiv)
        }
      })
    })
    .catch(e => console.error(e))
}

getToys()

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