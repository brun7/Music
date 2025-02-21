// https://tonejs.github.io
let play = document.querySelector("#play");
let playing = document.querySelector("#playing");

console.log(play, playing);

play.addEventListener("click", (e) => {
  // Hide the button
  play.style = "display: none";
  playing.style = " ";

  playBandPass();
  //playDrums();
  //playTonePart();
  //playWithSilentGaps();
  //playRepeatingNotes();
  //playRandomPentonicScale();
  //playAlternative();
  //playMusic();
  //playMultiKeys();
  //playScale();
  //playTone();
});

function playBandPass() {
  Tone.start();
  let hiHatFilter = new Tone.Filter(15000, "bandpass").toDestination();

  let hiHat = new Tone.NoiseSynth({
    envelope: { attack: 0.001, decay: 0.1, sustain: 0, release: 0},
    volume: -6
  }).connect(hiHatFilter);

  new Tone.Loop( time => {
    hiHat.triggerAttackRelease("16n", time);
  }, "8n").start("0:0:0").stop("4:0:0");

  Tone.Transport.start();
}

function playDrums() {
  Tone.start();

  let hiHat = new Tone.NoiseSynth({
    envelope: { attack: 0.001, decay: 0.1, sustain: 0, release: 0},
    volume: -6
  }).toDestination();

  new Tone.Loop( time => {
    hiHat.triggerAttackRelease("16n", time);
  }, "8n").start("0:0:0").stop("4:0:0");

  Tone.Transport.start();
}

function playTonePart() {
  Tone.start();
  let synth = new Tone.Synth().toDestination();

  new Tone.Part((time,note) => {
    synth.triggerAttackRelease(note, "16n", time);
  }, [
    ["0:0:0", ["C3", "E4"]],
    ["0:0:3", "D4"],
    ["0:1:0", "C4"],
    ["0:1:2", "D4"],
    ["0:2:0", ["E3", "E4"]],
    ["0:2:2", "E4"],
    ["0:3:0", "E4"],
    ["1:0:0", ["G3", "D4"]],
    ["1:0:2", "D4"],
    ["1:1:0", "D4"],
    ["1:2:0", ["E3", "E4"]],
    ["1:2:2", "G4"],
    ["1:3:0", "G4"]
  ]).start("0:0:0");

  Tone.Transport.start();
}

function playWithSilentGaps() {

  let synth = new Tone.Synth().toDestination();
  new Tone.Sequence( (time, note) => {
    synth.triggerAttackRelease(note, "16n", time);
  }, ["C4", null, "B3", "C4", "G3", "A3", null, "B3"], "8n").start("0:0:0").stop("4:0:0");

  Tone.Transport.start();
}


function playRepeatingNotes() {
  Tone.start();
  let synth = new Tone.Synth().toDestination();
  new Tone.Sequence( (time, note) => {
    synth.triggerAttackRelease(note, "16n", time);
  }, ["G4", "C4", "C4", "C4"], "4n").start("0:0:0").stop("4:0:0");

  Tone.Transport.start();
}

function playRandomPentonicScale() {
  let synth = new Tone.PolySynth( Tone.Synth, {
    oscillator: {type: "triangle"},
    volume: -9
  }).toDestination();

  let notes = ["C4", "D4", "E4", "G4", "A4", "C5"];

  new Tone.Loop( time => {
    for(let i=0; i < 3; ++i) {
      if(Math.random() < 0.5) {
        let note = notes[Math.floor(Math.random() * notes.length)];
        synth.triggerAttackRelease(note, "32n", time);
        console.log(note);
      }
    }
  }, "8n").start("0:0:0").stop("8:0:0");

  Tone.Transport.start();
}

function playAlternative() {
  let synth = new Tone.Synth().toDestination();
  new Tone.Loop(time => {
    synth.triggerAttackRelease("C4", "16n", time);
  }, "4n").start("0:0:0").stop("4:0:0");
  Tone.Transport.start();
}

function playMusic() {
  let synth = new Tone.Synth().toDestination();
  let loop = new Tone.Loop(time => {
    synth.triggerAttackRelease("C4", "16n", time);
  }, "4n");

  loop.start("0:0:0");
  loop.stop("4:0:0");

  Tone.Transport.start();
}

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
