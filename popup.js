function redirect() {
    chrome.runtime.sendMessage({ "message": "http://www.seriouseats.com" });
}

function popup() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { "message": "start" });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // document.getElementById("aButton").addEventListener("click", redirect);
    document.getElementById("aButton").addEventListener("click", popup);
});