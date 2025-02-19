let play = document.querySelector("#play");
let playing = document.querySelector("#playing");

console.log(play, playing);

play.addEventListener("click", (e) => {
  // Hide the button
  play.style = "display: none";
  playing.style = " ";

  playTone();
});

function playTone() {
  let audioCtx = new AudioContext();
  
  let oscNode = audioCtx.createOscillator();
  oscNode.frequency.value = 440;  // 400 Hertz

  let gainNode = audioCtx.createGain();
  gainNode.gain.value = 0.5;

  oscNode.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscNode.start(audioCtx.currentTime);
  oscNode.stop(audioCtx.currentTime + 2);
}