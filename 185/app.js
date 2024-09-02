initMap();

async function initMap() {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;

  const map = new YMap(document.getElementById('map'), {
    location: {
      center: [30.315808437792498, 59.95055252635374],
      zoom: 13,
    },
  });

  map.addChild(new YMapDefaultSchemeLayer());
  map.addChild(new YMapDefaultFeaturesLayer());

  const markerElement = document.createElement('img');
  markerElement.className = 'icon-marker';
  markerElement.src = 'cat.jpg';
  // markerElement.innerText = "I'm marker!";

  const marker = new YMapMarker(
    {
      // source: 'markerSource',
      coordinates: [30.315808437792498, 59.95055252635374],
      draggable: true,
      mapFollowsOnDrag: true,
    },
    markerElement
  );


  map.addChild(marker);
}

