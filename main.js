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
