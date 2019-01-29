function NewsRepository() {
    var news =[];

    this.getNews = async function () {
        var result = null;

       
        try {
            var url = await fetch("https://newsapi.org/v2/top-headlines?sources=football-italia&apiKey=ec93f5d3952c4ba39417823464d81e8b");
            var response = await url;
            result = await response.json();
            // console.log(result)
    
            for(var i=0; i < result.articles.length; i++){
            news.push(new News(result.articles[i]));
            }
            
            return news;
            
        } catch (error) {
            return result;
        }
    }

    this.getSecondNews = async function () {
        var result = null;

        
        try {
            var url = await fetch("https://newsapi.org/v2/top-headlines?sources=talksport&apiKey=ec93f5d3952c4ba39417823464d81e8b");
            var response = await url;
            result = await response.json();
    
            for(var i=0; i < result.articles.length; i++){
            news.push(new News(result.articles[i]));
            }
            
            return news;
            
        } catch (error) {
            return result;
        }
    }
} 