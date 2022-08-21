
function mostLiked() {
  console.log("Likes button pressed");
  
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    var url = tabs[0].url;
    console.log("Url " + url);
  });

  chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
  var activeTab = tabs[0];
  console.log("TabID: "+activeTab.id);
  chrome.tabs.sendMessage(activeTab.id, {"message": "Likes button"});
  console.log("Message Sent");
  });
}

function mostReplies() {
  console.log("Replies button pressed");
  
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    var url = tabs[0].url;
    console.log("Url " + url);
  });

  chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
  var activeTab = tabs[0];
  console.log("TabID: "+activeTab.id);
  chrome.tabs.sendMessage(activeTab.id, {"message": "Reply button"});
  console.log("Message Sent");
  });
}

document.getElementById("likesButton").addEventListener("click", mostLiked);
document.getElementById("repliesButton").addEventListener("click", mostReplies);