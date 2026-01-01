const cards = document.querySelectorAll('.lobo-card');
const descricoes = document.querySelectorAll('.lobo-detalhe');
  const trigger = window.innerHeight * 0.6;

function exibirDescricao(index) {
  descricoes.forEach(desc => {
    desc.classList.remove('ativo');
  });

  const alvo = descricoes[index];
  alvo.classList.add('ativo');

  alvo.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}


function animacaoscroll() {
  descricoes.forEach(section => {


    const top = section.getBoundingClientRect().top;
    

    if (top < trigger) {
      section.classList.add('ativo');
    }
  });
}

window.addEventListener('scroll', animacaoscroll);

cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    exibirDescricao(index);
  });
});
