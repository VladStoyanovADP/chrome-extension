chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("youtube.com/watch")) {
    let uniqueVideoKey = tab.url.split("?")[1]
    let urlParameters = new URLSearchParams(uniqueVideoKey)
    console.log(urlParameters)

    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      videoId: urlParameters.get("v")
    })
  }
})