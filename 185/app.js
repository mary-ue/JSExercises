initMap();

async function initMap() {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer } = ymaps3;

  const map = new YMap(
    document.getElementById('map'),
    {
      location: {
        center: [59.9342802, 30.3350986],

        zoom: 10,
      },
    }
  );

  map.addChild(new YMapDefaultSchemeLayer());
}
