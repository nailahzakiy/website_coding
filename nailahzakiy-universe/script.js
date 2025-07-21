/* ─────────────────────────────────────────────
   1.  Intersection‑Observer  – re‑animate hero
───────────────────────────────────────────── */
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      // remove so it can replay next time we scroll back
      entry.target.classList.remove('show');
    }
  });
});

// everything that should fade/slide
document.querySelectorAll('.fade-in').forEach(el => io.observe(el));


/* ─────────────────────────────────────────────
   2.  Falling‑stars generator                 */
function spawnStar() {
  const star = document.createElement('span');
  star.className = 'shooting-star';
  star.style.left = (50 + Math.random() * 30) + 'vw'; // dari 70vw sampai 100vw
  star.style.top = (0 + Math.random() * 30) + 'vh';   // dari 0vh sampai 30vh
  //star.style.animationDelay = Math.random() * 2 + 's';
  star.style.animationDelay = '0s';
  const container = document.querySelector('.stars-container');
  container.appendChild(star);

  // Hapus setelah animasi selesai
  star.addEventListener('animationend', () => star.remove());
}

setInterval(spawnStar, 800);

