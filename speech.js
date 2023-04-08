const synth = window.speechSynthesis;

const textToSpeech = (string) => {
  let voice = new SpeechSynthesisUtterance(string);
  voice.text = string;

  // Set the voice to a female voice
  voice.voice = synth.getVoices().find((v) => v.name === "Google UK English Female");

  voice.volume = 0.75;
  voice.rate = 1;
  voice.pitch = 1; // Can be 0, 1, or 2

  synth.speak(voice);
};



