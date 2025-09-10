// ==========================
// script.js - Estética Capilar
// ==========================

// Mudança de cores via dots
const dots = document.querySelectorAll('.color-dot');

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    // Remove 'selected' de todos
    dots.forEach(d => d.classList.remove('selected'));
    // Adiciona 'selected' no clicado
    dot.classList.add('selected');

    // Muda cor de fundo do body conforme o dot clicado
    document.body.style.backgroundColor = dot.style.backgroundColor;

    // Opcional: mudar também cores de botões ou cards
    const buttons = document.querySelectorAll('.btn-custom, .btn-success, .btn-warning');
    buttons.forEach(btn => {
      btn.style.backgroundColor = dot.style.backgroundColor;
      btn.style.borderColor = dot.style.backgroundColor;
    });
  });
});

// ==========================
// Função de popup para agendamento
// ==========================
function showAgendamentoPopup() {
  const popup = document.createElement('div');
  popup.id = 'agendamento-popup';
  popup.style.position = 'fixed';
  popup.style.top = '50%';
  popup.style.left = '50%';
  popup.style.transform = 'translate(-50%, -50%)';
  popup.style.backgroundColor = '#fff';
  popup.style.padding = '20px';
  popup.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
  popup.style.borderRadius = '10px';
  popup.innerHTML = `
    <h3>Agendamento</h3>
    <p>Deseja agendar seu horário agora?</p>
    <button id="confirmAgendamento" class="btn btn-success me-2">Sim</button>
    <button id="cancelAgendamento" class="btn btn-danger">Não</button>
  `;
  document.body.appendChild(popup);

  document.getElementById('confirmAgendamento').addEventListener('click', () => {
    window.location.href = 'agendamento.html';
  });

  document.getElementById('cancelAgendamento').addEventListener('click', () => {
    document.body.removeChild(popup);
  });
}

// ==========================
// Exemplo: chamar popup ao clicar em algum botão específico
// ==========================
const agendarBtns = document.querySelectorAll('.btn-success');
agendarBtns.forEach(btn => {
  btn.addEventListener('click', showAgendamentoPopup);
});

// ==========================
// Carousel Bootstrap
// ==========================
// O Bootstrap já inicializa automaticamente, então aqui podemos deixar vazio
// Caso queira customizar transição ou autoplay, podemos adicionar:

// const carouselElement = document.querySelector('#carouselExample');
// const carousel = new bootstrap.Carousel(carouselElement, {
//   interval: 3000,  // 3 segundos
//   wrap: true
// });

