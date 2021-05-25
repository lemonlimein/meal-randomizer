if (runFlag) {
  truncatedItemCheck();
}


function truncatedItemCheck() {
  let length = document.getElementsByClassName("truncated-list__item-link").length;
  if (length == 0) {
    finalPick();
  } else {
    let item = document.getElementsByClassName("truncated-list__item-link")[pickItem(length)];
    // window.location.pathname = item.pathname;
    let link = item.href;
    chrome.runtime.sendMessage({ "message": "change", "link": link});
  }
}

function pickItem(listLength) {
  return Math.floor(Math.random() * listLength);
}

function finalPick() {
  let length = document.querySelectorAll("div > a.comp.card").length;
  let item = document.querySelectorAll("div > a.comp.card")[pickItem(length)];
  window.location.pathname = item.pathname;
}