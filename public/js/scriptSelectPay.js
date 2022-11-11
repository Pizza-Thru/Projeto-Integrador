const formulario = document.forms['formadepagamento'];
formulario.addEventListener('submit', function(event){
  const idUser= req.session.userid;
  event.preventDefault();
  const formadepagamento = document.querySelector('input[name="Name"]:checked');
  console.log(formadepagamento);
  if (formadepagamento.value === 'cartaocredito') {
    window.location.href = '/pagamentocredito';
  } else if (formadepagamento.value === 'pix') {
    window.location.href = `/pagamentopix/${idUser}`;
  }
});