const { fetch, alert } = window
let newUser
let totalNum
// fetch('/users')
//     .then(r=>r.json())
//     .then(user=> console.log(user))
//     .catch(e=>console.log(e))
console.log(moment().format("YYYY-MM-DD HH:mm:ss"))
document.querySelector("#submitButton").addEventListener('click', e=>{
    e.preventDefault()
    newUser=
         {       name:document.querySelector("#signupName").value,
                 email:document.querySelector("#signupEmail").value,
                 password:document.querySelector("#signupPassword").value,
                 address:document.querySelector("#signupAddress").value,
                 DOB:`${document.querySelector("#selectMonth").options.selectedIndex<10?'0'+document.querySelector("#selectMonth").options.selectedIndex:document.querySelector("#selectMonth").options.selectedIndex}-${document.querySelector("#selectDay").options.selectedIndex<10?'0'+document.querySelector("#selectDay").options.selectedIndex:document.querySelector("#selectDay").options.selectedIndex}-${2006-document.querySelector("#selectYear").options.selectedIndex}`,
                 gender:document.querySelector("#selectGender").options.selectedIndex,
                 locationId:document.querySelector("#selectLocation").options.selectedIndex,
                 createdAt:moment().format("YYYY-MM-DD HH:mm:ss"),
                 updateAt:moment().format("YYYY-MM-DD HH:mm:ss")}
    fetch('/users')
    .then(r=>r.json())
     .then(users=>{totalNum=users.length
                newUser.id=totalNum+1     
                 fetch('/users', {
                     method: 'POST',
                     headers: {
                       'Content-Type': 'application/json'
                     },
                     body: JSON.stringify(newUser)
             })
        .then(console.log(newUser))
            .catch(e=>console.log(e))
       })
    .then(_=>console.log(newUser))
    .catch(e=>console.log(e))
            document.querySelector("#signupName").value=''
            document.querySelector("#signupEmail").value=''
            document.querySelector("#signupPassword").value=''
            document.querySelector("#signupAddress").value=''
        


})
