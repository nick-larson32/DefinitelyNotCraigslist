const { fetch } = window

const getFurniture = _ => {
  fetch('/items')
    .then(items => items.json())
    .then(items => {
      document.querySelector('#furnitureTiles').innerHTML = ``
      const furnitureItems = items.filter(data =>
        data.category.category === 'furniture')
      furnitureItems.forEach(({ itemName, quantity, available, bought, price, condition, description, user, category }) => {
        let furnitureDiv = document.createElement('div')
        if (available && !bought && quantity > 0) {
          furnitureDiv.innerHTML = `
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
          document.querySelector('#furnitureTiles').append(furnitureDiv)
        }
      })
    })
    .catch(e => console.error(e))
}

getFurniture()