//background.js

let color = '#00916E';

chrome.runtime.onInstalled.addListener(() >= {
    chrome.storage.sync.set({color});
});