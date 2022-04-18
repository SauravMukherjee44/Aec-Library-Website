var handleSearch = function(event) {
    event.preventDefault();
    var searchTerm = event.target.elements['search'].value;
    var tokens = searchTerm
                  .toLowerCase()
                  .split(' ')
                  .filter(function(token){
                    return token.trim() !== '';
                  });
   if(tokens.length) {
    var searchTermRegex = new RegExp(tokens.join('|'), 'gim');
    var filteredList = books.filter(function(book){
      var bookString = '';
      for(var key in book) {
        if(book.hasOwnProperty(key) && book[key] !== '') {
          bookString += book[key].toString().toLowerCase().trim() + ' ';
        }
      }
      return bookString.match(searchTermRegex);
    });
    render(filteredList);
   }
  };
