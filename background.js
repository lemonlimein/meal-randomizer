chrome.runtime.onMessage.addListener(function (request) {
  if (request.message == 'start') {
    chrome.tabs.create({ url: request.link });
    console.log('tab created...');
    chrome.tabs.executeScript({
      code: 'runFlag = true;'
    });
  }
  if(request.message == 'change'){
    chrome.tabs.create({ url: request.link });
    console.log('tab changed...');
    chrome.tabs.executeScript({
      code: 'runFlag = true;'
    });
  }
});