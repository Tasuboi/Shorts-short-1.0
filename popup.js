document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.sync.get(['count', 'limit'], function(data) {
    document.getElementById('count').textContent = data.count;
    document.getElementById('currentlimit').textContent = data.limit;
  });

  document.getElementById('setLimit').addEventListener('click', function() {
    let limit = document.getElementById('limit').value;
    chrome.storage.sync.set({limit: limit}, function() {
      document.getElementById('currentlimit').textContent = limit;
    });
  });
});
