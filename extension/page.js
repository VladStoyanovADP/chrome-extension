"use strict";

function CaptureScreenshot() {
  let player = document.getElementsByTagName("video")[0];

  player.setAttribute("crossorigin", "anonymous");

  var time = player.currentTime;

  html2canvas(player).then(function (canvas) {
    var downloadLink = document.createElement("a");
    downloadLink.download =
      "screenshot" +
      Math.floor(time / 60) +
      "-" +
      Math.floor(time % 60) +
      ".png";

    canvas.toBlob(function (blob) {
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.click();
    }, "image/png");
  });
}

function AddScreenshotButton() {
  var ytpRightControls = document.querySelector('.videoPlayer-Rumble-cls');
  console.log(ytpRightControls)
  if (ytpRightControls) {
    if (document.getElementsByClassName("screenshotButton").length === 0) {
      var screenshotButton = document.createElement("button");
      screenshotButton.className = "screenshotButton ytp-button";
      screenshotButton.style.width = "auto";
      screenshotButton.innerHTML = "Screenshot";
      screenshotButton.style.cssFloat = "left";
      screenshotButton.onclick = CaptureScreenshot;
      ytpRightControls.prepend(screenshotButton);
    }
  }
}

AddScreenshotButton();
