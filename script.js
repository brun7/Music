// https://tonejs.github.io
let play = document.querySelector("#play");
let playing = document.querySelector("#playing");

console.log(play, playing);

play.addEventListener("click", (e) => {
  // Hide the button
  play.style = "display: none";
  playing.style = " ";

  //playTone();

  Tone.start();
  let synth = new Tone.Synth({
    oscillator: { type: "square" },
    envelope: { attack: 0.1, decay: 0.3, sustain: 0.8, release: 0.1 },
    volume: -6,
  }).toDestination();
  synth.triggerAttackRelease("A3", .9, 0);
  synth.triggerAttackRelease("B3", .9, 1);
  synth.triggerAttackRelease("C#4",.9, 2);
  synth.triggerAttackRelease("D4", .9, 3);
  synth.triggerAttackRelease("E4", .9, 4);
  synth.triggerAttackRelease("F#4",.9, 5);
  synth.triggerAttackRelease("G#4",.9, 6);
  synth.triggerAttackRelease("A4", .9, 7);

  // playTone();
});

function playTone() {
  let audioCtx = new AudioContext();

  let oscNode = audioCtx.createOscillator();
  oscNode.frequency.value = 440; // 400 Hertz

  let gainNode = audioCtx.createGain();
  gainNode.gain.value = 0.5;

  oscNode.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscNode.start(audioCtx.currentTime);
  oscNode.stop(audioCtx.currentTime + 2);
}
