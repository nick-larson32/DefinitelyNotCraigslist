const testAddress = "1739 labrador drive, costa mesa, ca 92626";

const API_KEY = "M7IgpDGg-9kXeDXpl5Yj9A9_33reRjvfXANnx3RvJzphIo_pAXUEvP5FubmdzBV32ehGAyXtlzo0_hjlxzrBPi4O705EnwbTMXBu1v3rbP78tARuwNYSElA1WBqjXHYx"

  let URL = `https://api.yelp.com/v3/businesses/search?location=${testAddress}&term=starbucks`;
    let queryURL = `https://cors-anywhere.herokuapp.com/${URL}`
    fetch(queryURL, {
        method: "GET",
        headers: {
            "accept": "application/json",
            "x-requested-with": "xmlhttprequest",
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${API_KEY}`
        }
    })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            data.businesses.forEach(business => {
                let dispbusiness = document.createElement('div')
                dispbusiness.className = 'col s12 m4 dispbusinessdiv'
                dispbusiness.innerHTML = `
            <h4>${business.name}</h4>
            <button class="dispbusiness" name="${business.name}" value="${business.location.display_address}"

            <h5 class='businessaddress'>${business.location.display_address}</h5>
            `
              
            })
            
        })
        .catch(e => console.error(e))

