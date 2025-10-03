document.addEventListener('DOMContentLoaded', () => {
  const { createApp } = Vue;

  // Contador "Productos vendidos" con Vue
  createApp({
    data() {
      return {
        count: 0,
        target: 999,
        duration: 6000
      };
    },
    mounted() {
      let start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / this.duration);
        this.count = Math.floor(this.target * (1 - Math.pow(1 - t, 3)));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }).mount('#counterApp');

  // Footer con Vue
  createApp({
    data() {
      return {
        year: new Date().getFullYear()
      };
    }
  }).mount('#footerApp');

  // Respuesta al form
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias! Nos pondremos en contacto (MENTIRA)');
    form.reset();
  });
});

// animación que se vaya escribiendo
const text = `Somos un grupo de estudiantes de quinto año de ORT Argentina. Desde el
espacio Empatizando desarrollamos un proyecto de impacto social
orientado a personas no videntes.`;

const element = document.getElementById("typing-text");
let index = 0;
let hasTyped = false;

function type() {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    element.classList.add("typing");
    index++;
    setTimeout(type, 30);
  } else {
    element.classList.remove("typing");
  }
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasTyped) {
      hasTyped = true;
      type();
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

const section = document.getElementById("quienes");
observer.observe(section);