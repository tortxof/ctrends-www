$.getJSON("/testimonials/reviews.json", function(json) {

  var source = $("#reviews-template").html();
  var template = Handlebars.compile(source);
  for (var i in json) {
    var new_review = template(json[i]);
    $("#reviews").append(new_review);
  }
});