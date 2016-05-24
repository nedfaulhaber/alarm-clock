Entry = function(title, body) {
  console.log("hey")
  this.title = title;
  this.body = body;
}

Entry.prototype.words = function() {
  return this.body.split(/\s+/).length;
}

module.exports = Entry;
