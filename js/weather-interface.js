var apiKey = require('./../.env').apiKey;

$(document).ready(function () {
  $('#weatherLocation').click(function () {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function (response) {
      var temp = Math.round(response.main.temp * 9 / 5 - 459.67);
      $('.showWeather').text("The temp in " + response.name + " is " + temp + "°F");
    }).fail(function (error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
