let craiglistLogin=JSON.parse(localStorage.getItem('CraiglistLogin'))
console.log(craiglistLogin)
console.log(localStorage.getItem('CraiglistLogin'))
 if(craiglistLogin.logedin)
 {console.log(craiglistLogin.logedin)
  document.querySelector("#userLogInPar").textContent="Log out"
  document.querySelector("#profileMenutag").innerHTML=
  `
  <a href="./profile.html" class="pure-menu-link">
                        <div id="userProfile">
                            <p class="menu-text">Profile</p>
                        </div>
   </a>
  `
   document.querySelector('.sectionMain').innerHTML=
   `
   <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
  <i class=" material-icons" style="font-size: 50px" >account_box</i>
  <div class="navbar-item has-dropdown is-hoverable">
  <a class="navbar-link">
    Welcome!
  </a>

  <div class="navbar-dropdown">
  <a class="navbar-item">
  Edit yout Profile
  </a>
  <a class="navbar-item">
  Log out
  </a>
  </div>
  </div>
  </div>
  </nav>
   `
   +document.querySelector('.sectionMain').innerHTML}
//    `<i class="material-icons tiny iconStyle" style="margin:5%;">ac_unit</i><p>Welcome ${craiglistLogin.name}</p>`+document.querySelector('.sectionMain').innerHTML}
