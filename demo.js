


var form_event = document.querySelector("#Events-item-form");
var user = document.querySelector("#user");

var tweet = document.querySelector("#comment");
var ulTweets = document.querySelector("#tweets-container");


//  Tweet Creation:
form_event.addEventListener("submit", (e) => {

    e.preventDefault(); 
    
    var listTweets = document.createElement("li");
    listTweets.classList.add("listItem");
    listTweets.innerHTML = `<strong>${user.value}</strong> Tweeted: ${tweet.value}`;
    
    if(user.value != "" && tweet.value != ""){
        ulTweets.appendChild(listTweets);
    } 
    user.value = "";
    tweet.value = "";
});

//  TweetDeletion:
ulTweets.addEventListener("click", (e) => {
    if(e.target == "li"){
        e.target.remove();   
       }
});

