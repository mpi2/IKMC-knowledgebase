(function() {

  function displaySearchResults(results, results_display_id, store) {
    var searchResults = document.getElementById(results_display_id);

    if (results.length) { // Are there any results?
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        appendString += '<tr valign="top">';

        if (item.title.substring(item.title.length -3 , item.title.length) == 'pdf'){
          appendString +=   '<td style="padding-left: 5px;"><img src="' + 'http://www.knockoutmouse.org/kb/client/images/filetypes/pdf.png' + '" alt="document" width="11" height="14"></td>';
        }
        else if (item.title.substring(item.title.length -3 , item.title.length) == 'doc'){
          appendString +=   '<td style="padding-left: 5px;"><img src="' + 'http://www.knockoutmouse.org/kb/client/images/filetypes/doc.png' + '" alt="document" width="11" height="14"></td>';
        }
        else {
          appendString +=   '<td style="padding-left: 5px;"><img src="' + '/kb/images/article.gif' + '" alt="document" width="11" height="14"></td>';
        }
        appendString +=   '<td style="padding-left: 5px;" width="100%">';
        appendString +=     '<a href="' + item.url + '" class="articleLink">' + item.title + '</a>';
        appendString +=     '<div style="margin-top: 3px;" class="articleDecription">' + item.content.substring(0, 150) + '</div>';
        appendString +=   '</td></tr> <tr><td></td> <td style="padding: 3px;">';
        appendString +=     '<span class="articleStaff2">' + item.date + '</span>';
        appendString +=   '</td></tr> <tr><td colspan="2" style="padding: 3px;"></td></tr>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li>No results found</li>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('q');

  if (searchTerm) {
    document.getElementById('searchq').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx_articles = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('content');
    });

    for (var key in window.store["Articles"]) { // Add the data to lunr
      idx_articles.add({
        'id': key,
        'title': window.store["Articles"][key].title,
        'content': window.store["Articles"][key].content,
        'date': window.store["Articles"][key].date
      });
    }
    var results = idx_articles.search(searchTerm); // Get lunr to perform a search
    displaySearchResults(results, 'search-results-for-articles' , window.store["Articles"]); // We'll write this in the next section


    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx_downloads = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('content');
    });

    for (var key in window.store["Downloads"]) { // Add the data to lunr
      idx_downloads.add({
        'id': key,
        'title': window.store["Downloads"][key].title,
        'content': window.store["Downloads"][key].content,
        'date': window.store["Downloads"][key].date
      });
    }

    var results = idx_downloads.search(searchTerm); // Get lunr to perform a search
    displaySearchResults(results, 'search-results-for_downloads', window.store["Downloads"]); // We'll write this in the next section
  }
})();