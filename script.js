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
    mtright.style.left = value * 1.5 + 'px'; //to right
    // hill5.style.left = value * 1.5 + 'px'; //to right
    mtleft.style.left = value * -1.5 + 'px';
    mtleft.style.top = value * 1 + 'px'; //down
    mtright.style.top = value * 1 + 'px'; //down
    // front.style.top = value * 1 + 'px'; //down
})

var map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(3.1390, 101.6869),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 11
});

// Function to create the Air Quality overlay
function createWaqiMapOverlay() {
    return new google.maps.ImageMapType({
        getTileUrl: function (coord, zoom) {
            return 'https://tiles.aqicn.org/tiles/usepa-aqi/' + zoom + "/" + coord.x + "/" + coord.y + ".png?token=_522420bb1b10b7ff5b4e4a727a1ead0708371aa3_";
        },
        name: "Air Quality",
    });
}

// Add the initial Air Quality overlay
var waqiMapOverlay = createWaqiMapOverlay();
map.overlayMapTypes.insertAt(0, waqiMapOverlay);

// Get the select element
const countrySelect = document.getElementById('country-select');

// Add event listener for change event
countrySelect.addEventListener('change', (event) => {
    // Get the selected option's value
    const selectedValue = event.target.value;
    
    // Split the value into coordinates
    const [newCoordX, newCoordY] = selectedValue.split(',');

    // Update the map's center
    map.setCenter(new google.maps.LatLng(parseFloat(newCoordX), parseFloat(newCoordY)));

    // Optionally adjust the zoom level if needed
    map.setZoom(11);

    // Remove the existing overlay
    map.overlayMapTypes.clear();

    // Add a new Air Quality overlay
    waqiMapOverlay = createWaqiMapOverlay();
    map.overlayMapTypes.insertAt(0, waqiMapOverlay);
});
