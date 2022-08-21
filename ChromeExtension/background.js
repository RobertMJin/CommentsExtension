//background.js
console.log("Background Script is running");
let color = '#00916E';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({color});
});

chrome.tabs.sendMessage();