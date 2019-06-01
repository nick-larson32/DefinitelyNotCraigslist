const { fetch } = window

const getItems = _ => {
  fetch(`/items`)
    .then(r => r.json())
    .then(items => {
      items.forEach(({itenName, quantity }) => {
        console.log(itemName, quantity)
      })
    })
    .catch(e => console.log(e))
}

getItems()