const {fetch,alert}=window
let newUser

document.querySelector("#submitButton").addEventListener('click', e=>{
    newUser={name:document.querySelector("#signupName").value,
            email:document.querySelector("#signupEmail").value,
            password:document.querySelector("#signupPassword").value,
            address:document.querySelector("#signupAddress").value,
            DOB:`${document.querySelector("#selectMonth").options.selectedIndex<10?'0'+document.querySelector("#selectMonth").options.selectedIndex:document.querySelector("#selectMonth").options.selectedIndex}-${document.querySelector("#selectDay").options.selectedIndex<10?'0'+document.querySelector("#selectDay").options.selectedIndex:document.querySelector("#selectDay").options.selectedIndex}-${2006-document.querySelector("#selectYear").options.selectedIndex}`,
            gender:document.querySelector("#selectGender").options.selectedIndex}


})
