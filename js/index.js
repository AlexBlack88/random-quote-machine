$(document).ready(function() {
  var quote;
  var author;

  function getNewQuote() {
    $.ajax({
      url: "https://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: function(result) {
        //console.log(result);
        quote = result.quoteText;
        author = result.quoteAuthor;

        $("#quote").text(quote);
        
        if(author) {
          $('#author').text('-' + ' ' + author);
        }
        else {
          $('#author').text('-Author Unknown');
        }
      }
    });
  }

  getNewQuote();
  
  $('#getNew').on('click', function(e) {
    e.preventDefault();
    
    getNewQuote();
    
    });
  
  $('#tweetIt').on('click', function(e) {
    e.preventDefault();
    
    /*if(quote.length > 100) {
      quote = quote.substr(0, 100).match(/(.+)\s/)[1].concat("...");
    }*/
    
    window.open("https://twitter.com/intent/tweet?text=" + quote + "-" + " " + author + "&hashtags=thoughtoftheday");
  })
  
});

 window.open("https://twitter.com/intent/tweet?text=" + quote + "-" + " " + author + "&hashtags=thoughtoftheday");