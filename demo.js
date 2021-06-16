


var form_event = document.querySelector("#Events-item-form");
var user = document.querySelector("#user");
var tweet = document.querySelector("#comment");

var ulTweets = document.querySelector("#tweets-container");


form_event.addEventListener("submit", (e) => {

    e.preventDefault(); 
    
    var listTweets = document.createElement("li");
    listTweets.innerHTML = `${user.value} Tweeted: ${tweet.value}`;
    
    if(user.value != "" && tweet.value != ""){
        ulTweets.appendChild(listTweets);
    } 
    user.value = "";
    tweet.value = "";
});
