"use strict";

// function CaptureScreenshot() {
//   let player = document.getElementsByTagName("video")[0];

//   let title = "test";

//   var time = player.currentTime;

//   title +=
//     " " +
//     Math.floor(time / 60) +
//     "-" +
//     Math.floor(time % 60) +
//     " screenshot.png";

//   var canvas = document.createElement("canvas");
//   canvas.width = player.videoWidth;
//   canvas.height = player.videoHeight;
//   canvas.getContext("2d").drawImage(player, 0, 0, canvas.width, canvas.height);

//   canvas.toBlob(function (blob) {
//     var downloadLink = document.createElement("a");
//     downloadLink.download = title;
//     downloadLink.href = URL.createObjectURL(blob);
//     downloadLink.click();
//   });
// }

function CaptureScreenshot() {
  // Get the video element
  let player = document.getElementsByTagName("video")[0];

  // Set the crossorigin attribute to anonymous
  player.setAttribute("crossorigin", "anonymous");

  // Get the current time of the video
  var time = player.currentTime;

  // Create an off-screen canvas
  var offScreenCanvas = new OffscreenCanvas(
    player.videoWidth,
    player.videoHeight
  );
  var offScreenCtx = offScreenCanvas.getContext("2d");

  // Draw the current frame of the video on the off-screen canvas
  offScreenCtx.drawImage(player, 0, 0, player.videoWidth, player.videoHeight);

  // Create a link element to trigger the download
  var downloadLink = document.createElement("a");
  downloadLink.download =
    "screenshot" + Math.floor(time / 60) + "-" + Math.floor(time % 60) + ".png";

  // Convert the off-screen canvas to a PNG image and set the link's href to the image data
  offScreenCanvas.convertToBlob({ type: "image/png" }).then(function (blob) {
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.click();
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
