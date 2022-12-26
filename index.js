// const request = require("request");
// const ffmpeg = require("fluent-ffmpeg");

// const apiKey = 'C9Cl4Ss-TomAnR5FVPQaGw';
// const apiSecret = 'LVQ0lLkyicR0kHq7iKpE2yOsdnSBEWwtWGNk';
// const callbackUrl = 'https://your-callback-url.com';

// // Set up the API client and authenticate
// const authUrl = "https://api.zoom.us/oauth/token";

// const data = {
//     grant_type: "client_credentials",
//     api_key: apiKey,
//     api_secret: apiSecret
// };
// request.post(authUrl, { form: data }, (error, response, body) =>
// {
//     if (error)
//     {
//         console.error(error);
//     } else
//     {
//         const accessToken = JSON.parse(body).access_token;

//         // Set up the API headers
//         const headers = {
//             Authorization: `Bearer ${accessToken}`
//         };

//         // Retrieve the list of recordings for the given meeting
//         const meetingId = "76667119262";
//         const recordingUrl = `https://api.zoom.us/v2/meetings/${meetingId}/recordings`;
//         request.get(recordingUrl, { headers }, (error, response, body) =>
//         {
//             if (error)
//             {
//                 console.error(error);
//             } else
//             {
//                 const recordings = JSON.parse(body);
//                 console.log(body)

//                 // Find the recording for the current meeting
//                 let recording = null;
//                 for (const r of recordings)
//                 {
//                     if (r.meeting_id === meetingId)
//                     {
//                         recording = r;
//                         break;
//                     }
//                 }

//                 if (recording)
//                 {
//                     // Download the MP4 file
//                     const recordingId = recording.id;
//                     const downloadUrl = `https://api.zoom.us/v2/recordings/${recordingId}/content`;
//                     request.get(downloadUrl, { headers }).pipe(fs.createWriteStream("recording.mp4"));

//                     // Extract the audio stream from the MP4 file
//                     ffmpeg()
//                         .input("recording.mp4")
//                         .output("audio.wav")
//                         .audioCodec("pcm_s16le")
//                         .audioChannels(1)
//                         .audioFrequency(16000)
//                         .on("error", console.error)
//                         .on("end", () => console.log("Audio stream extracted."))
//                         .run();
//                 } else
//                 {
//                     console.log("No recording found for the given meeting.");
//                 }
//             }
//         });
//     }
// });