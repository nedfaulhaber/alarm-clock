$(function() {
  var alarmTime = "";
  //set initial value of #set-time to 5 minutes in the future
  $("#set-time").val(moment().add(5, 'm').format("HH:mm:ss"));

  //display time and check alarm every 1000ms
  setInterval(function() {
    $(".current-time").text(moment().format("h:mm:ss a"));
    if (moment().format("HH:mm:ss") === alarmTime) {
      $(".explosion").show();
    }
  }, 1000);

  $("#set-button").click(function() {
    alarmTime = $("#set-time").val();
    console.log(alarmTime)
  });

  $("#off").click(function() {
    $(".explosion").hide();
  });

  $("#snooze").click(function() {
    $(".explosion").hide();
    alarmTime = moment().add(10, "s").format("HH:mm:ss");
  });

});
