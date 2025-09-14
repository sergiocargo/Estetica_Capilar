function mudarTema(cor) {
  // Muda a cor de fundo da página
  document.body.style.backgroundColor = cor;
  
  // Muda a cor de fundo da navbar e footer, se necessário
  document.querySelector('.navbar').style.backgroundColor = cor;
  document.querySelector('footer').style.backgroundColor = cor;

  // Opcional: Muda a cor dos botões ou outros elementos
  const buttons = document.querySelectorAll('.btn-custom, .btn-success, .btn-warning');
  buttons.forEach(btn => {
    btn.style.backgroundColor = cor;
    btn.style.borderColor = cor;
  });

  // Muda a borda da bolinha clicada para indicar que foi selecionada
  let dots = document.querySelectorAll('.color-dot');
  dots.forEach(dot => {
    dot.classList.remove('selected');  // Remove a seleção da bolinha
  });

  // Marca a bolinha clicada com a borda
  event.target.classList.add('selected');
}
function mudarTema(cor, el){
  document.body.style.backgroundColor = cor;
  const nav = document.querySelector('.navbar'); if(nav) nav.style.backgroundColor = cor;
  const footer = document.querySelector('footer'); if(footer) footer.style.backgroundColor = cor;
  
  document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('selected'));
  if(el) el.classList.add('selected');
}
