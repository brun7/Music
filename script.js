// https://tonejs.github.io
let play = document.querySelector("#play");
let playing = document.querySelector("#playing");

console.log(play, playing);

play.addEventListener("click", (e) => {
  // Hide the button
  play.style = "display: none";
  playing.style = " ";

  //playTone();


  playMultiKeys();
  //playScale();
  // playTone();
});

function playMultiKeys() {
  Tone.start();
  let synth = new Tone.PolySynth({
    oscillator: { type: "square" },
    envelope: { attack: 0.1, decay: 0.3, sustain: 0.8, release: 0.1 },
    volume: -6,
  }).toDestination();

  synth.triggerAttackRelease(["A3", "C#4"], 0.9, 0);
  synth.triggerAttackRelease(["B3", "D4"], 0.9, 1);
  synth.triggerAttackRelease(["C#4", "E4"],0.9, 2);
  synth.triggerAttackRelease(["D4", "F#4"], 0.9, 3);
  synth.triggerAttackRelease(["E4", "G#4"], 0.9, 4);
  synth.triggerAttackRelease(["F#4", "A4"],0.9, 5);
  synth.triggerAttackRelease(["G#4", "B4"],0.9, 6);
  synth.triggerAttackRelease(["A4", "A4", "C#5"], .9, 7);
}

function playScale() {
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
}

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
