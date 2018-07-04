$.getJSON('https://quotes.djones.co/api/collection/ctrends-reviews', function(
  json
) {
  var template = Handlebars.compile($('#reviews-template').html());
  for (var i in json['quotes']) {
    var author = json['quotes'][i].author;
    var title = json['quotes'][i].content.split('\r\n\r\n')[0];
    var content = json['quotes'][i].content
      .split('\r\n\r\n')
      .slice(1)
      .join('');
    var new_review = template({
      author: author,
      title: title,
      content: content
    });
    $('#reviews').append(new_review);
  }
});
