import confetti from "canvas-confetti";

export const runFireworks = () => {
  let duration = 5 * 1000;
  let animationEnd = Date.now() + duration;
  let defaults = { startVelocity: 30, spread: 360, ticks: 90, zIndex: 1400 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  let interval = setInterval(function () {
    let timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    let particleCount = 50 * (timeLeft / duration);
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
};