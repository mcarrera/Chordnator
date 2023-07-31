function go() {
    var chords = ["A", "A#", "Ab", "B", "B#", "Bb", "C", "C#", "Cb", "D", "D#", "Db", "E", "E#", "Eb", "F", "Fb", "F#", "G", "G#", "Gb"];
    var shapes = ["C", "A", "G", "E", "D"];
    var chord = chords[Math.floor(Math.random() * chords.length)];
    var shape = shapes[Math.floor(Math.random() * shapes.length)];
  
    var modeDropdown = document.getElementById("mode-dropdown");
    var selectedValue = modeDropdown.options[modeDropdown.selectedIndex].value;

    var selectedMode;

    if (selectedValue === "major" || selectedValue === "minor") {
        selectedMode = selectedValue;
    } else {
        selectedMode = Math.random() < 0.5 ? "major" : "minor";
    }

    document.getElementById("chord").textContent = `Chord ${chord} ${selectedMode.charAt(0).toUpperCase() + selectedMode.slice(1)}`;
    document.getElementById("shape").textContent = "Shape " + shape;
}