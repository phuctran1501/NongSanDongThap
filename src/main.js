const track = document.getElementById("brandTrack");
track.innerHTML += track.innerHTML;
const toggle = document.getElementById("chatbotToggle");
const chatbox = document.getElementById("chatbox");

toggle.addEventListener("click", () => {
  if (chatbox.style.display === "none" || chatbox.style.display === "") {
    chatbox.style.display = "block";
  } else {
    chatbox.style.display = "none";
  }
});
