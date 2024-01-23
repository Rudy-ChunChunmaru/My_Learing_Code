// Code goes here!
const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

declare var ol: any;

function searchAddressHandler(event: Event) {
  event.preventDefault();

  const coordinates = { lat: -6.914744, lng: 107.60981 }; // Can't fetch coordinates from Google API, use dummy ones

  document.getElementById("map")!.innerHTML = ""; // clear <p> from <div id="map">
  new ol.Map({
    target: "map",
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
      zoom: 12,
    }),
  });
}

form.addEventListener("submit", searchAddressHandler);
