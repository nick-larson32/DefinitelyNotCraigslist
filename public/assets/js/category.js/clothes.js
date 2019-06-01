const { fetch } = window

// const getItems = _ => {
//   fetch(`/items`)
//     .then(r => r.json())
//     .then(items => {
//       items.forEach(({itenName, quantity }) => {
//         console.log(itemName, quantity)
//       })
//     })
//     .catch(e => console.log(e))
// }

const getAllItems = _ => {
  fetch('/items')
    .then(items => items.json())
    .then(items => {
      document.querySelector('#clothesTiles').innerHTML = ''
      items.forEach(({ itemName, quantity, available, bought, price, condition, description, user, category }) => {
        let clothesDiv = document.createElement('div')
        if (available && !bought && quantity > 0) {
          clothesDiv.innerHTML = `
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
          document.querySelector('#clothesTiles').append(clothesDiv)
        }
      })
    })
    .catch(e => console.error(e))
}

getAllItems()