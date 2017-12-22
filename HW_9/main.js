function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: {lat: 40.731, lng: -73.997}
    });
    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
        weather();
        getWeather();
    });
}
function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}
function weather() {
    var city = document.getElementById('address').value;
    var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'";
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json").success(function (data) {
        $('#temp').html("Temperature in " + city + " is " + data.query.results.channel.item.condition.temp + "°C");
    });
}
function  getWeather() {
    $('#weatherResponse').html('');
    var cityName = document.getElementById('address').value;
    var apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=77cde0874afe141294849d3f9c1de594';
    $.getJSON(apiCall, weatherCallback);
    function  weatherCallback(weatherData) {
        var cityName = weatherData.name;
        var country = weatherData.sys.country;
        var description = weatherData.weather[0].description;
        $('#weatherResponse').append("The weather in " + cityName + " " + country + " is currently " + description);
    }
}