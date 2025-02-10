var xhr = new XMLHttpRequest();
var url = './news.json'; 
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function () {
    console.log("Response received:", xhr.response);

    if (!xhr.response || !xhr.response.news) {
        console.error("Error: News data is missing or undefined!");
        return;
    }
    var newsList = xhr.response.news;
    console.log("News List:", newsList);
    if (!Array.isArray(newsList)) {
        console.error("Error: newsList is not an array!");
        return;
    }

    var newsDiv = document.getElementById('news');

    newsList.forEach(function (newsItem) {
        var newsDivItem = document.createElement('div');
        newsDivItem.classList.add('news-item');

        var title = document.createElement('h2');
        title.textContent = newsItem.title;

        var description = document.createElement('p');
        description.textContent = newsItem.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        var waysList = document.createElement('ul');
        newsItem.ways_to_achieve.forEach(function (way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        var benefitsList = document.createElement('ul');
        newsItem.benefits.forEach(function (benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        newsDivItem.appendChild(title);
        newsDivItem.appendChild(description);
        newsDivItem.appendChild(waysHeader);
        newsDivItem.appendChild(waysList);
        newsDivItem.appendChild(benefitsHeader);
        newsDivItem.appendChild(benefitsList);

        newsDiv.appendChild(newsDivItem);
    });
};

xhr.send();
