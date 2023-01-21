const html2canvas = require("html2canvas");
chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.executeScript(
      tabs[0].id,
      {
        file: "path/to/your/script.js",
      },
      (result) => {
        html2canvas(result[0]).then((canvas) => {
          // do something with the canvas, such as saving it as an image
        });
      }
    );
  });
});
