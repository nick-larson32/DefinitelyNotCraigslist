

document.addEventListener('click', e =>{
    if(e.target.className === 'delete'){
        fetch(`/items/${e.target.dataset.id}`, {
            method: 'DELETE',
        })
        .then(_ =>{
            console.log('item is deleted')
            getUserItems()
        })
    }
})