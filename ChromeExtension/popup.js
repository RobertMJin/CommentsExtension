function mostLiked(){
  console.log("Likes button pressed");
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    var url = tabs[0].url;
    console.log("Url " + url);
  });
  chrome.runtime.sendMessage(currentWindow, "Likes Mode");
  
}

function mostReplies(){
  console.log("Replies button pressed");
  chrome.runtime.sendMessage(currentWindow, "Replies Mode");
}

document.getElementById("likesButton").addEventListener("click", mostLiked);
document.getElementById("repliesButton").addEventListener("click", mostReplies);