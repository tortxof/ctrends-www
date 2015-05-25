$.getJSON("http://ctrends-reviews.djones.co/reviews.json", function(json) {

  var template = Handlebars.compile($("#reviews-template").html());
  for (var i in json["reviews"]) {
    var new_review = template(json["reviews"][i]);
    $("#reviews").append(new_review);
  }
});
