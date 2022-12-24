(() =>
{
    let youtubeLeftControls, youtubePlayer
    let currentVideo = ""


    chrome.runtime.onMessage.addListener((obj, sender, reponse) => {
        let { type, value, videoId } = obj

        if (type === "NEW"){
            currentVideo = videoId
            newVideoLoaded()
        }
    })
})();
