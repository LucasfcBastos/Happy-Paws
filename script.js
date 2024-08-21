document.getElementById("animalForm").onsubmit = async function (event) {
    event.preventDefault();
    let formData = new FormData();
    
    formData.append("nome", document.getElementById("nome").value);
    formData.append("idade", document.getElementById("idade").value);
    formData.append("sexo", document.getElementById("sexo").value);
    formData.append("tipo", document.getElementById("tipo").value);
    formData.append("foto", document.getElementById("foto").files[0]);
    formData.append("dono", document.getElementById("dono").value);
    formData.append("telefone", document.getElementById("telefone").value);
    formData.append("descricao", document.getElementById("descricao").value);
    formData.append("endereco", document.getElementById("endereco").value);

    let response = await fetch('/add_animal', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        alert("Animal cadastrado com sucesso!");
        window.location.href = "view.html";
    } else {
        alert("Erro ao cadastrar animal.");
    }
};

// Código adicional para carregar e exibir os animais na view.html
