let craiglistLogin=JSON.parse(localStorage.getItem('CraiglistLogin'))

    let emailInput = craiglistLogin.email
    let passInput = craiglistLogin.password
    fetch('/users')
      .then(r => r.json())
      .then(users => {
        users.map(user => {
          if (user.email === emailInput && user.password === passInput) {
            document.querySelector(".profileInfo").innerHTML=`
              <label class="label label_color">Name</label>
              <p>${user.name}</p>
            <label class="label label_color">Password</label>
              <p>${user.password}</p>
            <label class="label label_color">Email</label>
               <p>${user.Email}</p>
            <label class="label label_color">Date of Birth</label>
                <p>${user.DOB}</p>
            <label class="label label_color">Location</label>
                <p>${user.locationId}</p>`

            
          } else {
            console.log('LOL no.')
          }
        })
       
          //   console.log(users)
      })
      .catch(e => console.log(e))

  
  // cfrankiewicz4@nbcnews.com
  // Tkm2XxzPSl