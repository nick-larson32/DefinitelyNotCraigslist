const { fetch } = window

const getToys = _ => {
  fetch('/items')
    .then(items => items.json())
    .then(items => {
      document.querySelector('#toysTiles').innerHTML = ``
      const toysItems = items.filter(data =>
        data.category.category === 'toys')
      toysItems.forEach(({ itemName, quantity, available, bought, price, condition, description, user, category }) => {
        let toysDiv = document.createElement('div')
        if (available && !bought && quantity > 0) {
          toysDiv.innerHTML = `
            <div class="card">
              <div class="card-content">
                <p class="title">
                  ${itemName}
                </p>
                <p class="subtitle">
                  Number available: ${quantity}
                  Category: ${category.category}
                </p>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <span>
                  View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
                  </span>
                </p>
                <p class="card-footer-item">
                  <span>
                  Share on <a href="#">Facebook</a>
                  </span>
                </p>
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