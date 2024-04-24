document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('enviarBtn').addEventListener('click', function(event) {
        event.preventDefault();
        var nome = document.getElementById('email').value;
  
        if (nome) {
            alert(`Foi enviado um email para o endereço ${nome}@gmail.com`);
        } else {
            alert('Por favor, escreva um email para que possa enviar o email');
        }
    });
  
    document.getElementById('cancelarBtn').addEventListener('click', function() {
        window.location.href = "/login.html";
    });
  });