let craiglistLogin=JSON.parse(localStorage.getItem('CraiglistLogin'))
console.log(craiglistLogin)
console.log(localStorage.getItem('CraiglistLogin'))
 if(craiglistLogin.logedin)
 {console.log(craiglistLogin.logedin)
   document.querySelector('.sectionMain').innerHTML=`<i class="material-icons tiny iconStyle" style="margin:5%;">ac_unit</i><p>Welcome ${craiglistLogin.name}</p>`+document.querySelector('.sectionMain').innerHTML}
