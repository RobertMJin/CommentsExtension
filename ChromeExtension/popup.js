function mostLiked(){
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
  });
}

function mostReplies(){
  
}

document.getElementById("likesButton").addEventListener('click', mostLiked());
document.getElementById("repliesButton").addEventListener('click', mostReplies);