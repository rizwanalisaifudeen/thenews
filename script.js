// var a = new XMLHttpRequest();

// var b;

// a.onreadystatechange = function() {

//     if (a.readyState == 4 && a.status == 200) {

//         b = JSON.parse(a.response);
//         console.log(a.response);
//         console.log(b);
//         console.log(b.result[0].city);

//     }
// }
// a.open('GET', 'https://codeforces.com/api/user.info?handles=tourist', true);
// a.send();

// var node = document.getElementById("to-see");
// var node1;
// var node2;
// var divi = document.createElement("li");
// fetch('https://codeforces.com/api/user.info?handles=tourist').then((res) => {
//     return res.json();
// }).then((res2) => {
//     // console.log(res2);
//     console.log(res2.result[0]);
//     // node.innerHTML = res2.result[0].city;
//     node1 = document.createTextNode(res2.result[0].firstName);
//     node2 = document.createTextNode(res2.result[0].city);
//     divi.appendChild(node1);
//     divi.appendChild(node2)
//     node.appendChild(divi);



// })

var node = document.getElementById("to-see");


fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-20&sortBy=publishedAt&apiKey=9a00fcf93e864762be64be8c2eab7c25').then((res) => {
    return res.json();
}).then((res2) => {

    var news = document.createElement("div");
    console.log(res2);

    res2.articles.forEach(function(art) {

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