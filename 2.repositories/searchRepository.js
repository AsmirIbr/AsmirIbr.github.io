function SearchRepository() {

    this.searchedPageData = async function (input) {
        var result = null;

        try {
            var url = await fetch('http://en.wikipedia.org/w/api.php?&action=query&list=search&srsearch=' + input +
                '&format=json&srlimit=5');
            var response = await url;
            result = await response.json();

            return result.query.search.map(function (search) {
                return search.title;
            });

        } catch (error) {
            return result;
        }
    }
}
