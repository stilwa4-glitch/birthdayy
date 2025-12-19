// ambil nama dari URL
const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "You";
document.getElementById("name").innerText = name;

// typing effect
const text = "Nama kamu keren banget, serius deh ✨";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    typingText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 55);
  }
}
typeEffect();

// confetti effect
function partyPop() {
  confetti({
    particleCount: 250,
    spread: 120,
    origin: { y: 0.6 },
    colors: ['#ff86c1','#7dd175','#7ab5ff']
  });
}

// GSAP timeline (FIXED FLOW)
const tl = gsap.timeline();

tl.from(".hero", {
    opacity: 0,
    y: 40,
    duration: 1
  })

  .from(".four", {
    opacity: 0,
    scale: 0.8,
    duration: 0.8
  })

  // TUNGGU BACA PESAN
  .to(".hero", {
    opacity: 0,
    y: -50,
    duration: 1
  }, "+=3")

  .to(".four", {
    opacity: 0,
    y: -100,
    duration: 1
  }, "-=0.6")

  // PARTY TIME 🎆
  .add(() => partyPop())

  // FINAL SCENE
  .from(".six", {
    opacity: 0,
    scale: 0.6,
    duration: 1
  })

  .from(".nine p", {
    opacity: 0,
    y: 40,
    stagger: 0.4
  });

// replay
replay.onclick = () => {
  tl.restart();
};

// handle audio
const audio = document.querySelector('.song');
if (audio) {
  const playAudio = () => {
    audio.play().catch(err => {
      console.log('Audio play failed:', err);
      // add a play button if autoplay blocked
      if (!document.querySelector('.play-music-btn')) {
        const playBtn = document.createElement('button');
        playBtn.textContent = '🔊 Play Music';
        playBtn.className = 'btn play-music-btn';
        playBtn.style.position = 'fixed';
        playBtn.style.bottom = '20px';
        playBtn.style.right = '20px';
        playBtn.style.zIndex = '1000';
        playBtn.onclick = () => {
          audio.play();
          playBtn.remove();
        };
        document.body.appendChild(playBtn);
      }
    });
  };

  // try to play on load
  window.addEventListener('load', () => {
    playAudio();
  });

  // also try on first user interaction
  document.addEventListener('click', playAudio, { once: true });
}
