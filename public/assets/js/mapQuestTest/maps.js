window.onload = function() {
  L.mapquest.key = "unhtsta6Q2zNmOUxHGw2VK1eiDTwNWvY";

  const addressTest = "92626";

  addDirections();

  function addDirections() {
    var directions = L.mapquest.directions();
    directions.route(
      {
        start: addressTest,
        end: "90210",

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
  
};
