const cover = document.querySelector("#cover");
const openButton = document.querySelector("#openInvite");
const audio = document.querySelector("#backgroundMusic");
const musicButton = document.querySelector("#musicButton");

openButton.addEventListener("click", async () => {
  document.body.classList.remove("locked");
  cover.classList.add("opened");
  musicButton.hidden = false;
  try {
    await audio.play();
  } catch {
    musicButton.classList.add("paused");
    musicButton.textContent = "♪";
  }
});

musicButton.addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await audio.play();
      musicButton.classList.remove("paused");
      musicButton.textContent = "♫";
      musicButton.setAttribute("aria-label", "Pause background music");
    } catch {}
  } else {
    audio.pause();
    musicButton.classList.add("paused");
    musicButton.textContent = "♪";
    musicButton.setAttribute("aria-label", "Play background music");
  }
});

const weddingTime = new Date("2026-11-25T19:00:00+05:30").getTime();
const countdownIds = ["days", "hours", "minutes", "seconds"];

function updateCountdown() {
  const remaining = weddingTime - Date.now();
  if (remaining <= 0) {
    document.querySelector("#countdown").innerHTML = "<p>Today is the special day!</p>";
    return;
  }
  const values = [
    Math.floor(remaining / 86400000),
    Math.floor((remaining / 3600000) % 24),
    Math.floor((remaining / 60000) % 60),
    Math.floor((remaining / 1000) % 60),
  ];
  countdownIds.forEach((id, index) => {
    document.querySelector(`#${id}`).textContent = String(values[index]).padStart(2, "0");
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.14 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const lightbox = document.querySelector("#lightbox");
document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => lightbox.showModal());
});
document.querySelector("#closeLightbox").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});

document.querySelector("#shareInvite").addEventListener("click", async () => {
  const shareData = {
    title: "Roopsha & Subhayan — Wedding Invitation",
    text: "You are invited to celebrate the wedding of Roopsha and Subhayan on 25 November 2026.",
    url: window.location.href,
  };
  if (navigator.share) {
    await navigator.share(shareData);
  } else {
    await navigator.clipboard.writeText(window.location.href);
    alert("Invitation link copied!");
  }
});
