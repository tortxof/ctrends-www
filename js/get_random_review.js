$.getJSON(
  'https://quotes.djones.co/api/collection/ctrends-reviews/random',
  function(json) {
    var template = Handlebars.compile($('#reviews-template').html());
    var author = json.author;
    var title = json.content.split('\r\n\r\n')[0];
    var content = json.content
      .split('\r\n\r\n')
      .slice(1)
      .join('');
    var review = template({ author: author, content: content, title: title });
    $('#reviews').append(review);
  }
);
