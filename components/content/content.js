console.log("Content js script loaded.");

window.addEventListener("mouseup", wordSelected);

function wordSelected() {
    var selectedText = window.getSelection().toString();
    if(selectedText.length > 0) {
        console.log("selectedText: " + selectedText);
        // Send selected text to background page
        chrome.runtime.sendMessage({text: selectedText}, function(response) {
            console.log(response.text);
        });
    }
}