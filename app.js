var quotes = [{
  author: 'Shakespeare',
  quote: 'Let loose the dogs of war'
}, {
  author: 'Dhakespeare',
  quote: 'Let war the dogs of war'
},{
  author: 'Rhakespeare',
  quote: 'Let be the dogs of war'
}];
var gotJSON = [];

var jqxhr = $.getJSON( "https://raw.githubusercontent.com/JamesFT/Database-Quotes-JSON/master/quotes.json", function() {
  console.log( "success" );
})
  .done(function(data) {
    console.log( "second success" );
    console.log(data)
    gotJSON = data
    makeNewQuote()
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log( "complete" );
  });
 
// Set another completion function for the request above
jqxhr.always(function() {
  console.log( "second complete" );
});

function makeNewQuote() {
  $("#author").html("");
  $("#text").html("");
  var randomNum = Math.floor(Math.random() * gotJSON.length);
  $('#author').append('-' + gotJSON[randomNum].quoteAuthor);
    // $('#text').append(gotJSON[randomNum].quoteText);
  $(function () {
  showText("#text", gotJSON[randomNum].quoteText, 0, 50); 
});
}

var showText = function (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
};
