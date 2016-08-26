SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/{url}/search.json',
  // searchResultTemplate: '<li><a href="{url}"><p>{title}</p></a></li>',
  searchResultTemplate: '<li><a href="{{site.baseurl}}"><p><option>{title}</option></p></a></li>',
  noResultsText: 'No results found' 
})
