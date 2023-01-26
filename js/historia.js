const video = document.querySelector("video");

video.addEventListener("loadeddata", function (ev) {
  document.getElementById('duracion').innerHTML = `Duración del video: ${video.duration.toFixed(2)}`;
}, true);

function play() {
  video.play()
  console.log("Esta poniendo Play")
}

function stop() {
  video.pause()
  flag = false;
  console.log("Esta poniendo Pause")
}