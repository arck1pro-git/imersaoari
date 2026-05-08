(function() {
  const target = new Date("2026-05-26T20:00:00-03:00").getTime();

  function updateCountdown() {
    const now = Date.now();
    const difference = target - now;

    if (difference <= 0) {
      const dayEl = document.getElementById("countdown-days");
      const hourEl = document.getElementById("countdown-hours");
      const minEl = document.getElementById("countdown-minutes");
      const secEl = document.getElementById("countdown-seconds");
      if (dayEl) dayEl.textContent = "00";
      if (hourEl) hourEl.textContent = "00";
      if (minEl) minEl.textContent = "00";
      if (secEl) secEl.textContent = "00";
      return;
    }

    const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0");
    const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0");
    const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0");
    const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");

    const dayEl = document.getElementById("countdown-days");
    const hourEl = document.getElementById("countdown-hours");
    const minEl = document.getElementById("countdown-minutes");
    const secEl = document.getElementById("countdown-seconds");

    if (dayEl) dayEl.textContent = days;
    if (hourEl) hourEl.textContent = hours;
    if (minEl) minEl.textContent = minutes;
    if (secEl) secEl.textContent = seconds;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateCountdown);
  } else {
    updateCountdown();
  }

  setInterval(updateCountdown, 1000);
})();
