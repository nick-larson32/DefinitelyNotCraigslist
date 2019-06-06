var userLocation = sessionStorage.getItem('address');
console.log(userLocation)

let addressSplit = userLocation.split(",");
let street = addressSplit[0];
let city = addressSplit[1];

let stateZipSplit = addressSplit[2].split(" ");

let state = stateZipSplit[0];
let zip = stateZipSplit[2];

console.log(zip);


document.addEventListener('click', e => {
  if (e.target.classList[0] === 'contact') {
    fetch(`/items/${e.target.dataset.id}`)
      .then(r => r.json())
      .then(item => {
        let newAddressSplit = item.user.address.split(',')
        let newStateZip = newAddressSplit[2].split(' ')
        let newZip = newStateZip[2]


        L.mapquest.key = "unhtsta6Q2zNmOUxHGw2VK1eiDTwNWvY";

        const addressTest = "92626";

        addDirections();

        function addDirections() {
          var directions = L.mapquest.directions();
          directions.route({
              start: userLocation,
              end: newZip,

              options: {
                enhancedNarrative: true
              }
            },
            createMap
          );
        }

        function createMap(err, response) {
          var map = L.mapquest.map("map", {
            center: [0, 0],
            layers: L.mapquest.tileLayer("map"),
            zoom: 7
          });

          var directionsLayer = L.mapquest
            .directionsLayer({
              directionsResponse: response
            })
            .addTo(map);
          map.addControl(L.mapquest.trafficControl());
          narrativeControl.setDirectionsLayer(directionsLayer);
          narrativeControl.addTo(map);
        }
      })
  };
})