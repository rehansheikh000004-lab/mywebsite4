// =========================
// DARK MODE TOGGLE
// =========================
const darkModeBtn = document.getElementById("darkModeBtn");

// Check saved mode in localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  darkModeBtn.textContent = "☀️ Light Mode";
}

if (darkModeBtn) {
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      darkModeBtn.textContent = "☀️ Light Mode";
      localStorage.setItem("darkMode", "enabled");
    } else {
      darkModeBtn.textContent = "🌙 Dark Mode";
      localStorage.setItem("darkMode", "disabled");
    }
  });
}

// =========================
// FORM VALIDATION
// =========================
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop form from submitting

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Validate Name
    if (name.length < 3) {
      showMessage("⚠️ Name must be at least 3 characters.", "red");
      return;
    }

    // Validate Email
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      showMessage("⚠️ Please enter a valid email address.", "red");
      return;
    }

    // Validate Message
    if (message.length < 10) {
      showMessage("⚠️ Message must be at least 10 characters.", "red");
      return;
    }

    // If everything is correct
    showMessage("✅ Message sent successfully!", "green");
    form.reset();
  });
}

// Function to display messages
function showMessage(msg, color) {
  formMessage.style.color = color;
  formMessage.textContent = msg;

  // Fade out after 3 seconds if success
  if (color === "green") {
    setTimeout(() => {
      formMessage.textContent = "";
    }, 3000);
  }
}

// =========================
// DIGITAL CLOCK
// =========================
function updateClock() {
  const clock = document.getElementById("clock");
  if (clock) {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");
    clock.textContent = `${hours}:${minutes}:${seconds}`;
  }
}
setInterval(updateClock, 1000);
updateClock(); // call once at start
