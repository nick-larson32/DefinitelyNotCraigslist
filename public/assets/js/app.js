require('dotenv').config()

// Yelp API code
let URL

const API_KEY = process.env.API_KEY;

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