window.onload = function() {
  L.mapquest.key = "unhtsta6Q2zNmOUxHGw2VK1eiDTwNWvY";

  const addressTest = "350 5th Ave, New York, NY 10118";

  addDirections();

  function addDirections() {
    var directions = L.mapquest.directions();
    directions.route({
        start: addressTest,
        end: "One Liberty Plaza, New York, NY 10006",
        waypoints: [
          "366 Columbus Ave, New York, NY 10024",
          "881 7th Ave, New York, NY 10019"
        ],
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

    var narrativeControl = L.mapquest.narrativeControl({
      directionsResponse: response,
      compactResults: false,
      interactive: true
    });

    narrativeControl.setDirectionsLayer(directionsLayer);
    narrativeControl.addTo(map);
  }
};