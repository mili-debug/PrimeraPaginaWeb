function generarLluvia() {
  const contenedor = document.getElementById('lluvia');
  for (let i = 0; i < 60; i++) {
    const love = document.createElement('span');
    love.textContent = 'my love';
    love.style.left = Math.random() * 100 + '%';
    love.style.animationDelay = (Math.random() * 5) + 's';
    love.style.fontSize = (Math.random() * 1.5 + 0.8) + 'rem';
    contenedor.appendChild(love);
  }
}

function mostrarCarta() {
  const carta = document.getElementById('carta');
  carta.classList.add('mostrar');
}

window.onload = generarLluvia;
