chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === "start") {
      start();
    }
  }
);

function start() {
  getRecipe();
}

function getRecipe() {
  truncatedItemCheck();

  // pick random recipe and launch link as final display
  // console.log(document.querySelectorAll("div > a.comp.card").length);
  finalPick();

  // alert(document.querySelectorAll("div > a.comp.card").length);
}

function truncatedItemCheck() {
  var length = document.getElementsByClassName("truncated-list__item-link").length;
  if (length == 0) {
    return;
  } else {
    var item = document.getElementsByClassName("truncated-list__item-link")[pickItem(length)];
    // redirect to pickItem(length)'s href
    chrome.runtime.sendMessage({ "message": item.href });
    // truncatedItemCheck();
  }
}

function pickItem(listLength) {
  return Math.floor(Math.random() * listLength);
}

function finalPick() {
  var length = document.querySelectorAll("div > a.comp.card").length;
  var item = document.querySelectorAll("div > a.comp.card")[pickItem(length)];
  chrome.runtime.sendMessage({ "message": item.href });
  // redirect to pickItem(document.querySelectorAll("div > a.comp.card").length) href

}
