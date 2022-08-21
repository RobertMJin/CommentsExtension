chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender, sendResponse) {
      console.log(sender.tab ? "from a content script:" + sender.tab.url :"from the extension");

      if (request.greeting === "Likes button") {
        sendResponse({farewell: "Like received"});
      } else if (request.greeting === "Reply button") {
        sendResponse({farewell: "Reply received"});
      }
    };

chrome.tabs.query({active: true, currentWindow: true}, tabs => {
var url = tabs[0].url;
url = url.substring(32, 43);
console.log(url);
});


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
