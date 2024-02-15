// Constants used in the page
const chords = ["A", "A#", "Ab", "B", "B#", "Bb", "C", "C#", "Cb", "D", "D#", "Db", "E", "E#", "Eb", "F", "Fb", "F#", "G", "G#", "Gb"];
const shapes = ["C", "A", "G", "E", "D"];

// Function for button
function go() {
    const chord = chords[Math.floor(Math.random() * chords.length)];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
  
    const modeDropdown = document.getElementById("mode-dropdown");
    const selectedValue = modeDropdown.options[modeDropdown.selectedIndex].value;

    let selectedMode;

    if (selectedValue === "major" || selectedValue === "minor") {
        selectedMode = selectedValue;
    } else {
        selectedMode = Math.random() < 0.5 ? "major" : "minor";
    }

    document.getElementById("chord").textContent = `Chord ${chord} ${selectedMode.charAt(0).toUpperCase() + selectedMode.slice(1)}`;
    document.getElementById("shape").textContent = `Shape ${shape}`;
}

// Event listener for checkbox
document.getElementById('autoClick').addEventListener('change', function() {
    let intervalId;
    if (this.checked) {
        intervalId = setInterval(go, 5000);
    } else {
        clearInterval(intervalId);
    }
});
