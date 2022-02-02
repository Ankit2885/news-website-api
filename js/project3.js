console.log("news api website");
// https://newsapi.org/v2/top-headlines?country=in&apiKey=dcb2cc8dba12445ea46aede2fe3a5458

// initialize the news api parameters
let apiKey = "dcb2cc8dba12445ea46aede2fe3a5458";
let source = "country=in";

//grap the news container
let newsAccordion = document.getElementById("newsAccordion");

//create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?${source}&apiKey=${apiKey}`, true);

// what to do when response key ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml ="";
        console.log(articles);
        articles.forEach(function(element,index){
            let news = `<h2>${element.source.name} </h2> 
                        <p> ${element.description}</p>
                        <img src="${element["urlToImage"]}" class="rounded mx-auto d-block" alt="Ankit" height=605,width=806>
                        <div class="card">
                            <div class="card-header" id="heading${index}">
                                    <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                        aria-expanded="true" aria-controls="collapse${index}">
                                          <b> Breaking News${index+1} </b> ${element.title}
                                    </button>
                                </h5>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body">${element["content"]}. <a href="${element["url"]}" target="_blank"> Read more here </a></div>
                            </div>
                        </div>
                            <hr>`
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.error("some error occured");
    }
}

xhr.send()


