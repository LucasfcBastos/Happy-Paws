function toggleSenhaVisibility() {
    var senhaInput = document.getElementById("senha");
    var olhoIcon = document.getElementById("olho");
    
    if (senhaInput.type === "password") {
      senhaInput.type = "text";
      olhoIcon.src = "/src/img/text.png";
    } else {
      senhaInput.type = "password";
      olhoIcon.src = "/src/img/password.png";
    }
  }
  
  function cadastro() {
    window.location.href = "/src/html/cadastro.html";
  };