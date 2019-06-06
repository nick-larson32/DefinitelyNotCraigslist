const { fetch } = window

const imgArr = [`burgerbed`, `butterstick`, `chair`, `clothes`, `dog`, `gaminggear`, `grill`, `grill2`, `pillow`, `remotes`, `spatulas`, `theroom`, `toaster`, `operation`, `legos`, `1989`, `hotdog`, `cap`, `thor`, `monopoly`, `ramen`, `beaks`, `shamwow`, `got`]

const getMisc = _ => {
  fetch('/items')
    .then(items => items.json())
    .then(items => {
      document.querySelector('#miscTiles').innerHTML = ``
      const miscItems = items.filter(data =>
        data.category.category === 'miscellaneous')
      miscItems.forEach(({ id, itemName, quantity, available, bought, price, condition, description, user, category }) => {
        let randImg = imgArr[Math.floor(Math.random() * imgArr.length)]
        let miscDiv = document.createElement('div')
        miscDiv.className = `card`
        if (available && !bought && quantity > 0) {
          miscDiv.innerHTML = `
              <div class="card-content" data-id="${id}">
                <h1 class="name">
                  ${itemName}
                </h1>
                <div class="img-div">
                  <img src="../assets/images/placeholders/${randImg}.jpg">
                </div>
                <p class="subtitle">
                  Quantity: ${quantity}
                </p>
                <p class="subtitle">
                  Price: $${price} each
                </p>
                <p class="subtitle">
                  <span>Condition: ${condition}</span>
                </p>
                <p class="subtitle">
                  ${description}
                </p>
              </div>
              <footer class="card-footer">
                <a class="contact pure-button pure-button-primary" href="#" data-id="${id}">Contact Info</a>
              </footer>
          `
          document.querySelector('#miscTiles').append(miscDiv)
        }
      })
    })
    .catch(e => console.error(e))
}

getMisc()

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
          <div id="map" style="margin-top: 10%;margin-left: 10%;width: 80%;height: 400px;"></div>

          `
            document.querySelector(`div[data-id="${event.target.dataset.id}"]`).append(chosenEmail)
          })
          .catch(e => console.error(e))
      }
    }
  }
})