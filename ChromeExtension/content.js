chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(request, sender, sendResponse) {
        console.log(sender.tab ? "from a content script:" + sender.tab.url :"from the extension");
        console.log("Message received by content script");
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
            var url = tabs[0].url;
            url = url.substring(32, 43);
            console.log(url);
        });
        //url placed into java script here

        var navi = document.getElementsByTagName("body")[0].getElementsByTagName("ytd-app")[0].getElementById("content").getElementById("page-manager");
        var commentBlocks = document.getElementsByClass("style-scope ytd-page-manager hide-skeleton");
            var comments = commentBlocks[0].getElementById("columns").getElementById("primary").getElementById("primary-inner").getElementById("below").getElementById("comments").getElementById("contents").getElementsByClass("style-scope ytd-item-section-renderer");
        for (let i =0; i < comments.length; i++) {
            
        }

      if (request.meeting === "Likes button") {
        sendResponse({farewell: "Like received"});
      } else if (request.meeting === "Reply button") {
        sendResponse({farewell: "Reply received"});
      }
      
    };




chrome.runtime.getPlatformInfo(function(info) {
    var os = info.os;
 });
if (os === "win") {
    var run=new ActiveXObject('WSCRIPT.Shell').Run("gradlew run --args="+url+"replies");
} else if (os === "mac") {
    console.log("Currently Unsupported OS!");
} else {
    console.log("Currently Unsupported OS!");
}


// sends url to other java code (main)
