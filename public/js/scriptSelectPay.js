const formulario = document.forms['formadepagamento'];
formulario.addEventListener('submit', function(event){
  event.preventDefault();
  const formadepagamento = document.querySelector('input[name="Name"]:checked');
  console.log(formadepagamento);
  if (formadepagamento.value === 'cartaocredito') {
    window.location.href = '/pagamentocredito';
  } else if (formadepagamento.value === 'pix:id') {
    window.location.href = '/pagamentopix';
  }
});