const { fetch } = window

const getFood = _ => {
  fetch('/items')
    .then(items => items.json())
    .then(items => {
      document.querySelector('#foodTiles').innerHTML = ``
      const foodItems = items.filter(data =>
        data.category.category === 'food')
      foodItems.forEach(({ itemName, quantity, available, bought, price, condition, description, user, category }) => {
        let foodDiv = document.createElement('div')
        if (available && !bought && quantity > 0) {
          foodDiv.innerHTML = `
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
          document.querySelector('#foodTiles').append(foodDiv)
        }
      })
    })
    .catch(e => console.error(e))
}

getFood()