// Matrix rain effect
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
const columns = canvas.width / 20;
const drops = Array(Math.floor(columns)).fill(1);
function drawMatrix() {
  ctx.fillStyle = 'rgba(5,8,15,0.05)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = '#00f0ff';
  ctx.font = '15px monospace';
  for(let i=0;i<drops.length;i++) {
    const text = chars[Math.floor(Math.random()*chars.length)];
    ctx.fillText(text, i*20, drops[i]*20);
    if(drops[i]*20 > canvas.height && Math.random() > 0.975) drops[i]=0;
    drops[i]++;
  }
}
setInterval(drawMatrix, 50);
window.addEventListener('resize', () => { canvas.width = innerWidth; canvas.height = innerHeight; });

// Custom cursor
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(2)');
  el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
});

// Dark mode (toggle body class)
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-alt');
  if(document.body.classList.contains('dark-alt')) {
    document.body.style.setProperty('--bg-dark', '#0a0f1a');
  } else { document.body.style.setProperty('--bg-dark', '#05080f'); }
});

// Scroll to top button
const scrollBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if(window.scrollY > 500) scrollBtn.classList.add('show');
  else scrollBtn.classList.remove('show');
});
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// CV download alert
document.getElementById('cvBtn')?.addEventListener('click', (e) => {
  e.preventDefault();
  alert('✅ CV ডাউনলোড ডেমো: Alex_Johnson_Neo.pdf');
});

// Contact form
document.getElementById('modernForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('🚀 মেসেজ পাঠানো হয়েছে! আমি শীঘ্রই যোগাযোগ করব।');
  e.target.reset();
});

// Smooth scroll for nav
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = this.getAttribute('href');
    if(target && target !== '#') {
      e.preventDefault();
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animate skill bars when in view
const skillBars = document.querySelectorAll('.bar div');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      const width = entry.target.style.width;
      if(width && width !== '0px') return;
      entry.target.style.width = entry.target.parentElement.parentElement.querySelector('div')?.style.width || '85%';
    }
  });
}, { threshold: 0.5 });
skillBars.forEach(bar => observer.observe(bar));