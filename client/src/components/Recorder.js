import React from 'react';

class Recorder extends React.Component {
  render() {
    let preview = document.getElementById('preview');
    let recording = document.getElementById('recording');
    let startButton = document.getElementById('startButton');
    let stopButton = document.getElementById('stopButton');
    let downloadButton = document.getElementById('downloadButton');
    let logElement = document.getElementById('log');

    let recordingTimeMS = 5000;

    function log(msg) {
      logElement.innerHTML += msg + '\n';
    }

    function wait(delayInMS) {
      return new Promise((resolve) => setTimeout(resolve, delayInMS));
    }

    function startRecording(stream, lengthInMS) {
      let recorder = new MediaRecorder(stream);
      let data = [];

      recorder.ondataavailable = (event) => data.push(event.data);
      recorder.start();
      log(recorder.state + ' for ' + lengthInMS / 1000 + ' seconds...');

      let stopped = new Promise((resolve, reject) => {
        recorder.onstop = resolve;
        recorder.onerror = (event) => reject(event.name);
      });

      let recorded = wait(lengthInMS).then(
        () => recorder.state == 'recording' && recorder.stop()
      );

      return Promise.all([stopped, recorded]).then(() => data);
    }

    function stop(stream) {
      stream.getTracks().forEach((track) => track.stop());
    }

    startButton.addEventListener(
      'click',
      function () {
        navigator.mediaDevices
          .getUserMedia({
            video: true,
            audio: true,
          })
          .then((stream) => {
            preview.srcObject = stream;
            downloadButton.href = stream;
            preview.captureStream =
              preview.captureStream || preview.mozCaptureStream;
            return new Promise((resolve) => (preview.onplaying = resolve));
          })
          .then(() => startRecording(preview.captureStream(), recordingTimeMS))
          .then((recordedChunks) => {
            let recordedBlob = new Blob(recordedChunks, { type: 'video/webm' });
            recording.src = URL.createObjectURL(recordedBlob);
            downloadButton.href = recording.src;
            downloadButton.download = 'RecordedVideo.webm';

            log(
              'Successfully recorded ' +
                recordedBlob.size +
                ' bytes of ' +
                recordedBlob.type +
                ' media.'
            );
          })
          .catch((error) => {
            if (error.name === 'NotFoundError') {
              log("Camera or microphone not found. Can't record.");
            } else {
              log(error);
            }
          });
      },
      false
    );

    stopButton.addEventListener(
      'click',
      function () {
        stop(preview.srcObject);
      },
      false
    );

    return (
      <div>
        {/* <div class="left">
          <div id="startButton" class="button">
            Start Recording
          </div>
          <h2>Preview</h2>
          <video id="preview" width="160" height="120" autoplay muted></video>
        </div>
        <div class="right">
          <div id="stopButton" class="button">
            Stop Recording
          </div>
          <h2>Recording</h2>
          <video id="recording" width="160" height="120" controls></video>
          <a id="downloadButton" class="button">
            Download
          </a>
        </div> */}
      </div>
    );
  }
}

// var canvas = document.querySelector('canvas');

// // Optional frames per second argument.
// var stream = canvas.captureStream(25);
// var recordedChunks = [];

// console.log(stream);
// var options = { mimeType: 'video/webm; codecs=vp9' };
// var mediaRecorder = new MediaRecorder(stream, options);

// mediaRecorder.ondataavailable = handleDataAvailable;
// mediaRecorder.start();

// function handleDataAvailable(event) {
//   console.log('data-available');
//   if (event.data.size > 0) {
//     recordedChunks.push(event.data);
//     console.log(recordedChunks);
//     download();
//   } else {
//     // ...
//   }
// }

// function download() {
//   console.log('download func');
//   var blob = new Blob(recordedChunks, {
//     type: 'video/webm',
//   });
//   var url = URL.createObjectURL(blob);
//   var a = document.createElement('a');
//   document.body.appendChild(a);
//   a.style = 'display: none';
//   a.href = url;
//   a.download = 'test.webm';
//   a.click();
//   window.URL.revokeObjectURL(url);
// }

// // demo: to download after 9sec
// setTimeout((event) => {
//   console.log('stopping');
//   mediaRecorder.stop();
// }, 9000);

export default Recorder;
