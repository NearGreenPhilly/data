var quoteURL = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
$(document).ready(function(){ 

	$('button').on('click', function(){
		getQuote();
	})


var getQuote = function() {

 	$.ajax({
		type: 'GET',
		url: quoteURL,
		dataType: "jsonp",
		data: "quoteText",
		cache: false,
		success: function(data) {
			$('blockquote').html(data.quoteText); 
		},
		error: function() {
			alert("no-go");
		}
	  });
	
};
})	

/*function tweet(){
$('btn').window.open("https://twitter.com/intent/tweet?text=" + currQuote);
}*/