document.addEventListener('click', e => {
  if (e.target.className === 'card-footer-item itemDel') {
    fetch(`/items/${e.target.dataset.id}`, {
        method: 'DELETE',
      })
      .then(_ => {
        console.log('item is deleted')
        location.reload()
      })
  }
})