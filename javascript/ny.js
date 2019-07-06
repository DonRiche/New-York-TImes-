
var keyword = "george bush";

var startYear = "2000";

var endYear = "2010";

var resultsNumber = 5

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + keyword + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231&api-key=ZVaT9Hn0MgGveFG8hw7Avnr9Zjk089GX"

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    for(var i = 0; i < resultsNumber; i++){
        var headline = (response.response.docs[i].headline.main);
        var byline = (response.response.docs[i].byline.main);
        console.log(response.response.docs[i].web_url)
        var articleDiv = $("<div>");
        
        articleDiv.append(headline);
        articleDiv.append(byline);
        $("#searchResults").append(articleDiv);
    }
  });