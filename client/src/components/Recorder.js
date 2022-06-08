import React from 'react';

class Recorder extends React.Component {
  componentDidMount() {
    let preview = document.getElementById('preview');
    let recording = document.getElementById('recording');
    let startButton = document.getElementById('startButton');
    let stopButton = document.getElementById('stopButton');
    let downloadButton = document.getElementById('downloadButton');
    let logElement = document.getElementById('log');

    let recordingTimeMS = 10000;

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
      logElement.innerHTML = '';
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
  }

  render() {
    return (
      <div>
        <div>
          <button id="startButton">Start Recording</button>
          <h2>Preview</h2>
          <video id="preview" width="160" height="120" autoPlay muted></video>
        </div>
        <div id="log"></div>

        <div>
          <button id="stopButton">Stop Recording</button>
          <h2>Recording</h2>
          <video id="recording" width="160" height="120" controls></video>
          <a id="downloadButton" className="button">
            Download
          </a>
        </div>
      </div>
    );
  }
}

export default Recorder;
