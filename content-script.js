let count = 0;

function checkForShort() {
  if (window.location.href.includes('shorts')) {
    chrome.storage.sync.get(['count', 'limit'], function(data) {
      count = data.count || 0; // remove the 'let' keyword
      let limit = data.limit || Infinity;
      count++;
      chrome.storage.sync.set({count: count}, function() {
        console.log('Value is set to ' + count);
        if (count == limit) {
          chrome.runtime.sendMessage({type: "showNotification"});
        }
      });
    });
  }
}

window.addEventListener('yt-navigate-finish', checkForShort);
window.addEventListener('load', checkForShort);
