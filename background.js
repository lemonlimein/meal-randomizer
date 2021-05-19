chrome.runtime.onMessage.addListener(redirect);

function redirect(request, sender, sendResponse) {
  chrome.tabs.update({ url: request.message});
}