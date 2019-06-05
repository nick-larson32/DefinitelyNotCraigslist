// Code to make tiles have responsive shadows when touched
const getParent = event => {
  return event.target.closest(`a`)
}

document.addEventListener(`touchstart`, event => {
  let parent = getParent(event)
  if (event.target.classList[0] === `hover`) {
    let parentLink = document.querySelector(`a[data-id="${event.target.dataset.id}"]`)
    parentLink.classList.add(`hover-active`)
    console.log(document.querySelector(`a[data-id="${event.target.dataset.id}"]`).classList)
  }
})

document.addEventListener(`touchend`, event => {
  if (event.target.classList[0] === `hover`) {
    document.querySelector(`a[data-id="${event.target.dataset.id}"]`).classList.remove(`hover-active`)
    console.log(document.querySelector(`a[data-id="${event.target.dataset.id}"]`).classList)
  }
})