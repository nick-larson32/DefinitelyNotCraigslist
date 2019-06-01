let craiglistLogin=JSON.parse(localStorage.getItem('CraiglistLogin'))
console.log(craiglistLogin)
console.log(localStorage.getItem('CraiglistLogin'))
 if(craiglistLogin.logedin)
 {console.log(craiglistLogin.logedin)
   document.querySelector('.sectionMain').innerHTML=
   `
   <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
  <i class="material-icons medium" style="display:inline;">account_box</i>
  <div class="navbar-item has-dropdown is-hoverable">
  <a class="navbar-link">
    More
  </a>

  <div class="navbar-dropdown">
    <a class="navbar-item">
      About
    </a>
    <a class="navbar-item">
      Jobs
    </a>
    <a class="navbar-item">
      Contact
    </a>
    <hr class="navbar-divider">
    <a class="navbar-item">
      Report an issue
    </a>
  </div>
  </div>
  </nav>
   `
   +document.querySelector('.sectionMain').innerHTML}
//    `<i class="material-icons tiny iconStyle" style="margin:5%;">ac_unit</i><p>Welcome ${craiglistLogin.name}</p>`+document.querySelector('.sectionMain').innerHTML}
