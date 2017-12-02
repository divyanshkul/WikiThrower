function wikipediaSearch() {
  var searchtext = document.getElementById("inputTF").value;
    $.getJSON(
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchtext + "&format=json&callback=?",
      function(result) {
        var data = $.parseJSON(JSON.stringify(result)); //ensures that it is a string
        for (var i = 0; i < data[1].length; i++) { //data[1] is title, data[2] is description of article, data[3] is the link for the article
          var title = data[1][i];
          var desc = data[2][i];
          var link = data[3][i];
        $("#returnedResults").append("<p><a href=" + link + '">' + title + "</a><br>" + desc + "</p>");
      }
    }
  );
}
