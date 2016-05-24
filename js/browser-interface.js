var Entry = require('./../js/journal.js');

$(document).ready(function () {
  // var newEntry = new Entry("test title", "test body")
  $('#newEntry').submit(function (event) {
    event.preventDefault();
    var title = $('#inTitle').val();
    var body = $('#inBody').val();

    var newEntry = new Entry(title, body);
    $('#entries').append("<li>" + newEntry.title + " (" + newEntry.words() + " words)    " + "</li>");
  });
});
