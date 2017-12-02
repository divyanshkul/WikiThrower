function wikiSearch(){
			var searchText = document.getElementById("inputTF").value;
			var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchText +"&format=json&callback=?";
			$.ajax({
			url: url,
			type: 'GET',
			contentType: "application/json; charset=utf-8",
			async: false,
        	dataType: "json",
        	success: function(data, status, jqXHR) {
        		$("#output").html();
        		var html = "";
        		for(var i=0;i<data[1].length;i++){
        			var article = new Object();
        			article["Title"] = data[1][i];
        			article["link"] = data[3][i];
        			html += '<a href="'+article["link"]+'">'+article["Title"]+'</a><br>';
        		}
        		document.getElementById('results').innerHTML = html;
        		
        	}}).fail(function() {
				document.getElementById('results').innerHTML = "ERROR";
			});
		}