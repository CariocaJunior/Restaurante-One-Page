
function iniciaModal(modal3ID) {
  const pizza = document.getElementById(modal3ID);
  pizza.classList.add('mostrar');
  pizza, addEventListener('click', (e) => {
    if (e.target.id == modal3ID || e.target.className == 'fechar') {
      pizza.classList.remove('mostrar');
    }
  })
}

const pizzas = document.querySelector('.pizzas');
pizzas.addEventListener('click', function () {
  iniciaModal('modal-promocao')
});


function iniciaModal1(modal2ID) {
  const hamburger = document.getElementById(modal2ID);
  hamburger.classList.add('mostrar');
  hamburger, addEventListener('click', (e) => {
    if (e.target.id == modal2ID || e.target.className == 'fechar') {
      hamburger.classList.remove('mostrar');
    }
  })
}

const hamburgers = document.querySelector('.hamburgers');
hamburgers.addEventListener('click', function () {
  iniciaModal1('modal-promocao1')
});




function iniciaModal2(modalID) {
  const massa = document.getElementById(modalID);
  massa.classList.add('mostrar');
  massa, addEventListener('click', (e) => {
    if (e.target.id == modalID || e.target.className == 'fechar') {
      massa.classList.remove('mostrar');
    }
  })
}

const massas = document.querySelector('.massas');
massas.addEventListener('click', function () {
  iniciaModal2('modal-promocao2')
});




function iniciaModal3(modal4ID) {
  const bebida = document.getElementById(modal4ID);
  bebida.classList.add('mostrar');
  bebida, addEventListener('click', (e) => {
    if (e.target.id == modal4ID || e.target.className == 'fechar') {
      bebida.classList.remove('mostrar');
    }
  })
}

const bebidas = document.querySelector('.bebidas');
bebidas.addEventListener('click', function () {
  iniciaModal3('modal-promocao3')
});



function galeria1(galeria1ID) {
  const galeria = document.getElementById(galeria1ID);
  galeria.classList.add('mostrar');
  galeria, addEventListener('click', (e) => {
    if (e.target.id == galeria1ID || e.target.className == 'fechar') {
      galeria.classList.remove('mostrar');
    }
  })
}

const foto1 = document.querySelector('.foto1');
foto1.addEventListener('click', function () {
  galeria1('modal-promocao4')
});





function galeria2 (galeria3ID) {
  const galeria2 = document.getElementById(galeria3ID);
  galeria2.classList.add('mostrar');
  galeria2, addEventListener('click', (e) => {
    if (e.target.id == galeria3ID || e.target.className == 'fechar') {
      galeria2.classList.remove('mostrar');
    }
  })
}

const foto2 = document.querySelector('.foto2');
foto2.addEventListener('click', function () {
  galeria2('modal-promocao5')
});


function galeria3 (galeria4ID) {
  const galeria3 = document.getElementById(galeria4ID);
  galeria3.classList.add('mostrar');
  galeria3, addEventListener('click', (e) => {
    if (e.target.id == galeria4ID || e.target.className == 'fechar') {
      galeria3.classList.remove('mostrar');
    }
  })
}

const foto3 = document.querySelector('.foto3');
foto3.addEventListener('click', function () {
  galeria3('modal-promocao6')
});




function galeria4 (galeria5ID) {
  const galeria4 = document.getElementById(galeria5ID);
  galeria4.classList.add('mostrar');
  galeria4, addEventListener('click', (e) => {
    if (e.target.id == galeria5ID || e.target.className == 'fechar') {
      galeria4.classList.remove('mostrar');
    }
  })
}

const foto4 = document.querySelector('.foto4');
foto4.addEventListener('click', function () {
  galeria4('modal-promocao7')
});


function ver (galeria6ID) {
  const ver = document.getElementById(galeria6ID);
  ver.classList.add('mostrar');
  ver, addEventListener('click', (e) => {
    if (e.target.id == galeria6ID || e.target.className == 'fechar') {
      ver.classList.remove('mostrar');
    }
  })
}

const vermais = document.querySelector('.vermais');
vermais.addEventListener('click', function () {
  ver('modal-promocao8')
});


function red (bebidaID) {
  const red = document.getElementById(bebidaID);
  red.classList.add('mostrar');
  red, addEventListener('click', (e) => {
    if (e.target.id == bebidaID || e.target.className == 'fechar') {
      red.classList.remove('mostrar');
    }
  })
}

const redlabel = document.querySelector('#redlabel');
redlabel.addEventListener('click', function () {
  red('modal-promocao9')
});



function mart (bebida1ID) {
  const mart = document.getElementById(bebida1ID);
  mart.classList.add('mostrar');
  mart, addEventListener('click', (e) => {
    if (e.target.id == bebida1ID || e.target.className == 'fechar') {
      mart.classList.remove('mostrar');
    }
  })
}

const martini = document.querySelector('#martini');
martini.addEventListener('click', function () {
  mart('modal-promocao10')
});


function bomb (bebida2ID) {
  const bomb = document.getElementById(bebida2ID);
  bomb.classList.add('mostrar');
  bomb, addEventListener('click', (e) => {
    if (e.target.id == bebida2ID || e.target.className == 'fechar') {
      bomb.classList.remove('mostrar');
    }
  })
}

const bombay = document.querySelector('#bombay');
bombay.addEventListener('click', function () {
  bomb('modal-promocao11')
});


function klumpp (bebida3ID) {
  const klumpp = document.getElementById(bebida3ID);
  klumpp.classList.add('mostrar');
  klumpp, addEventListener('click', (e) => {
    if (e.target.id == bebida3ID || e.target.className == 'fechar') {
      klumpp.classList.remove('mostrar');
    }
  })
}

const wine = document.querySelector('#wine');
wine.addEventListener('click', function () {
  klumpp('modal-promocao12')
});


function conhaque (bebida4ID) {
  const conhaque = document.getElementById(bebida4ID);
  conhaque.classList.add('mostrar');
  conhaque, addEventListener('click', (e) => {
    if (e.target.id == bebida4ID || e.target.className == 'fechar') {
      conhaque.classList.remove('mostrar');
    }
  })
}

const imperial = document.querySelector('#imperial');
imperial.addEventListener('click', function () {
  conhaque('modal-promocao13')
});


function japonesa (entradaID) {
  const japonesa = document.getElementById(entradaID);
  japonesa.classList.add('mostrar');
  japonesa, addEventListener('click', (e) => {
    if (e.target.id == entradaID || e.target.className == 'fechar') {
      japonesa.classList.remove('mostrar');
    }
  })
}

const sushi = document.querySelector('#sushi');
sushi.addEventListener('click', function () {
  japonesa('modal-promocao14')
});


function sopas (entrada1ID) {
  const sopas = document.getElementById(entrada1ID);
  sopas.classList.add('mostrar');
 sopas, addEventListener('click', (e) => {
    if (e.target.id == entrada1ID || e.target.className == 'fechar') {
      sopas.classList.remove('mostrar');
    }
  })
}

const sopa = document.querySelector('#sopa');
sopa.addEventListener('click', function () {
  sopas('modal-promocao15')
});


function carne(entrada2ID) {
  const carne = document.getElementById(entrada2ID);
  carne.classList.add('mostrar');
  carne, addEventListener('click', (e) => {
    if (e.target.id == entrada2ID || e.target.className == 'fechar') {
      carne.classList.remove('mostrar');
    }
  })
}

const picanha = document.querySelector('#picanha');
picanha.addEventListener('click', function () {
  carne('modal-promocao16')
});

function saladas(entrada3ID) {
  const saladas = document.getElementById(entrada3ID);
  saladas.classList.add('mostrar');
  saladas, addEventListener('click', (e) => {
    if (e.target.id == entrada3ID || e.target.className == 'fechar') {
      saladas.classList.remove('mostrar');
    }
  })
}

const salada = document.querySelector('#salada');
salada.addEventListener('click', function () {
  saladas('modal-promocao17')
});

function risotos(entrada4ID) {
  const risotos = document.getElementById(entrada4ID);
  risotos.classList.add('mostrar');
  risotos, addEventListener('click', (e) => {
    if (e.target.id == entrada4ID || e.target.className == 'fechar') {
      risotos.classList.remove('mostrar');
    }
  })
}

const risoto = document.querySelector('#risoto');
risoto.addEventListener('click', function () {
  risotos('modal-promocao18')
});


function vagas(vaga1ID) {
  const vagas = document.getElementById(vaga1ID);
  vagas.classList.add('mostrar');
  vagas, addEventListener('click', (e) => {
    if (e.target.id == vaga1ID || e.target.className == 'fechar') {
      vagas.classList.remove('mostrar');
    }
  })
}

const vaga = document.querySelector('#vaga');
vaga.addEventListener('click', function () {
  vaga('modal-promocao19')
});