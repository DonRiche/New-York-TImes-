
var keyword = "george bush";

var startYearField = "";

var startYearNumber = "2000";

var startYear = "&begin_date=" + startYearNumber;

var endYearField = "";

var endYearNumber = "2010";

var endYear = "0101&end_date=" + endYearNumber;

var resultsNumber = 5

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + keyword + startYear + endYear + "1231&api-key=ZVaT9Hn0MgGveFG8hw7Avnr9Zjk089GX"

$("#search").on("click", function () {
    event.preventDefault();

    clearInterval();

    keyword = $("#searchTerm").val();

    startYearNumber = $("#startYear").val();

    endYearNumber = $("#endYear").val();

    resultsNumber = parseInt();
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < resultsNumber; i++) {
            if (startYearField !== "") {
                startYear = "&begin_date=" + startYearNumber + "0101";
            }

            else {
                startYear = "";
            }

            if (endYearField !== "") {
                endYear = "&end_date=" + endYearNumber + "1231";
            }

            else {
                endYear = "";
            }


            var headline = (response.response.docs[i].headline.main);
            var byline = (response.response.docs[i].byline.main);
            console.log(response.response.docs[i].web_url)
            var articleDiv = $("<div>");
            articleDiv.addClass("article");

            articleDiv.append(headline);
            articleDiv.append(byline);
            $("results").append(articleDiv);
        }
    })
})