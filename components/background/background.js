console.log("background script loaded.");

// Listen for received message from content script and set to background scope globally
chrome.runtime.onMessage.addListener(receiver);

var selectedText = "";

function receiver(message, sender, sendResponse) {
    if(message.text.length > 0){
        selectedText = message.text;
        sendResponse({text: "recieved data "+selectedText});
    } else{
        sendResponse({text: "recieved empty"});
    }

}