

// document.querySelector('#itemPageOne').addEventListener('click', e =>{
    
//     console.log('test')
// })


fetch('/items/15')
    .then(r => r.json())
    .then( data =>{
        console.log(data)
    })