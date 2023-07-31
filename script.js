function go() {
    var chords = ["A", "A#", "Ab", "B", "B#", "Bb", "C", "C#", "Cb", "D", "D#", "Db", "E", "E#", "Eb", "F", "Fb", "F#", "G", "G#", "Gb"];
    var shapes = ["C", "A", "G", "E", "D"];
    var chord = chords[Math.floor(Math.random() * chords.length)];
    var shape = shapes[Math.floor(Math.random() * shapes.length)];
    document.getElementById("chord").textContent = "Chord " + chord;
    document.getElementById("shape").textContent = "Shape " + shape;
}