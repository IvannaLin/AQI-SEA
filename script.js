let text= document.getElementById('text');
let cloud= document.getElementById('cloud');
let bird= document.getElementById('bird');
let front= document.getElementById('front');
let mtleft= document.getElementById('mtleft');
let mtright= document.getElementById('mtright');

window.addEventListener('scroll',() => {
    let value = window.scrollY;

    text.style.marginTop = value * 2 + 'px';
    cloud.style.top = value * 0.5 + 'px';
    bird.style.top = value * -1 + 'px';
    mtright.style.left = value * 0.5 + 'px'; //to right
    mtleft.style.left = value * -0.5 + 'px';
    mtleft.style.top = value * 0.3 + 'px'; //down
    mtright.style.top = value * 0.3 + 'px'; //down
})

function initBingMap() {
    var map = new Microsoft.Maps.Map(document.getElementById('map'), {
        center: new Microsoft.Maps.Location(3.1390, 101.6869),
        zoom: 11
    });

    var options = {
        uriConstructor: "https://tiles.aqicn.org/tiles/usepa-aqi/{zoom}/{x}/{y}.png?token=_TOKEN_ID_",
        minZoom: 1,
        maxZoom: 15
    };
    var waqiTileSource = new Microsoft.Maps.TileSource(options);
    var waqiTileLayer = new Microsoft.Maps.TileLayer({ mercator: waqiTileSource });
    map.layers.insert(waqiTileLayer);

    document.getElementById('country-select').addEventListener('change', function() {
        var coordinates = this.value.split(',');
        var location = new Microsoft.Maps.Location(parseFloat(coordinates[0]), parseFloat(coordinates[1]));
        map.setView({ center: location, zoom: 11 });
    });
}
