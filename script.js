function validarFormulario() {
    // Obter os valores dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    // Verificar se ambos os campos estão preenchidos
    if (nome !== '' && email !== '') {
      alert('Dados enviados!');
    } else {
      alert('Preencha os campos corretamente!');
    }
  }