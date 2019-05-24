(function (window, document) {

  const layout = document.getElementById('layout'),
    menu = document.getElementById('menu'),
    menuLink = document.getElementById('menuLink'),
    content = document.getElementById('main');

  function toggleClass(element, className) {
    var classes = element.className.split(/\s+/),
      length = classes.length,
      i = 0;

    for (; i < length; i++) {
      if (classes[i] === className) {
        classes.splice(i, 1);
        break;
      }
    }
    // The className is not found
    if (length === classes.length) {
      classes.push(className);
    }

    element.className = classes.join(' ');
  }

  function toggleAll(e) {
    var active = 'active';

    e.preventDefault();
    toggleClass(layout, active);
    toggleClass(menu, active);
    toggleClass(menuLink, active);
  }

  menuLink.onclick = function (e) {
    toggleAll(e);
  };

  content.onclick = function (e) {
    if (menu.className.indexOf('active') !== -1) {
      toggleAll(e);
    }
  };

}(this, this.document));

// Yelp API code
let URL

const API_KEY = 'M7IgpDGg-9kXeDXpl5Yj9A9_33reRjvfXANnx3RvJzphIo_pAXUEvP5FubmdzBV32ehGAyXtlzo0_hjlxzrBPi4O705EnwbTMXBu1v3rbP78tARuwNYSElA1WBqjXHYx';

let queryURL = `https://cors-anywhere.herokuapp.com/${URL}`;

let yelpObject = {
  method: "GET",
  headers: {
    "accept": "application/json",
    "x-requested-with": "xmlhttprequest",
    "Access-Control-Allow-Origin": "*",
    "Authorization": `Bearer ${API_KEY}`
  }
}