$.getJSON("http://reviews.ctrends.net/random-review.json", function(json) {

  var template = Handlebars.compile($("#reviews-template").html());
  var review = template(json["review"]);
  $("#reviews").append(review);
});
