document.addEventListener('DOMContentLoaded', () => {
  // Año en el footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Contador "Productos vendidos"
  const target = 999;
  const duration = 6000;
  const startTime = performance.now();
  const soldEl = document.getElementById('soldCount');

  function animate(now){
    const t = Math.min(1, (now - startTime) / duration);
    const value = Math.floor(target * (1 - Math.pow(1 - t, 3))); // esto es para que arranque lento y después vaya acelerando
    soldEl.textContent = value.toLocaleString('es-AR');
    if(t < 1) requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  // Respuesta al form
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias! Nos Pondremos en contacto (MENTIRA)');
    form.reset();
  });
});
