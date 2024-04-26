document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('enviarBtn').addEventListener('click', function(event) {
        event.preventDefault();
        var email = document.getElementById('email').value;
  
        if (email) {
            alert(`Um email foi enviado para o endereço ${email}`);
        } else {
            alert('Por favor, insira um endereço de email para enviar o email.');
        }
    });
  
    document.getElementById('cancelarBtn').addEventListener('click', function() {
        window.location.href = "/login.html";
    });
});