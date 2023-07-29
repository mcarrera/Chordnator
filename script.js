function go() {
    var chords = ["A", "A#", "Ab", "B", "B#", "Bb", "C", "C#", "Cb", "D", "D#", "Db", "E", "E#", "Eb", "F", "Fb", "F#", "G", "G#", "Gb"];
    var forms = ["C", "A", "G", "E", "D"];
    var chord = chords[Math.floor(Math.random() * chords.length)];
    var form = forms[Math.floor(Math.random() * forms.length)];
    document.getElementById("chord").textContent = "Chord " + chord;
    document.getElementById("form").textContent = "Form " + form;
}