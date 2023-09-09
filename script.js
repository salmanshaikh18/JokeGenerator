const getJokeBtn = document.getElementById("getJokeBtn");
const jokeDisplay = document.getElementById("jokeDisplay");
const speakButton = document.getElementById("speakButton");

// Function to read the content of the textarea aloud
function speakTextareaContent() {
  const content = jokeDisplay.value;
  if (content) {
    const speechSynthesis = window.speechSynthesis;
    const speechUtterance = new SpeechSynthesisUtterance(content);
    speechSynthesis.speak(speechUtterance);
  }
}

// Event listener for the "Speak" button
speakButton.addEventListener("click", () => {
  speakTextareaContent();
});

// Define the tune (you can replace this with your own audio file URL)
const tuneUrl = "./tune.mp3";

// Create an audio element
const audio = new Audio(tuneUrl);

getJokeBtn.addEventListener("click", () => {
  // Play the tune when the button is clicked
  audio.play();
  fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
    .then((response) => response.json())
    .then((data) => {
      if (data.joke) {
        jokeDisplay.textContent = data.joke;
      } else {
        jokeDisplay.textContent = "No joke found!";
      }
    })
    .catch((error) => {
      console.error("Error fetching joke:", error);
      jokeDisplay.textContent = "Failed to fetch joke.";
    });
});
