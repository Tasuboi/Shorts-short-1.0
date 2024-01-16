chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({count: 0});
  chrome.alarms.create('resetCount', {periodInMinutes: 1440});
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'resetCount') {
    chrome.storage.sync.set({count: 0});
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "showNotification") {
    chrome.windows.create({
      url: chrome.runtime.getURL("notification.html"),
      type: "popup",
      width: 300,
      height: 100
    });
  } 
});