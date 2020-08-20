var node = document.getElementById("to-see");
fetch('https://agile-meadow-78327.herokuapp.com/newsapi.org/v2/everything?q=bitcoin&from=2020-07-20&sortBy=publishedAt&apiKey=9a00fcf93e864762be64be8c2eab7c25').then((res) => {
    return res.json();
}).then((res2) => {

    var news = document.createElement("div");
    console.log(res2);

    res2.data.articles.forEach(function(art) {

        var articleWrapper = document.createElement("div");

        var heading = document.createElement("div");
        heading.classList.add("my-heading");
        var body = document.createElement("div");
        body.classList.add("my-body");
        articleWrapper.appendChild(heading);
        articleWrapper.appendChild(body);
        heading.innerHTML = art.title;
        body.innerHTML = art.description;
        news.appendChild(articleWrapper);

    });

    node.appendChild(news);


})