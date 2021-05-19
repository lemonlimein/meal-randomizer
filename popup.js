var link = "https://www.seriouseats.com/";


function popup() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { "message": "start" });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("appTitle").addEventListener("click", redirect);
    // link = document.getElementById("Breakfast").value;
    // document.getElementById("Breakfast").addEventListener("click", redirect);
    document.getElementById("Breakfast").addEventListener("click", popup);
});


// 

function redirect() {
    chrome.runtime.sendMessage({ "message": link});
}