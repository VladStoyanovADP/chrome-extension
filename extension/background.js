const html2canvas = require("html2canvas");

chrome.webNavigation.onHistoryStateUpdated.addListener(
  function (data) {
    chrome.tabs.get(data.tabId, function (tab) {
      chrome.tabs.executeScript(data.tabId, {
        code: 'if (typeof AddScreenshotButton !== "undefined") { AddScreenshotButton(); }',
        runAt: "document_start",
      });
    });
  },
  { url: [{ hostSuffix: ".rumble.com" }] }
);
