<script>
        const formulario = document.forms['formulario'];

        formulario.addEventListener('submit', (evento) => {


            // Exemplo para o Bruno Paraguassu 

            const formaDePagamento = event.target.elements['formaDePagamento'].value;

            const escolheuDebito = formaDePagamento == 'debito';
            const escolheuPix = formaDePagamento == 'pix';

            if (escolheuDebito) {
                event.target.action = '/checkout/debito';
            }
            else if (escolheuPix) {
                event.target.action = '/checkout/pix'
            }
            else {
                evento.preventDefault();
                alert('Precisa ser uma das opcoes a cima');
            }

        });
    </script>